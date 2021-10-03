<x-layout>
    <form action="/new-post" method="POST">
        <div class="form-group">
            <x-textarea/>
            @csrf
            <button type="submit" class="btn mt-3"><i class=" fas fa-pencil-alt"></i><br/>Text</button>
        </div>
    </form>
    @error('body')
    <p class="text-danger mt-1">{{$message}}</p>
    @enderror
    <div class="mt-3" id="comments">
        <x-vue-comment/>
        <x-comment :posts="$posts"/>
    </div>
</x-layout>



