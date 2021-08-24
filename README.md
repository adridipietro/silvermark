# SILVERMARK

SILVERMARK is a minimalist bookmark manager application that allows users to create, view, and delete bookmarks.

Other functionalities include:
+ create a category
+ filter bookmark results by category
+ open new tab to external URL
+ login, signup and logout
+ favorite a bookmark

SILVERMARK utilizes a Ruby on Rails backend and JavaScript frontend. SILVERMARK also utilizes a React library and Redux middleware. 

## INSTALLATION + USAGE
1. Download and clone this repository from [github](https://github.com/am20dipi/silvermark) into your developer environment. 
2. Switch into 'backend' directory.
```cd backend```
3. Install gems with bundler.
```bundle install```
4. Run rails db:migrate in the terminal (if necessary).
```rails db:migrate```
5. Start the server.
```rails s```
6. Switch into the 'frontend' directory.
``` cd frontend```
7. While in the frontend, install the required Node packages using:
```npm install```
8. Start the browser using:
```npm start```
9. You should now have the rails server running on ```http://localhost:3000``` in one browser tab and your React browser running on ```http://localhost:4000``` in a separate tab. 
10. Navigate to the React browser and create an account using the signup navigation button. 

## TECHNOLOGIES
+ RUBY ON RAILS
+ JAVASCRIPT
+ REACT
+ REDUX
+ DATABASE = POSTGRESQL
+ THUNK
+ NODE PACKAGE MANAGER
+ BABEL


## CONTRIBUTING + LICENSING
MIT License, Copyright (c) 2021 am20dipi

For more information [click here](https://github.com/am20dipi/silvermark).