/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */


import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./component/Header";
import Register from "./screen/Register";
import Login from "./screen/Login";
import HomeScreen from "./screen/HomeScreen";
import Profile from "./screen/Profile";
import MemberApiTable from "./screen/MemberApiTable";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer autoClose={2000} />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />

        <Route path="/apitable" component={MemberApiTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
