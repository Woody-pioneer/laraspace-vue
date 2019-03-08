<?php
namespace App\Http\Controllers\Users;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    public function emailExist(Request $request)
    {
        if (User::whereEmail($request->email)->first()) {
            return 'false';
        } else {
            return 'true';
        }
    }

    public function allUsers()
    {
       return $users = User::paginate(5);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return $users = User::paginate(5);
    }
    public function store(Request $request)
    {
        $user = new User();
        $user->name=$request->get('name');
        $user->email=$request->get('email');
        $user->avatar=$request->get('avatar');
        $user->role=$request->get('role');
        $user->password=app('hash')->make('123456');
        $user->save();
        return $users = User::paginate(5);


    }
    public function update(Request $request,$id)
    {
        $user = User::findOrFail($id);
        $user->name=$request->get('name');
        $user->email=$request->get('email');
        $user->avatar=$request->get('avatar');
        $user->role=$request->get('role');
        $user->save();
        return $users = User::paginate(5);


    }
}
