import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(
  document.querySelector("#single-spa-layout") as HTMLTemplateElement
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

console.log('applications', applications);

registerApplicationRoute('@wke/app1', '/app1');
registerApplicationRoute('@wke/app2', '/app2');
registerApplicationRoute('@wke/ng11', '/ng11');


applications.forEach(registerApplication);
layoutEngine.activate();

start();

function registerApplicationRoute(appName: string, path: string) {
  const app = applications.find(a => a.name == appName);
  if(app) {
    app.activeWhen = (location) => 
    location.pathname.startsWith(path);
  } else {
    console.warn(`App not found: ${appName}`);
  }
  
}