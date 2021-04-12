import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { menu as menus } from "./route/route";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          {menus.map((menu) => (
            <Link to={menu.path}>
              <button>{menu.title}</button>
            </Link>
          ))}
        </ul>
      </nav>
      <Switch>
        {menus.map((menu) => (
          <Route
            exact={menu.path === "/"}
            path={menu.path}
            component={menu.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
