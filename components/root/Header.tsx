import { Row } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const headerPadding = "10px";

/**
 * Header component
 * It is only designed to display the logo
 */
function Header() {
  return (
    <header>
      <Row
        justify="center"
        css={{ backgroundColor: "$primary", py: "$xl", minWidth: "360px" }}
      >
        <Image
          src="/logo-large.svg"
          alt="logo"
          width="550"
          height="120"
          style={{ paddingLeft: headerPadding, paddingRight: headerPadding }}
        />
      </Row>
    </header>
  );
}

export default Header;
