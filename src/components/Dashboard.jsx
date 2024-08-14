import React from "react";
import Activity from "./Activity";
import Sessions from "./Sessions";
import Navbar from "./Navbar";
import Ads from "./Ads";
import Transactions from "./Transactions";
import Campaigns from "./Campaigns";

export default function Dashboard() {  
  return (
    <div className="app">
      <Navbar />
      <div className="app__grid">
        <div className="app__grid__1">
          <Campaigns />
          <Sessions />
          <Transactions />
        </div>
        <div className="app__grid__2">
          <Ads />
          <Activity />
        </div>
      </div>
    </div>
  );
}