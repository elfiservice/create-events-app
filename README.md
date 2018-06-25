# Event Scheduling App
During the *extracurricular* section of **Front-end Udacity Nanodegree** on which we needed to create a event scheduling app applying the best policies to forms and inputs making intuitive and accessibility.

Thinking simply I choice the **ReactJs** library to write my App, and to persist my data I used the [Firebase Realtime Database](https://firebase.google.com/) that on which provide us all infrastructure of a Back-end of easy use.

So, I figured out which inputs were "required" to complete the event's form and so I used the Required attribute. As well as the input that can be auto-filled, to use the autocomplete attribute.

To make the App more accessible to the assistive technology I made sure to apply all labels or aria-labels in each input.

In this App you can, create a new account, make log in, create a new event, see all your events registered, edit any event, delete any event and see a detailed event.

## Getting Started
To test this App in your machine, just follow the steps below:

As I used a Firebase Database, you need to create an account there and after create a New App to configure the Database Realtime using something like that provided by own Firebase:
```
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  ```
This `config` is used in `src/server/index.js` in the root of this App to initialize the Firebase service.

After this, clone this repo in your local git clone https://github.com/elfiservice/create-events-app.git

Now into your folder project in the terminal exec `npm install` to install all dependecs

After just exec `npm start` to execute the App in the browser.

### Technology
- HTML5
- CSS
- Javascript
- ReactJs
- Firebase Database Realtime

### Resouces of Suport
- https://jaketrent.com/post/access-route-params-react-router-v4/
- [react-router-dom](https://reacttraining.com/react-router/core/guides/philosophy)
- [react docs](https://reactjs.org/docs/hello-world.html)
- https://www.youtube.com/watch?v=5pt_igBTCsI