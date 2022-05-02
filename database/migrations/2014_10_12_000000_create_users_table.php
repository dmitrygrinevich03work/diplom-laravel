<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new  class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('email');
            $table->string('password');
            $table->string('image')->default('uploads/no-image.png');
            $table->integer('status_online')->default(0);
            $table->string('work')->nullable();
            $table->string('phone')->nullable();
            $table->string('address')->nullable();
            $table->string('vk_social_media')->nullable();
            $table->string('telegram_social_media')->nullable();
            $table->string('instagram_social_media')->nullable();
            $table->integer('roles_mask')->default(0);
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
