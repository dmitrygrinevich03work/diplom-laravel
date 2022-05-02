<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     *
     */

    public function test_assertStatusPageHome()
    {
        $response = $this->get('/');
        $response->assertStatus(302);
    }

    public function test_assertStatusPageLogin()
    {
        $response = $this->get('/login');
        $response->assertStatus(200);
    }

    public function test_assertStatusPageRegister()
    {
        $response = $this->get('/register');
        $response->assertStatus(200);
    }

    public function test_assertStatusPageRegistration()
    {
        $response = $this->get('/register');
        $response->assertStatus(200);
    }


    public function test_asserSeetPageLogin()
    {
        $value = 'remember';
        $response = $this->get('/login');
        $response->assertSeeText($value);
    }

    public function test_asserSeetPageRegister()
    {
        $value = 'Name';
        $response = $this->get('/register');
        $response->assertSeeText($value);
    }

    public function test_register()
    {
        $data = [
            'name' => 'Dmitry',
            'email' => 'dmitry@gmail.com',
            'password' => '123',
        ];

        User::create_user($data);
        $this->assertDatabaseHas('users', [
            'name' => 'Dmitry',
            'email' => 'dmitry@gmail.com',
        ]);
    }

}
