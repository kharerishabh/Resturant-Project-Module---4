import React from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";

const  App = () =>{
  return (
    <React.Fragment>
      <Header/>
      <main>
      <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
