<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
require __DIR__.'/auth.php';

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/register', [HomeController::class, 'pageRegister'])->name('register');
Route::post('/register_handler', [RegisteredUserController::class, 'store'])->name('register.handler');
Route::get('/login', [HomeController::class, 'pageLogin'])->name('login');
Route::post('login_handler', [AuthenticatedSessionController::class, 'store'])->name('login.handler');
Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
Route::get('/profile', [HomeController::class, 'pageProfile'])->name('profile');
Route::get('/create_user', [HomeController::class, 'pageCreateUser'])->name('create.user');
Route::post('/create_user_handler', [HomeController::class, 'createUserHandler'])->name('create.user.handler');
Route::post('/load_image/{id}', [HomeController::class, 'editImageUser'])->name('edit.image');
Route::get('/edit/{id}', [HomeController::class, 'pageEdit'])->name('edit');
Route::post('/user_edit/{id}', [HomeController::class, 'userEdit'])->name('user.edit');
Route::get('/avatar/{id}', [HomeController::class, 'pageAvatar'])->name('page.avatar');
Route::get('/security/{id}', [HomeController::class, 'pageSecurity'])->name('user.security');
Route::post('/user_edit_security/{id}', [HomeController::class, 'userEditSecurity'])->name('user.edit.security');
Route::get('/status/{id}', [HomeController::class, 'pageStatus'])->name('status');
Route::post('/update_user_status_handler/{id}', [HomeController::class, 'updateStatusHandler'])->name('update.user.status');
Route::get('/delete_user/{id}', [HomeController::class, 'deleteUser'])->name('delete.user');
