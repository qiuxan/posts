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

import App from './view/app'

var app=new Vue({
    el:'#root',
    data:{
        comments: [
            // {body:"fake comment 1", created_at:"2021-10-03T03:49:32.000000Z","id": 27,updated_at: "2021-10-03T03:49:32.000000Z"},
            // {body:"fake comment 2", created_at:"2021-10-03T03:44:32.000000Z","id": 27,updated_at: "2021-10-03T03:49:32.000000Z"},
            // {body:"fake comment 3", created_at:"2021-10-03T03:43:32.000000Z","id": 27,updated_at: "2021-10-03T03:49:32.000000Z"},
            // {body:"fake comment 4", created_at:"2021-10-03T03:33:32.000000Z","id": 27,updated_at: "2021-10-03T03:49:32.000000Z"},
            // {body:"fake comment 5", created_at:"2021-10-03T03:11:32.000000Z","id": 27,updated_at: "2021-10-03T03:49:32.000000Z"}
        ]
    },

});



// var app=new Vue({
//     el:'#root',
//     data:{
//        comment: 'vue comment'
//     },
//
//     computed:{
//         reverseMessage(){
//              return this.comment.split('').reverse().join('');
//         }
//     }
//
// });


// let  commentsTest= [
//     {body:"fake comment 1", created_at:"2021-10-03T03:49:32.000000Z","id": 27,updated_at: "2021-10-03T03:49:32.000000Z"},
//     {body:"fake comment 2", created_at:"2021-10-03T03:44:32.000000Z","id": 27,updated_at: "2021-10-03T03:49:32.000000Z"},
//     {body:"fake comment 3", created_at:"2021-10-03T03:43:32.000000Z","id": 27,updated_at: "2021-10-03T03:49:32.000000Z"},
//     {body:"fake comment 4", created_at:"2021-10-03T03:33:32.000000Z","id": 27,updated_at: "2021-10-03T03:49:32.000000Z"},
//     {body:"fake comment 5", created_at:"2021-10-03T03:11:32.000000Z","id": 27,updated_at: "2021-10-03T03:49:32.000000Z"}
//     ];
//
// let addTest1={
//     id: 27,
//     body: "dadfasdfsa",
//     created_at: "2021-10-03T03:49:32.000000Z",
//     updated_at: "2021-10-03T03:49:32.000000Z"
// }
//
// commentsTest=[addTest1,...commentsTest];
//
// console.log(commentsTest);




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
        console.log('comment added');
        // console.log(e.newPost);
        // console.log(app.comments);
        app.comments=[e.newPost,...app.comments];
        // console.log(app.comments);
        // console.log(app.comments);
        // app.comment=e.newPost.body;

});

