
# FilmStreak - Mobile application for trending movies listing

FilmStreak is a mobile app for users to have at a glance , a view of world top movies . This repository contains the implementation for Filmstreak app.

## Table of Contents

- [FilmStreak - Mobile application for world trending movies listing](#filmStreak---mobile-application-for-trending-movies-listing)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Extra Features](#extra-features)
  - [Technology Stack](#technology-stack)
  - [Run The App](#run-the-app)
  - [License](#license)

## Overview

FilmStreak provides a simple native mobile application that runs smoothly on both Android and IOS platforms.
It consists majorly three screens:

1. Movie Listing Screen: The screen lists movies in different categories using carousels.
2. Movie Details Screen: This screen shows the details of any selected movie, this screen also changes in theme and design based on selected movie category.
3. Movie Wishlist Screen: This screen shows the list of movies that have been included in the wishlist, user can also delete a movie from the wishlist on this screen.


## Extra Features

- A simple walkthrough on Movie Details page to make navigation more prominent
- An automated carousel to make app more engaging
- An additional design of movie details page


## Technology Stack

The technology stack and tools used in this project combines those that I use more often and recommeneded ones for the project:

- React Native CLI 
- React Navigation - V6
- Typescript
- Node JS -version 18 or higher
- Java - Jdk17 or higher
- Styled-components and React Native Stylesheet API
- Xcode Build Tools
- Android Studio
- Appetize for app sharing and testing


## Run The App

  >**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) and have the tools specified above installed on your machine, before proceeding. **Note** this guide is mostly tailored to running the application on MacOS, running on windows should be similar probably with little changes or tweaks.

  To run this application locally:
   - Open up terminal (on MacOS) and switch directory to Desktop by running:
   ```
   cd ~
   ```
   - Clone the repository by running:
   ```
   git clone https://github.com/Ladeologun/Filmstreak.git
   ```
   - Then run the following commands consecutively to install dependencies
   ```
   cd Filmstreak 
   ```
   ```
   yarn install

   or using npm

   npm install
   ```
   - Also to install ruby gems depedencies run the command(Ruby is pre-installed on Mac): 
   ```
   bundle install
   ```
   - To install IOS dependencies using the app contained Pod run the following command consecutively:
   ```
   cd ios
   ```
   ```
   bundle exec pod install
   ```
   - Navigate back to project root directory by running:
   ```
   cd ..
   ```
You should be ready to start up the application

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

   ```
   npx react-native start
   ```
Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

   for _iOS_ app:
   
   ```
   npx react-native run-ios
   ```
   for _Android_ app:

   ```
   npx react-native run-android
   ```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


You've successfully run FilmStreak App. :partying_face:

### Now what?

- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

## License

The FilmStreak Application is open-source and released under the [MIT License](LICENSE). Feel free to modify and use the code as per the terms of the license.
