/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import Author from "layouts/pages/landing-pages/author";
import ContactUs from "layouts/pages/landing-pages/contact-us";

import Animation from "layouts/sections/elements/2d animation";
import Animation2 from "layouts/sections/elements/3d animation";
import VRtaniltsuulga from "layouts/sections/elements/VRtaniltsuulga";
import Interior from "layouts/sections/elements/Interior";
import Videoreklam from "layouts/sections/elements/videoreklam";
import ContentUildverlel from "layouts/sections/elements/contentuildverlel";
import Website from "layouts/sections/elements/website";
import TuhuurumjTurees from "layouts/sections/elements/tuhuurumjturees";
import Design from "layouts/sections/elements/design";
import MergejliinFoto from "layouts/sections/elements/mergejliinfoto";
import Zuvulguu from "layouts/sections/elements/mergejliinzuvulguu";
import Moshial from "layouts/sections/elements/moshialhugjuulelt";
import Typography from "layouts/sections/elements/typography";
import Gerel from "layouts/sections/elements/Gerel";
import Computer from "layouts/sections/elements/Computer";
import Other from "layouts/sections/elements/Other";

const routes = [
  {
    name: "Бид",
    icon: <Icon>dashboard</Icon>,
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
  },
  {
    name: "Бидний хийсэн ажлууд",
    icon: <Icon>view_day</Icon>,
    route: "/pages/landing-pages/author",
    component: <Author />,
  },
  {
    name: "Холбогдох",
    icon: <Icon>article</Icon>,
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
  },
  {
    name: "Үнийн санал",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Бүтээгдэхүүн",
        dropdown: true,
        collapse: [
          {
            name: "3D Анимэйшн",
            route: "/sections/elements/3d animation",
            component: <Animation2 />,
          },
          {
            name: "2D Анимэйшн",
            route: "/sections/elements/2d animation",
            component: <Animation />,
          },
          {
            name: "VR танилцуулга",
            route: "/sections/elements/VRtaniltsuulga",
            component: <VRtaniltsuulga />,
          },
          {
            name: "Интерьер",
            route: "/sections/elements/Interior",
            component: <Interior />,
          },
          {
            name: "Видео реклам",
            route: "/sections/elements/videoreklam",
            component: <Videoreklam />,
          },
          {
            name: "Контент үйлдвэрлэл",
            route: "/sections/elements/contentuildverlel",
            component: <ContentUildverlel />,
          },
          {
            name: "Вэб сайт",
            route: "/sections/elements/website",
            component: <Website />,
          },
          {
            name: "Тоног төхөөрөмж түрээс",
            route: "/sections/elements/tuhuurumjturees",
            component: <TuhuurumjTurees />,
          },
          {
            name: "Дизайн",
            route: "/sections/elements/design",
            component: <Design />,
          },
          {
            name: "Мэргэжлийн Фото",
            route: "/sections/elements/mergejliinfoto",
            component: <MergejliinFoto />,
          },
          {
            name: "Маркетингийн зөвлөгөө",
            route: "/sections/elements/mergejliinzuvulguu",
            component: <Zuvulguu />,
          },
          {
            name: "Сошиал хөгжүүлэлт",
            route: "/sections/elements/moshialhugjuulelt",
            component: <Moshial />,
          },
        ],
      },
      {
        name: "Тоног төхөөрөмж",
        dropdown: true,
        collapse: [
          {
            name: "Камер",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
          {
            name: "Гэрэл",
            route: "/sections/elements/Gerel",
            component: <Gerel />,
          },
          {
            name: "Бусад",
            route: "/sections/elements/Other",
            component: <Other />,
          },
          {
            name: "Компьютер",
            route: "/sections/elements/Computer",
            component: <Computer />,
          },
        ],
      },
    ],
  },
];

export default routes;
