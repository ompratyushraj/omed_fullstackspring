import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #f0f0f0;
`;

const NavbarItem = ({ item, index }) => (
  <li className="nav-item pe-4" key={index}>
    {!item.dropdown ? (
      <a className="nav-link active" href={item.href}>
        {item.name}
      </a>
    ) : (
      <div className="dropdown">
        <a
          className="nav-link dropdown-toggle"
          href={item.href}
          id={`navbarDropdownMenuLink-${index}`}
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {item.name}
        </a>
        <ul className="dropdown-menu" aria-labelledby={`navbarDropdownMenuLink-${index}`}>
          {item.dropdown.map((subItem, subIndex) => (
            <li key={subIndex}>
              <a className="dropdown-item" href={item.href}>
                {subItem}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
);

const SubNavbar = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Browse All Categories", href: "#", dropdown: ["Action", "Another action"] },
    { name: "Shop", href: "/shophome" },
    { name: "Data Entry", href: "/dataentry" },
    { name: "Products", href: "/products" },
    { name: "Invoice Entry", href: "/invoiceentryform" },
    { name: "Vendors", href: "#", dropdown: ["Action", "Another action"] },
    { name: "Mega menu", href: "#", dropdown: ["Action"] },
  ];

  const additionalLinks = [
    { name: "Prescription", href: "#" },
    { name: "Re-order", href: "#" },
    { name: "Contact Us", href: "/footer" },
  ];

  return (
    <StyledNavbar className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse ps-5" id="navbarNavDropdown">
          <ul className="navbar-nav ps-5">
            {menuItems.map((item, index) => (
              <NavbarItem item={item} index={index} key={index} />
            ))}
          </ul>
        </div>
        <div className="d-flex justify-content-end pe-5 mx-5">
          <ul className="nav-item my-1 d-flex list-unstyled">
            {additionalLinks.map((link, index) => (
              <li key={index} className="nav-item mx-3">
                <a className="nav-link active" href={link.href} style={{ whiteSpace: 'nowrap' }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default SubNavbar;
