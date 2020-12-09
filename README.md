Angular 11 Single SPA Error Example:

1.- Make "npm install" at the root folder, inside microfrontends, microfrontends_angular_11 and shell.

2.- Execute on the terminal "npm start" in the root folder of the project.

3.- In another terminal, executre "cd .\microfrontends_angular_11\" and "npm run serve:single-spa:appAngular11".

4.- In the browser, access to "http://localhost:9000/".

You can navigate from App1 to App2 without any problem. The problem appears when I navigate to the App with Angular 11 and I try to go to other application (app1 or app2, working with Angular 8), where the App working with Angular 11 does not appear to do the unmount procedure, and both App1 or App2 and App with Angular 11 are mounted at the same time.
