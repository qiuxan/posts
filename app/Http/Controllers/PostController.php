<?php

namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(){


//        return request();


        $attribute= request()->validate(
            ['body'=>'required'],
            [
                'body.required'=>'Comment cannot be empty.',
            ]);



//        return $attribute;

        Post::create($attribute);

        return back();

    }

    public  function  index(){
        return view('posts',['posts'=>Post::orderBy('created_at','desc')->get()]);
    }
}
