# Astronomy Picture of the Day (APOD)

This project provides a front end for APOD, one of NASA's open APIs. This is an API that returns a space related image for each day of the year, along with an explanation written by a professional astronomer.

Users can select the picture of the previous and next day (if available) or alternatively pick any individual photo by date. 

Handle edge case of image being a photo or video in which case different html must be rendered dynamically. 

## Setup

Clone the project, install the dependencies, and run the project.

```
git clone git@github.com:anacolell/nasa-apod.git

cd nasa-apod

yarn install

yarn start
```
