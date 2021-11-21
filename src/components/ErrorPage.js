import React from "react";
import { Children } from "react";

const ErrorPage = ({children}) => {
  return (
    <div>
      <section id="catalog-page">
        <h1>Page Not Found!</h1>

        {children && <h3 className="no-articles">{children}</h3>}
      </section>
    </div>
  );
};

export default ErrorPage;
