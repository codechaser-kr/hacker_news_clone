import React from "react";
import Footer from "component/ui/footer";

const NoPage = ({ location }) => (
  <div>
    <div className="nopage">
      Sorry. Nothing was found for {location.pathname}
    </div>
    <Footer />
  </div>
);

export default NoPage;
