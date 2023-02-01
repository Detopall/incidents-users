# incidents-users

## Table of Contents
- [What is incidents-users?](#what-is-incidents-users)
- [Quick start](#quick-start)
- [Features](#features)
- [Images](#images)

## What is incidents-users?
Incidents-users is a project created to help people report incidents. This app is created to ensure the safety of people all around the world.

## Quick start
Open a terminal and change your directory to the desired folder. Here you will clone the git repo of this project.

If you don't have node.js installed, run this command:
```
npm i -g npm
```

and clone this project:
```
(HTTPS) git clone https://github.com/Detopall/incidents-users.git

OR

(SSH) git clone git@github.com:Detopall/incidents-users.git
```

After cloning the incidents-users project change your directory to the directory you've cloned this project to.

To start the **server**, run this command:
```
npm run dev (for the development environment)

OR

npm run start (for the production environment)
```

After running the server, you can use the application.


## Features

Authentication page:

- You need to be logged in before you can access the functionality of the other screens. You can register or login using one of the buttons.
- If you are not logged in an error will be shown on the screen and the functionality of the home page and history page will not work.
- Username and password field are required. The username must be unique.
- Going to the authentication page after being logged in, will log you out.

Home page:

- The home page has a big button to report an incident. After pressing this button a new incident is created an added to the active incidents list.
- The AI will check who the aggressors were and what they have caused.
- The home page also contains two boxes of information to set the rules of reporting and helping.
- You will also see your username, the amount of incidents helped and incidents reported in the top right box.
- The active incidents list contains all of the current active incidents together with a help button and a end button.
  - The help button is only visible when able to help (conditions stated in the helping box).
  - The end button is only visible when able to stop an incident (only when you are the reporter of that incident).

Statistics page:

- The statistics page contains two graphs.
- Best bystander:
  - This will display all the users in the graph and list the amount of incidents helped in a bar chart.
- Most frequent types:
  - This will display the most frequent type of incidents that have occurred in a pie chart.

History page:
- History page contains two boxes of information:
  - Incidents reported. This displays all the incidents where you are the reporter.
  - Incidents helped. This displays all the incidents where you have helped.

## Images
- Authentication page

<img width="400px" height="400px" src="https://user-images.githubusercontent.com/90131569/216070910-e83ffa64-b0c2-4f77-9b36-a16acd912965.png" alt="auth-page">
  
- Home page

<img width="400px" height="400px" src="https://user-images.githubusercontent.com/90131569/216071921-7b2bda58-33a2-4aab-b744-28df25638919.png" alt="home-page">


- Statistics page

<img width="400px" height="400px" src="https://user-images.githubusercontent.com/90131569/216072064-38f9eb77-be38-4491-89c1-2fc0eed8ab23.png" alt="stats-page">

- History page

<img width="400px" height="400px" src="https://user-images.githubusercontent.com/90131569/216072168-2877bf63-06e6-4b04-af8c-5d71270cfe8c.png" alt="history-page">
