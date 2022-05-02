<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    private $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function index()
    {
        if (Auth::check()) {
            $select_all_users = DB::table('users')->select('*')->get();

            return view('users', ['users' => $select_all_users->all()]);
        }
        return redirect()->route('login');
    }

    public function createUserHandler()
    {
        if (Auth::check() && $this->isAdmin()) {
            $this->request->validate([
                'email' => 'required|string|email|unique:users|min:6|max:255',
                'password' => 'required|min:3|max:25',
                'name' => 'nullable|min:3|max:255',
                'work' => 'nullable|min:3|max:255',
                'address' => 'nullable|min:3|max:255',
                'phone' => 'nullable|regex:/(0)[0-9]/|not_regex:/[a-z]/|min:9',
                'vk_social_media' => 'nullable|min:3|max:25',
                'telegram_social_media' => 'nullable|min:3|max:25',
                'instagram_social_media' => 'nullable|min:3|max:25',
            ]);

            $user = User::create([
                'email' => $this->request->email,
                'password' => Hash::make($this->request->password),
            ]);
            DB::table('users')
                ->where('id', $user->id)
                ->update(['name' => $this->request->name, 'work' => $this->request->work, 'phone' => $this->request->phone, 'address' => $this->request->address, 'status_online' => $this->request->select_status]);
            DB::table('users')
                ->where('id', $user->id)
                ->update(['vk_social_media' => $this->request->vk, 'telegram_social_media' => $this->request->telegram, 'instagram_social_media' => $this->request->instagram]);

            if ($this->request->image == null) {
                DB::table('users')
                    ->where('id', $user->id)
                    ->update(['image' => 'uploads/image-defolt.jpg']);
            } else {
                $filename = $this->request->image->store('uploads');
                DB::table('users')->where('id', $user->id)->update(['image' => $filename]);
            }
            return redirect()->route('home')->with('status', 'You have successfully registered a user!');
        }
        return redirect()->route('login');
    }

    public function pageAvatar($id)
    {
        $select_user = DB::table('users')->select('*')->where('id', $id)->first();

        if (Auth::check()) {
            if ($this->isAdmin()) {
                return view('media', ['user' => $select_user]);
            }
            if ($this->isUser($id)) {
                return view('media', ['user' => $select_user]);
            }
            return redirect()->route('home')->with('status', 'You can only edit your profile!');
        }
        return redirect()->route('login');


    }

    public function editImageUser($id)
    {
        $this->request->validate([
            'image' => 'required',
        ]);
        $select_user = DB::table('users')->select('*')->where('id', $id)->first();
        Storage::delete($select_user->image);

        $filename = $this->request->image->store('uploads');

        DB::table('users')->where('id', $id)->update(['image' => $filename]);
        return redirect()->route('profile')->with('status', 'Photo successfully updated!');
    }

    public function pageRegister()
    {
        return view('page_register');
    }

    public function pageLogin()
    {
        return view('page_login');
    }

    public function pageProfile()
    {
        if (Auth::check()) {
            $select_user = Auth::user();
            return view('page_profile', ['user' => $select_user]);
        }
        return redirect()->route('login');
    }

    public function pageCreateUser()
    {
        if (Auth::check() && $this->isAdmin()) {
            $select_status_online = DB::table('user_status_online')->select('*')->get();

            return view('create_user', ['select_status' => $select_status_online]);
        }
        return redirect()->route('home');
    }

    public function pageEdit($id)
    {
        if (Auth::check()) {
            if ($this->isAdmin()) {
                $select_user = DB::table('users')->select('*')->where('id', $id)->get();
                $select_user->all();
                foreach ($select_user as $user) {
                    return view('edit', ['user' => $user]);
                }
            }
            if ($this->isUser($id)) {
                $select_user = DB::table('users')->select('*')->where('id', $id)->get();
                $select_user->all();
                foreach ($select_user as $user) {
                    return view('edit', ['user' => $user]);
                }
            }
            return redirect()->route('home')->with('status', 'You can only edit your profile!');
        }
        return redirect()->route('login');
    }

    public function userEdit($id)
    {
        DB::table('users')
            ->where('id', $id)
            ->update(['name' => $this->request->name, 'work' => $this->request->work, 'phone' => $this->request->phone, 'address' => $this->request->address]);
        return redirect()->route('profile')->with('status', 'You have successfully updated your profile information!');
    }

    public function pageSecurity($id)
    {
        if (Auth::check()) {
            if ($this->isAdmin()) {
                $select_user = DB::table('users')->select('*')->where('id', $id)->get();
                $select_user->all();
                foreach ($select_user as $user) {
                    return view('security', ['user' => $user]);
                }
            }
            if ($this->isUser($id)) {
                $select_user = DB::table('users')->select('*')->where('id', $id)->get();
                $select_user->all();
                foreach ($select_user as $user) {
                    return view('security', ['user' => $user]);
                }
            }
            return redirect()->route('home')->with('status', 'You can only edit your profile!');
        }
        return redirect()->route('login');
    }

    public function userEditSecurity($id)
    {
        if ($this->checkUserEmail($id) != $this->request->email) {
            $this->request->validate([
                'email' => 'required|string|email|unique:users|min:6|max:255',
                'password' => 'nullable|min:3|max:25',
            ]);
            $this->securityUpdateEmailPassword($id);
        } else {
            $this->request->validate([
                'email' => 'required|string|email|min:6|max:255',
                'password' => 'nullable|min:3|max:25',
            ]);
            $this->securityUpdateEmailPassword($id);
        }
        return redirect()->route('profile')->with('status', 'You have successfully updated your profile!');
    }

    public function pageStatus($id)
    {
        $user_data = $this->select_user_by_id($id);
        $select_status_online = DB::table('user_status_online')->select('*')->get();

        if (Auth::check()) {
            if ($this->isAdmin()) {
                return view('status', ['user' => $user_data, 'select_status' => $select_status_online]);
            }
            if ($this->isUser($id)) {
                return view('status', ['user' => $user_data, 'select_status' => $select_status_online]);
            } else {
                return redirect()->route('home')->with('status', 'You can only edit your profile!');
            }
        }
        return redirect()->route('login');
    }

    public function updateStatusHandler($id)
    {
        DB::table('users')->where('id', $id)->update(['status_online' => $this->request->select_status]);
        return redirect()->route('profile')->with('status', 'You have successfully updated your profile!');
    }

    public function deleteUser($id)
    {
        $select_user = DB::table('users')->select('*')->where('id', $id)->first();

        if (Auth::check()) {
            if ($this->isAdmin()) {
                Storage::delete($select_user->image);
                $this->delete_user_by_id($id);
                if (Auth::user()->id == $id) {
                    Auth::logout();
                    $this->request->session()->invalidate();
                    $this->request->session()->regenerateToken();
                    die();
                }
                return redirect()->route('home')->with('status', 'User deleted!');
            }
            //User
            if ($this->isUser($id)) {
                Storage::delete($select_user->image);
                $this->delete_user_by_id($id);
                Auth::logout();
                $this->request->session()->invalidate();
                $this->request->session()->regenerateToken();
            }
            return redirect()->route('home')->with('status', 'You can only edit your profile!');
        }
        return redirect()->route('login');
    }

    function isAdmin()
    {
        if (Auth::user()->roles_mask == 1) {
            return true;
        }
        return false;
    }

    function isUser($id)
    {
        if (Auth::user()->id == $id) {
            return true;
        }
        return false;
    }

    function checkUserEmail($id)
    {
        $email = DB::table('users')->where('id', $id)->first()->email;
        return $email;
    }

    function securityUpdateEmailPassword($id)
    {
        if ($this->request->password == null) {
            DB::table('users')->where('id', $id)->update(['email' => $this->request->email]);
        } else {
            DB::table('users')->where('id', $id)->update(['email' => $this->request->email, 'password' => Hash::make($this->request->password)]);
        }
    }

    function select_user_by_id($id)
    {
        $select_user = DB::table('users')->select('*')->where('id', $id)->get();
        $select_user->all();
        foreach ($select_user as $user) {
            return $user;
        }
    }

    function delete_user_by_id($user_id)
    {
        DB::table('users')->where('id', $user_id)->delete();
        return true;
    }
}
