<?php

namespace App\Http\Controllers;
use App\Models\Post;

use Illuminate\Http\Request;

class CommentController extends Controller
{

    public  function  index(){
        return Post::orderBy('created_at','desc')->get();
    }
    //
}
