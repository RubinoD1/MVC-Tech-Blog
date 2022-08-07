# MVC Tech Blog

GitHub Repository: https://github.com/RubinoD1/MVC-Tech-Blog

Heroku Live Site: 

## Introduction 

User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Psuedocode

WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in


1) The homepage: 

- Shows existing blog posts (if any)
- Nav links for homepage, dashboard: with the option to login 


1A) When I click the homepage link, then I am taking to the homepage. 


1B) When I click any other Nav link: Then I am prompted to either sign up or sign in. 

- When I choose to sign up: THEN I am prompted to create a username and password.
    -  WHEN I click on the sign-up button: THEN my user credentials are saved and I am logged into the site.

- When I choose to sign in: I am prompted for my user name and password. 


2) When I am logged in: THEN I see navigation links for the homepage, the dashboard, and the option to log out.


3) When I click on the homepage option: THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created. 


3A) WHEN I click on an existing blog post: THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment. 

- WHEN I enter a comment and click on the submit button while signed in:
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created. 


3B) WHEN I click on the dashboard option in the navigation:
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.

- WHEN I click on the button to add a new blog post:
THEN I am prompted to enter both a title and contents for my blog post.

- WHEN I click on the button to create a new blog post:
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post.

- WHEN I click on one of my existing posts in the dashboard:
THEN I am able to delete or update my post and taken back to an updated dashboard.


3C) WHEN I click on the logout option in the navigation: THEN I am signed out of the site.


4) WHEN I am idle on the site for more than a set time:
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments.


http://localhost:3001/api/users/login