@props(['posts'])
@foreach($posts as $post)
    <div class="card mt-3">

        <div class="card-header">
            <div class="row">
                <div class="col-1"><i class="fas fa-user-circle fa-3x"></i> </div>
                <div class="col">
                    <b>Guest</b>
                    <p class="card-text mb-2 text-muted">{{$post->created_at->format('d F Y')}} at {{$post->created_at->format('H : m')}}</p>
                </div>
            </div>
        </div>
        <div class="card-body">

            <p class="card-text">{{$post->body}}</p>
        </div>
    </div>
@endforeach