<div id="root">
    <div v-for="comment in comments" >
        <div class="card mt-3">
            <div class="card-header">
                <div class="row">
                    <div class="col-1"><i class="fas fa-user-circle fa-3x"></i> </div>
                    <div class="col">
                        <b>Guest</b>
                        <p v-text="comment.created_at"  class="card-text mb-2 text-muted"></p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <p v-text="comment.body"  class="card-text"></p>
            </div>
        </div>
    </div>
</div>