import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Employee from "./components/Employee/Employee";
// import EmployeeError from "./components/EmployeeError/EmployeeError";
import ProjectReview from "./components/ProjectReview/ProjectReview";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         employee: null,
         isLoading: true,
      };
   }

   componentDidMount() {
      fetch("/api/*", { method: "GET" })
         .then((response) => {
            if (response.ok) {
               return response.clone().json();
            }
         })
         .then((result) => {
            this.setState({ employee: result });
            this.setState({ isLoading: false });
         })
         .catch((err) => console.log(err));
   }

   render() {
      const { employee, isLoading } = this.state;

      if (isLoading) return <h1>LOADING</h1>;

      return (
         <div className="App">
            <div className="content">
               {this.state.isLoading ? (
                  <h1>LOADING</h1>
               ) : (
                  <Router>
                     <Switch>
                        <Route
                           exact
                           path="/"
                           render={() => <Employee employee={employee} />}
                        />
                     </Switch>

                     <Switch>
                        <Route
                           exact
                           path="/project-review/:title"
                           render={(props) => (
                              <ProjectReview {...props} employee={employee} />
                           )}
                        />
                     </Switch>
                  </Router>
               )}
            </div>
         </div>
      );
   }
}

export default App;
