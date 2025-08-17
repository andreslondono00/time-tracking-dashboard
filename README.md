# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Time tracking dashboard solution](#frontend-mentor---time-tracking-dashboard-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
  - [Desktop](#desktop)
  - [Mobile](#mobile)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

## Desktop

- Daily

  ![alt text]({6BF3FE3D-47E6-4A62-AB73-4545DD649CDE}.png)

- Weekly
  
  ![alt text]({B0129B16-3D8E-4B5F-8794-6661F700F832}.png)

- Monthly
  
  ![alt text]({0C7FEC87-892E-4496-97DD-F3DF55D77FFE}.png)

## Mobile

- Daily

  ![alt text]({3DBEBE2B-360B-458A-BC02-CFADF16F7C9A}.png)

- Weekly
  
  ![alt text]({741A5D12-1ACE-48D4-94A2-579553636620}.png)

- Monthly
  
  ![alt text]({5DFDB080-B1B3-4613-A549-A2F9D47F2B03}.png)

### Links

- Solution URL: [Github](https://github.com/andreslondono00/time-tracking-dashboard)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned that when I click on an option (day, week, month), one of them remains active and the other two disappear, and also that when the page starts, the day option remains active.


```js
    document.getElementById("daily_menu").classList.add("active");
    document.getElementById("weekly_menu").classList.remove("active");
    document.getElementById("monthly_menu").classList.remove("active");
```
```js
    onDailyClick();
```

## Author

- Frontend Mentor - [@andreslondono00](https://www.frontendmentor.io/profile/andreslondono00)

