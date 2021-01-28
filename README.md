# README

<!-- Capstone / Rorschach App -->

Initial File Setup for React in Rails
$ rails new apartment_app -d postgresql -T
$ cd apartment_app
$ rails db:create
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home
Added to app/view/home/index.html.erb <%= react_component "App" %>
Added to config/routes root to: 'home#index'
$ bundle add rspec-rails
$ rails generate rspec:install
Added folders for assets, components, pages
Added Header, Home, NotFound, Index, Show components

<!-- Adding Devise -->

$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
config/environments/development.rb config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
config/initializers/devise.rb replace this line config.sign_out_via = :delete with this one config.sign_out_via = :get

<!-- Adding Posts -->

Posts belong to a user
Defined relationships in the models
Added a mockPosts file in the outer components folder, import to App.js

<!-- Reactstrap -->

$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
Add an import to the "sass" file @import 'bootstrap'
$ yarn add reactstrap

<!-- React Router -->

$ yarn add react-router-dom
Import components to App.js
Setup static routes to Home, PostIndex, PostShow, NotFound

<!-- Header -->

Pass Devise routes to Header
Conditional rendering for sign in and sign out

<!-- PostIndex Page -->

Refactor route to be dynamic
Passed state to Postindex
Mapped over the array and displayed the description, ID, User ID
Mock of show button

<!-- Show -->

Dynamic route
Pass one post and display the content

<!-- PostProflile -->

Added current_user to Devise routes in index.html.erb
Added new component to show posts that belong to a user
Route will filter the posts in state and return only the posts that match the current_user id
Copied code from regular index and added to the PostProfile page to display content

<!-- Validations and Model Specs -->

Validations for all columns in post
Specs for all validations in spec/models/posts_spec.rb

<!-- Controller Methods -->

Added index, create, delete, post_params
Added request_specs for all methods and checking for params of all posts columns
Added one user and multiple posts in the seeds file
Testing all the endpoints in Postman

<!-- Favicon -->

Added an image to app/assets/images
Added <%= favicon_link_tag asset_path('polaroid.png') %> to app/views/layout/application.html.erb

<!-- Google Font -->

Imported Google Font into app using the @import option (pending)
Set the font to apply to all tags as default

<!-- Navigation -->

Added all existing pages to links in Header
Imported NavLink from react-router-dom for internal component navigation

<!-- New Page -->

Adding a PostNew component
Added the link in the navigation in Header
Added Forms from reactstrap for all fields
Added handleChange to connect form fields to state
Added handleSubmit to connect to App.js
Added method to log new post in App.js
Passed new method and current_user to PostNew component

<!-- PostEdit -->

Adding a PostEdit component
Added the link to the button for the edit page in the PostProfile
Copied form from PostNew page
Added method to log edited post in App.js
Passed edit method, current_user, single post by id to PostEdit component
(might not include a PostEdit component)

<!-- Delete Button -->

Added a delete button to each item in the PostProfile
Added delete method mock to App.js and passed it to PostProfile
