import {Login, Register} from "../pages/auth";

import { DefaultLayout } from "../components/Client";

//không đăng nhập vẫn xem được
const publicRoutes = [
  { path: "/", component: Login, layout: DefaultLayout },
  { path: "/register", component: Register, layout: DefaultLayout },
];

//phải đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };