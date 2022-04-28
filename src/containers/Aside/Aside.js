import React from "react";
import "./Aside.css";
import { Switch, Route, Link } from "react-router-dom";
import Create from "../../components/aside_components/Create";
const Aside = () => {
  return (
      <>
    <Switch>
      <Route path='/create' component={<Create/>}></Route>
    </Switch>
    </>
  );
};

export default Aside;
