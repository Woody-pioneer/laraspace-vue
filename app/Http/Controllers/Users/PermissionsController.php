<?php
namespace App\Http\Controllers\Users;

use App\Models\Permission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PermissionsController extends Controller
{


    public function index()
    {
       $permissions = Permission::paginate(2);
       return response()->json($permissions);
    }

    public function destroy($id)
    {
        $permission = Permission::findOrFail($id);
        $permission->delete();
        return $permissions = Permission::paginate(5);
    }
    public function store(Request $request)
    {
        $permission = new Permission();
        $permission->name=$request->get('name');
        $permission->email=$request->get('email');
        $permission->avatar=$request->get('avatar');
        $permission->role=$request->get('role');
        $permission->password=app('hash')->make('123456');
        $permission->save();
        return $permissions = Permission::paginate(5);


    }
    public function update(Request $request,$id)
    {
        $permission = Permission::findOrFail($id);
        $permission->name=$request->get('name');
        $permission->email=$request->get('email');
        $permission->avatar=$request->get('avatar');
        $permission->role=$request->get('role');
        $permission->save();
        return $permissions = Permission::paginate(2);


    }
}
