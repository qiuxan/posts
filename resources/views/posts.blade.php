<x-layout>

    <form action="/new-post" method="POST">
        <x-textarea/>
        @csrf

        <button type="submit" class="hover:bg-blue-600 bg-blue-500 font-semibold px-10 py-2 rounded-2xl text-white text-xs uppercase">POST</button>
    </form>

    @error('body')
    <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror

    @foreach($posts as $post)
        <p>{{$post->body}}</p>
        <p>{{$post->created_at->format('d F Y')}} at {{$post->created_at->format('H : m')}}</p>
        <p>-----------------</p>
    @endforeach
        Hello world

    <x-comment/>



</x-layout>

