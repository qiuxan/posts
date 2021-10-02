<?php

namespace App\Http\Controllers;
use App\Events\NewComment;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(){

        $attribute= request()->validate(
            ['body'=>'required'],
            [
                'body.required'=>'Comment cannot be empty.',
            ]);


        $newPost=Post::create($attribute);

        NewComment::dispatch($newPost);

        return back();

    }

    public  function  index(){
        return view('posts',['posts'=>Post::orderBy('created_at','desc')->get()]);
    }
}
