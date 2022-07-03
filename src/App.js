import React from "react";
import "./App.css";
import Free from "./Free";
import Plus from "./Plus";
import Pro from "./Pro";
// import Card from "./Card";
// import "cardDetails.json";

const App = () => {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Free />
          <Plus />
          <Pro />
          {/* <Card
            title="FREE"
            price="$0"
            users="Single User"
            storage="5GB Storage"
            subdomain="Free Subdomain"
          />
          <Card
            title="PLUS"
            price="$9"
            users="5 Users"
            storage="50GB Storage"
            subdomain="Free Subdomain"
          />
          <Card
            title="PRO"
            price="$49"
            users="Unlimited Users"
            storage="150GB Storage"
            subdomain="Unlimited Free Subdomains"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default App;
