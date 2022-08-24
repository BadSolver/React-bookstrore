import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";

import {
  Account,
  Book,
  Cart,
  Favorites,
  Home,
  NotFound,
  Search,
  SignIn,
  SignUp,
} from "../pages";
import { HelloPages } from "../pages/HelloPages";

import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route path={ROUTE.HELLO_PAGE} element={<HelloPages />} />
        <Route path={ROUTE.HOME} element={<Home />}/>
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTE.SEARCH} element={<Search />} />
        <Route path={ROUTE.BOOK} element={<Book />} />
        <Route path={ROUTE.CART} element={<Cart />} />
        <Route path={ROUTE.FAVORITES} element={<Favorites />} />
        <Route path={ROUTE.ACCOUNT} element={<Account />} />
        <Route path={ROUTE.SIGNIN} element={<SignIn />} />
        <Route path={ROUTE.SIGNUP} element={<SignUp />} />
      </Route>
    </Routes>
  );
};
