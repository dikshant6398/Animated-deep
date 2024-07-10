import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className=" w-full">
      <nav className=" flex justify-between">
        <img
          src="https://i.pinimg.com/474x/a9/2a/b5/a92ab56a225cef3bf88e624df4bcf025.jpg"
          className=" w-7"
        />{" "}
        <div className=" ">
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
