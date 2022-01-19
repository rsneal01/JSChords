# README

JSChords allows a user to view songs from specific artists, and add songs to those artists collections.  The project, which is currently minimum viable product version, does not allow for the user to create new artists, but rather select from existing artists in order to add songs.  Stretch goals for this project would be 1) allowing usering to create and add artists to the collection of artists, and 2) giving a song a chord attribute (which users could create) which could be displayed as tabs/notes.

This app utilizes a Rails backend with a Javascript frontend.

Backend:

    Endpoint: 'http://localhost:3000/songs'

Frontend:

    The frontend uses Javascript to asynchronously make get and post requests to the API to update the page. 

Get started:

    Clone the repo: https://github.com/rsneal01/JSChords/tree/master
    Install dependencies:  bundle install
    Create the db: rake db:create
    Migrate: rake db:migrate
    Seed the database: rake db:seed
    Start server: rails s
    Open index.html in browser

Video Demo:
Blog Post: 


