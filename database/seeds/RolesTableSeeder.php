<?php
use Illuminate\Database\Seeder;
use App\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::truncate();
        Role::create([
            'email' => 'admin@laraspace.in',
            'name' => 'Jane Doe',
            'role' => 'admin',
            'avatar'=>'default.png',
            'password' => bcrypt('admin@123')
        ]);

        Role::create([
            'email' => 'shane@laraspace.in',
            'name' => 'Shane White',
            'role' => 'user',
            'avatar'=>'default.png',
            'password' => bcrypt('hank@123')
        ]);

        Role::create([
            'email' => 'adam@laraspace.in',
            'name' => 'Adam David',
            'role' => 'user',
            'avatar'=>'default.png',
            'password' => bcrypt('jesse@123')
        ]);
    }
}
