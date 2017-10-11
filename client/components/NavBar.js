import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavItem,
  Button,
  FormControl,
  Form,
  FormGroup
} from "react-bootstrap";

export default class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <div class="brand-logo">
            <span>VisiTour</span>
          </div>
        </div>
      </nav>
    );
  }
}
