import { Navbar, Nav } from "react-bootstrap";
import React, { useState } from "react";
import SearchBox from "./SearchBox.js";
import DropdownCategories from "./Dropdown.js";
import "../App.css";
export default function NavBar(props) {
  const [category, setCategory] = useState({});

  const changeCategory = (category) => {
    setCategory(category);
  };

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="true">
      <Navbar.Brand href="/">Movies Night</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>

      <DropdownCategories
        category={category}
        setCategory={changeCategory}
        renderCategories={props.renderCategories}
      />

      <SearchBox function={props.function} />
    </Navbar>
  );
}
