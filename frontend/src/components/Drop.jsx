import React, { useState } from "react";




import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

function Example({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
      

    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret color="dark">
          Cadastro
        </DropdownToggle>

        <DropdownMenu dark>
          <DropdownItem href="/eletronicos">Eletrônicos</DropdownItem>

          <DropdownItem href="/perifericos">Periféricos</DropdownItem>
        </DropdownMenu>
      </Dropdown>

    </div>
    
  );
}

Example.propTypes = {
  direction: PropTypes.string,
};

export default Example;
