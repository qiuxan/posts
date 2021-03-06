window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

/**
*
* import vue for the page
*
*/
import Vue from 'vue'

var app=new Vue({
    el:'#root',
    data:{
        comments: []
    },
});

const getTimeFormat=time=>
    time.toLocaleDateString('au-EN',{  year: 'numeric', month: 'long', day: '2-digit' })
    +' at ' +(time.getHours()<10?'0':'')+time.getHours() +' : '+ (time.getMinutes()<10?'0':'')+time.getMinutes();

/**
 *
 * import Lara Echo for the page
 *
 */
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    forceTLS: true
});

window.Echo.channel('comment')
    .listen('NewComment',e=>{
        e.newPost.created_at=getTimeFormat(new Date(e.newPost.created_at));
        app.comments=[e.newPost,...app.comments];
});