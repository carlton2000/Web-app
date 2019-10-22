## This web application is created using React and Express.

## Its using a Itunes Search Api that is implemented only in the back-end.

## In the front-end where the user face is displayed , theres a search bar and a nav bar so you have a choice if you want to search for music or books and even add to favourite .

## Installing the web application
  * cd Deployed app
  * npm install - this install the node modules where files are added so your application can run 
  * npm start
  * opening a new command line 
  * cd the front-end 
  * npm install
  * npm start

## Once everythinh is installed at the end everything is hosted on [http://localhost:3000](http://localhost:3000)

## Theres a build folder that is installed once you use.
* npm run build

## Its a app for production in the front-end side and optimizes the build for the best performance .

## Intalling Helmet is a usefull node.js module that helps you secure HTTP headers and returns your express app, So always make sure your http is secured.
* npm install helmet --save
* and make sure you import it correctly

* const express = require('express')
* const helmet = require('helmet') 
* const app = express()
* app.use(helmet())

## My Api keys are used in my express/ backend where a used a Itunes API to get my information from and ready to post so it displays .

## So this API has functionality provided by your browser an once its called it allows you to use the code without knowing exactly how the code works.

## So how my API works its called into my backend and displayed into a nav bar , so when its clicked a search bar is displayed so you can then search whatever music or books you want to display. 