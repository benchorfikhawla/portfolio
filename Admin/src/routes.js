/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import UserProfile from "views/UserProfile.js";
import Skills from "views/Skills.js";
import Education from "views/Educations";
import Experience from "views/Experience";
import Project from "views/Project";
import Services from "views/Service";

var routes = [
  
 
  {
    path: "/project", // Add the new route for the Skills page
    name: "Project", // The name of the page
    rtlName: "المهارات", // If you need an RTL name
    icon: "tim-icons icon-briefcase", // You can choose an appropriate icon
    component: <Project />, // The component that will be rendered
    layout: "/admin", // The layout of the route (in this case "/admin")
  },
  {
    path: "/service", // Add the new route for the Skills page
    name: "Service", // The name of the page
    rtlName: "المهارات", // If you need an RTL name
    icon: "tim-icons icon-briefcase", // You can choose an appropriate icon
    component: <Services />, // The component that will be rendered
    layout: "/admin", // The layout of the route (in this case "/admin")
  },
  {
    path: "/skills", // Add the new route for the Skills page
    name: "Skills", // The name of the page
    rtlName: "المهارات", // If you need an RTL name
    icon: "tim-icons icon-briefcase", // You can choose an appropriate icon
    component: <Skills />, // The component that will be rendered
    layout: "/admin", // The layout of the route (in this case "/admin")
  },
  {
    path: "/experience", // Add the new route for the Skills page
    name: "Experience", // The name of the page
    rtlName: "المهارات", // If you need an RTL name
    icon: "tim-icons icon-briefcase", // You can choose an appropriate icon
    component: <Experience />, // The component that will be rendered
    layout: "/admin", // The layout of the route (in this case "/admin")
  },
  {
    path: "/educations", // Add the new route for the Skills page
    name: "Education", // The name of the page
    rtlName: "المهارات", // If you need an RTL name
    icon: "tim-icons icon-briefcase", // You can choose an appropriate icon
    component: <Education />, // The component that will be rendered
    layout: "/admin", // The layout of the route (in this case "/admin")
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  }
 
  
];
export default routes;
