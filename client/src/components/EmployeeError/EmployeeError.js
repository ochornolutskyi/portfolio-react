import React from "react";
import "./EmployeeError.scss";

const RenderError = (props) => {
   return (
      <div className="error-page">
         <h1>Whoops, something went wrong...</h1>
         <h2>Please, dear developer, you should fix your code(((</h2>
      </div>
   );
};

export default RenderError;
