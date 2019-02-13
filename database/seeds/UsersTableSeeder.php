<?php
use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'admin@laraspace.in',
            'name' => 'Jane Doe',
            'role' => 'admin',
            'avatar'=>'default.png',
            'password' => bcrypt('admin@123')
        ]);

        User::create([
            'email' => 'shane@laraspace.in',
            'name' => 'Shane White',
            'role' => 'user',
            'avatar'=>'default.png',
            'password' => bcrypt('hank@123')
        ]);

        User::create([
            'email' => 'adam@laraspace.in',
            'name' => 'Adam David',
            'role' => 'user',
            'avatar'=>'default.png',
            'password' => bcrypt('jesse@123')
        ]);
    }
}
