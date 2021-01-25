# Pomodoro App

[![N|Solid](https://raw.githubusercontent.com/Ned-zib/PomodoroApp/master/rdm_images/banner.png)](https://github.com/Ned-zib/PomodoroApp)

Pomodoro is an Angular based application built in Ionic framework in order to have a mobile App with no adds to apply the Pomodoro technique

According to Wikipedia (2021)...
>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.

# Features!

  - Miminal app
  - You can change the name of the tasks
  - You can select between 3 different time periods for the working time and the break time 

### Tech

Pomodoro App uses a number of open source projects to work properly:

* [Angular](https://angular.io) - The modern web developer's platform!
* [Typescript](https://www.typescriptlang.org) - Extends JavaScript by adding types.
* [Ionic](https://ionicframework.com) - awesome framework for mobile apps!
* [node.js](https://nodejs.org/en/) - Javascript runtime

## How works
The app give you this home screen 

<p align="center">
<img src="https://raw.githubusercontent.com/Ned-zib/PomodoroApp/master/rdm_images/home.jpeg">
<P>

When you tab on the tomato, the app begin asking you for the name of the tasks and the time
- to change the task name you just tap on each task, if you avoid this, the app will use by default "task 1", "task 2", "task 3" and "task 4" as the names
- to change the time you can tap in the "CHANGE" button and then the app gives you 3 options for each timer

<p align="center">
<img src="https://raw.githubusercontent.com/Ned-zib/PomodoroApp/master/rdm_images/task.png">
<P>

Then, when you tap on the "START" button the app began with the timer and show you the next task, when the timer ends, the break timer begin, and then when that ends, the next task begin

<p align="center">
<img src="https://raw.githubusercontent.com/Ned-zib/PomodoroApp/master/rdm_images/pomodoros.png">
<P>

When all your pomodoros has been completed, the app show you the END page, and encourage you to take a long break, and also you have the option to go back to the Home screen

<p align="center">
<img src="https://raw.githubusercontent.com/Ned-zib/PomodoroApp/master/rdm_images/end.jpeg">
<P>

### Installation

Pomodoro requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd PomodoroApp
$ npm install
$ ionic serve
```

To build an Android apk...

```sh
$ cd PomodoroApp
$ npm install 
$ ionic cordova build android
```

**Made with <3 to be free**