<?php
use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\Permission;
class EntrustTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::truncate();
        Permission::truncate();
        Role::create([
            'name' => 'admin',
            'description'=>'admin role',
        ]);

        Role::create([
            'name' => 'demonstrator',
            'description'=>'admin role',
        ]);

        Role::create([
            'name' => 'clerk',
            'description'=>'admin role',
        ]);
        Permission::create([
            'name' => 'customer-info-permission',
            'description'=>'admin role',
        ]);

        Permission::create([
            'name' => 'user-info-permission',
            'description'=>'admin role',
        ]);

        Permission::create([
            'name' => 'modify-info-permission',
            'description'=>'admin role',
        ]);
    }
}
