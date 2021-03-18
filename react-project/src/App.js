import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import About from "./components/About";
import Create from "./components/Create";
import Header from "./components/Header";
import Main from "./components/Main";
import Note from "./components/Note";
import Error from "./components/Error";

const App = () => {
  return (
    <div className="main">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/create" component={Create}></Route>
          <Route path="/note" component={Note} exact></Route>
          <Route path="/note/:noteURL" component={Note} exact></Route>
          <Route render={() => <Error error="Страница не найдена" redirect="/" />}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
