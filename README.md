This project is to create a simple Laravel + VueJS web app on which one can do posts like on Facebook.

It stores data in MySQL. 

If you have two windows opened and you post a comment on one of them, the other one should be updated with this post (Real-time updates)

To run this project in a local environment, MySQL should have a database named "posts", also you will need an account from https://pusher.com/;

The config of MySQL is the most common default setting for most machine, but if there is anything different in user's local machine, the .env file should be change


Then in the terminal, go to the direct of this project. Enter "npm install";

After installing all the dependency, run "php artisan migrate --seed" in the terminal. Seed it to save time of entering data when testing, if users what to start an empty database, "php artisan migrate" should be used.

After migrate the database, user can enter "php artisan serve" to check the application.

In .env file BROADCAST_DRIVER=log should be change to pusher:BROADCAST_DRIVER=pusher and also fill in the  Pusher App keys
