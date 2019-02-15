<?php
namespace App\Http\Controllers\Demo;

use App\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RolesController extends Controller
{


    public function index()
    {
       return $users = Role::paginate(5);
    }

    public function destroy($id)
    {
        $user = Role::findOrFail($id);
        $user->delete();
        return $users = Role::paginate(5);
    }
    public function store(Request $request)
    {
        $user = new Role();
        $user->name=$request->get('name');
        $user->email=$request->get('email');
        $user->avatar=$request->get('avatar');
        $user->role=$request->get('role');
        $user->password=app('hash')->make('123456');
        $user->save();
        return $users = Role::paginate(5);


    }
    public function update(Request $request,$id)
    {
        $user = Role::findOrFail($id);
        $user->name=$request->get('name');
        $user->email=$request->get('email');
        $user->avatar=$request->get('avatar');
        $user->role=$request->get('role');
        $user->save();
        return $users = Role::paginate(5);


    }
}
