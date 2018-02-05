# WDI Hamilton - Project 3
# Halsa Health - David Azaria, Danny Graugnard, & Yanina Tsutieva | December 2017/January 2018

## What is Halsa Health?

Who hasn't had to deal with the archaicly cumbersome and cumbersomely archaic health insurance process in the last decade? And if you have, the chances are pretty high you walked away with a profound sense of disappointment, yearning for (at the very least) a (slightly) better user experience (http://bit.ly/2p1essU). 

Well, have no fear: Halsa Health is here! And by here we mean constantly exploring and continuously integrating on a nifty, common sense JavaScript-powered solution for health insurance buyers both new and advanced.

Building on the experience offered by tech-backed health insurers and marketplace platforms built by tech orgs, we wanted to capitalize on the notion that purchasing health insurance should be a simple experience, stripping away any barriers to insure yourself and your family. 

In this relative-to-market-ready MVP for what we envision could/will be a full-fledged, React-powered solution, we wanted to emphasize and present on a user experience we believe best captures the ethos that better should be achievable. By simply entering a few pieces of information about oneself, and in the future powered by a more robust acturial pricing methodology, the Halsa Health experience is one we hope will influence how insurance and platform tech companies alike will in unison move toward clean, simple solutions for their policyholders. 

## Our wireframe

Wireframes can be found in this project repo in the wireframe folder, with files upload and named by sequential page number.

##Our project plan

Project plan can be found in this project repo under the `Projects` tab. There you will find user stories we have allocated to different team members, with columns for `Bugs` and `Won't Do's` given time-constraints to delivery. 

https://git.generalassemb.ly/Halsa/project-3/projects

## Our initial thoughts on app structure

At first, our thoughts were centered on the experience Oscar offers its customers:
https://www.hioscar.com/

From there, we decided to try tackle the application through the React Router methodology, building as many components as we needed and routing them all on the front-end, keeping our back-end rather nimble and "dumb", so to speak, tossing to us data if and only if we needed it. 

With that, our initial thoughts were the following components:

* Landing page for our application

* Form to capture demographic information 

* PlansList to list out our plan options - 

* PlanCard to highlight the four different plan options a user has to choose from - Interpolation of user `zip_code` into a geolocation API to offer the illusion of bespoke plans by state. In addition, applying a `price_multiple` to the user's `age` to offer the appearance of a montly premium amount.

* UsersPlan to highlight to the user which plan they have selected - Initial thoughts were that we can go back and select another plan

* UsersList to highlight a list of users - CRUD anticipated 

* User highlighting a singular user - CRUD anticipated

## What we ended up making

All in all, the application works about how we expected it to, minus the following features we did not get around to implementing before our deadline:

1) User update feature - At the moment, we can CR_D a user, while Updating unfortunately needs to be left for V 1.x, and certainly before V 2. Simply, we did not have the time/resource to finalize this portion while juggling the different components/quoting functionality of our application.

2) Click to choose plan feature - At the moment, a user needs to enter the plan they wish to choose as the implementation of a checkbox -> locate planID -> insert into DB was not working as anticipated forcing us to go simple and scale back the functionality for something we knew worked. 

## How to get it to currently work
Feel free to first fork and clone our repo! 

Next, create a local instance of a Postgres database by running the following command from anywhere in your bash terminal:

`createdb halsa_health`

Next, after navigating into the root directory of this project, let's run our migration and seed files like so:

`psql -f db/migrations/plans-migration.sql` 
`psql -f db/migrations/users-migration.sql`
`psql -f db/seeds/plans-seed.sql` 
`psql -f db/seeds/users-seed.sql` 

Next, open the application in your text editor of choice, and in the root directory, create a `.env` file. Inside of it, copy and edit the following:

`DB_HOST=localhost
DB_PORT=5432
DB_NAME=halsa_health
DB_USER=[enter your username of choice here]`

 Next, in your terminal you will need two tabs both pointed at the root directory. 

 In the first, run the initial `npm install` to bring in all of the necessary packages. 

 Once that's finalized, run `npm run dev` to start the server. In the second tab, run `npm run watch` to initialize and run our Webpack, which powers the build of our React app. 

 Lastly, in your browser of choice, go to http://localhost:3000 to visit our webpage! 

## Technologies used

* 3rd party API Zippopotam.US
* Axios
* Body-Parser
* Command Line
* Dotenv
* ESLint 
* Express
* Github
* Heroku
* HTML/CSS/JSX
* JavaScript (!)
* Morgan
* MVC architecture
* Node.JS
* Nodemon
* Path
* pg-promise
* Postgres/SQL
* Postman
* React 
* React-DOM
* React Router
* Webpack

## Phases to completion

Phase 1: Wireframming and story writing. **Due Thursday December 21, 2017** **COMPLETED**

Phase 2: Minimum viable product, which will consist of: basic API calls, Webpack build, implementation of React skeletal components, Postgres table creations and Express models/routes, and CSS renders based off-of NFCM. **Due Tuesday December 26, 2017** **COMPLETED**

Phase 3: Large-scale feature writing. **Due Thursday December 28, 2017** **COMPLETED**

Phase 4: Feature writing and issues/bugs. **Due Tuesday January 2, 2018** **COMPLETED**

Presentation **Wednesday January 3, 2018**

## Links and Resources

We were first inspired by Oscar's UX/UI: https://www.hioscar.com/

React-related links, including from the mothership itself: 
https://reactjs.org/
http://reactkungfu.com/2016/03/dive-into-react-codebase-handling-state-changes/

For our CSS work the following links were supremely helpful:
https://codepen.io/rodolpheb/pen/gIixB?page=6
https://www.sevensignature.com/blog/code/pure-css-popup-without-javascript/
https://weblog.west-wind.com/posts/2014/Feb/22/Using-CSS-Transitions-to-SlideUp-and-SlideDown?Page=2
https://css-tricks.com/snippets/css/css-box-shadow/

For our backend related-work, a never-ending assortment of questions were answered in:
https://expressjs.com/
https://www.postgresql.org/
https://github.com/axios/axios

Internal-to-GA repos:
https://git.generalassemb.ly/wdi-nyc-hamilton/react-router-from-Vince
https://git.generalassemb.ly/wdi-nyc-hamilton/react-express-CRUD

Our 3rd party geolocation API:
http://www.zippopotam.us/
