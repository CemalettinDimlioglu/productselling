import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <h1>404 Error</h1>
        </div>
      </div>
      <div className="container content" >
          <p>Page Not Found...</p>
          <Link to="/"className="btn btn-primary">Go Back to Home Page</Link>
      </div>
    </main>
  );
};

export default NotFound;
