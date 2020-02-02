import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import styles from "./App.module.scss";
import CountryList from "./components/CountryList/CountryList";
import Country from "./components/Country/Country";

function App() {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route path='/' exact component={CountryList} />
        <Route path='/news/:country' component={Country} />
      </Switch>
    </div>
  );
}

export default App;
