import Home from "../pages/Home";
import Pure from "../pages/Pure";
import Antd from "../pages/Antd";
import Material from "../pages/Material";

export const menu = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/pure",
    title: "Pure",
    component: Pure,
  },
  {
    path: "/antd",
    title: "Antd",
    component: Antd,
  },
  {
    path: "/material",
    title: "Material",
    component: Material,
  },
];
