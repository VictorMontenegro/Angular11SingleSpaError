Angular 11 Single SPA Error Example:

1.- Make "npm install" at the root folder, inside microfrontends, microfrontends_angular_11 and shell folders.

2.- Execute on the terminal "npm start" in the root folder of the project.

3.- In the browser, access to "http://localhost:9000/".

You can navigate from App1 to App2 without any problem. The problem appears when I navigate to the Angular 11 App and I try to go back to other applications (app1 or app2, working with Angular 8), where the Angular 11 App does not appear to do the unmount procedure, and both App1 or App2 and Angular 11 App are mounted at the same time.
