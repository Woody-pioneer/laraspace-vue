<?php
namespace App\Http\Controllers\Demo;

use App\Permission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PermissionsController extends Controller
{


    public function index()
    {
       return $users = Permission::paginate(5);
    }

    public function destroy($id)
    {
        $user = Permission::findOrFail($id);
        $user->delete();
        return $users = Permission::paginate(5);
    }
    public function store(Request $request)
    {
        $user = new Permission();
        $user->name=$request->get('name');
        $user->email=$request->get('email');
        $user->avatar=$request->get('avatar');
        $user->role=$request->get('role');
        $user->password=app('hash')->make('123456');
        $user->save();
        return $users = Permission::paginate(5);


    }
    public function update(Request $request,$id)
    {
        $user = Permission::findOrFail($id);
        $user->name=$request->get('name');
        $user->email=$request->get('email');
        $user->avatar=$request->get('avatar');
        $user->role=$request->get('role');
        $user->save();
        return $users = Permission::paginate(5);


    }
}
