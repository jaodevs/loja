import Logo from "../imgs/Logo.png";
import "bootstrap/dist/css/bootstrap.css";
import Example from "./Drop";
import { Link } from "react-router-dom";

import Search from "./search/Search";




function Nav({ direction, ...args }) {


  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link to="/">
          <img src={Logo} idth="80" height="80" />
        </Link>



       

        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div>
          <Search/>
          
        </div>

    

        <Example />
      </div>
    </nav>
  );
}

export default Nav;
