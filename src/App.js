import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./component/navbar.jsx  "
import ExercisesList from "./component/ex-list.jsx";
import EditExercise from "./component/edit-excerise.jsx";
import CreateExercise from "./component/create-excerise.jsx";
import CreateUser from "./component/create-users.jsx";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;