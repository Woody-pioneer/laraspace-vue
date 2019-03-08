<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
class UserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->assertTrue(true);
    }

    public function test_user_can_login(){
        $response = $this->post('api/auth/login',['email'=>'admin@laraspace.in','password'=>'admin@123']);
        $response->assertSuccessful();
        $response->assertJson(['user'=>[
            'id'=>1
        ]]);
    }
    public function test_get_all_users(){
        $response = $this->post('api/auth/login',['email'=>'admin@laraspace.in','password'=>'admin@123']);
        app('log')->info($response['data']->token);
        $response = $this->get('api/admin/users/get',['token'=>$response['data']->token]);

        $response->assertSuccessful();
    }
}
