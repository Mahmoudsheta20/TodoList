import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const NavBar = ({ setTheme, Theme }) => {
  console.log(Theme);
  return (
    <div className={`nav ${Theme === "Dark" ? "Dark" : "Light"}`}>
      <h3>Sheta</h3>
      <div className="icon">
        {Theme === "Dark" ? (
          <div>
            <MdDarkMode onClick={() => setTheme(" Light")} />
          </div>
        ) : (
          <div>
            <MdLightMode onClick={() => setTheme("Dark")} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
