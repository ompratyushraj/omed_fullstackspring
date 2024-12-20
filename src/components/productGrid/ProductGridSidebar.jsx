import React from "react";

// Reusable component for the link items
const LinkItem = ({ href, text }) => (
  <li className="list my-2">
    <button href={href} className="bd-links-link d-inline-block w-100" style={{ backgroundColor: "#E2F1E7", padding: "20px", borderRadius: "20px", border: "0px" }}>
      {text}
    </button>
  </li>
);

// Reusable component for link groups
const LinkGroup = ({ heading, links }) => (
  <label
    className="bd-links-group py-2 mx-4 justify-content-center align-items-center"
    style={{
      backgroundColor: "white",
      paddingLeft: "1rem",  // Adjust left padding
      paddingRight: "1rem", // Adjust right padding to match the left padding
      marginLeft: "1rem",   // Adjust left margin
      marginRight: "1rem",  // Adjust right margin to match the left margin
      width: "85%",        // Ensure width of the label matches buttons
    }}
  >
    <strong
      className="bd-links-heading d-flex justify-content-center align-items-center w-100 my-1 py-3 fw-bold"
      style={{
        backgroundColor: "#B7E0FF",
        borderRadius: "20px",
        width: "100%",  // Ensure heading takes up full width of the label
      }}
    >
      {heading}
    </strong>
    <ul className="list-unstyled fw-normal pb-2 small">
      {links.map((link, index) => (
        <LinkItem key={index} href={link.href} text={link.text} />
      ))}
    </ul>
  </label>
);

const ProductGridSidebar = () => {
  const linkGroups = [
    {
      heading: "Getting started",
      links: [
        { href: "/docs/5.3/getting-started/introduction/", text: "Introduction" },
        { href: "/docs/5.3/getting-started/download/", text: "Download" },
        { href: "/docs/5.3/getting-started/contents/", text: "Contents" },
        { href: "/docs/5.3/getting-started/browsers-devices/", text: "Browsers & devices" },
        { href: "/docs/5.3/getting-started/javascript/", text: "JavaScript" },
        { href: "/docs/5.3/getting-started/webpack/", text: "Webpack" },
        { href: "/docs/5.3/getting-started/parcel/", text: "Parcel" },
        { href: "/docs/5.3/getting-started/vite/", text: "Vite" },
        { href: "/docs/5.3/getting-started/accessibility/", text: "Accessibility" },
        { href: "/docs/5.3/getting-started/rfs/", text: "RFS" },
        { href: "/docs/5.3/getting-started/rtl/", text: "RTL" },
        { href: "/docs/5.3/getting-started/contribute/", text: "Contribute" },
      ],
    },
    {
      heading: "Customize",
      links: [
        { href: "/docs/5.3/customize/overview/", text: "Overview" },
        { href: "/docs/5.3/customize/sass/", text: "Sass" },
        { href: "/docs/5.3/customize/options/", text: "Options" },
        { href: "/docs/5.3/customize/color/", text: "Color" },
        { href: "/docs/5.3/customize/color-modes/", text: "Color modes" },
        { href: "/docs/5.3/customize/components/", text: "Components" },
        { href: "/docs/5.3/customize/css-variables/", text: "CSS variables" },
        { href: "/docs/5.3/customize/optimize/", text: "Optimize" },
      ],
    },
    {
      heading: "Components",
      links: [
        { href: "/docs/5.3/components/buttons/", text: "Buttons" },
        { href: "/docs/5.3/components/cards/", text: "Cards" },
        { href: "/docs/5.3/components/modals/", text: "Modals" },
        { href: "/docs/5.3/components/navbar/", text: "Navbar" },
        { href: "/docs/5.3/components/forms/", text: "Forms" },
        { href: "/docs/5.3/components/toasts/", text: "Toasts" },
        { href: "/docs/5.3/components/pagination/", text: "Pagination" },
      ],
    },
    {
      heading: "Layout",
      links: [
        { href: "/docs/5.3/layout/grid/", text: "Grid" },
        { href: "/docs/5.3/layout/flexbox/", text: "Flexbox" },
        { href: "/docs/5.3/layout/spacing/", text: "Spacing" },
        { href: "/docs/5.3/layout/containers/", text: "Containers" },
        { href: "/docs/5.3/layout/visibility/", text: "Visibility" },
        { href: "/docs/5.3/layout/sizing/", text: "Sizing" },
      ],
    },
    {
      heading: "Utilities",
      links: [
        { href: "/docs/5.3/utilities/borders/", text: "Borders" },
        { href: "/docs/5.3/utilities/colors/", text: "Colors" },
        { href: "/docs/5.3/utilities/display/", text: "Display" },
        { href: "/docs/5.3/utilities/flex/", text: "Flex" },
        { href: "/docs/5.3/utilities/spacing/", text: "Spacing" },
        { href: "/docs/5.3/utilities/typography/", text: "Typography" },
      ],
    },
    {
      heading: "JavaScript",
      links: [
        { href: "/docs/5.3/javascript/overview/", text: "Overview" },
        { href: "/docs/5.3/javascript/dom-manipulation/", text: "DOM Manipulation" },
        { href: "/docs/5.3/javascript/async-await/", text: "Async/Await" },
        { href: "/docs/5.3/javascript/events/", text: "Events" },
        { href: "/docs/5.3/javascript/functions/", text: "Functions" },
        { href: "/docs/5.3/javascript/objects/", text: "Objects" },
      ],
    },
    {
      heading: "API Reference",
      links: [
        { href: "/docs/5.3/api/overview/", text: "Overview" },
        { href: "/docs/5.3/api/requesting/", text: "Requesting" },
        { href: "/docs/5.3/api/response-handling/", text: "Response Handling" },
        { href: "/docs/5.3/api/endpoints/", text: "Endpoints" },
        { href: "/docs/5.3/api/errors/", text: "Errors" },
        { href: "/docs/5.3/api/authentication/", text: "Authentication" },
      ],
    },
    // Add more groups similarly...
  ];

  return (
    <div className="container-left py-4 mx-5" style={{ width: "20%" }}>
      {/* Sidebar section */}
      <aside style={{ borderRadius: "25px" }}>
        <div
          className="offcanvas-lg offcanvas-start"
          tabIndex="-1"
          id="bdSidebar"
          aria-labelledby="bdSidebarOffcanvasLabel"
        >
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title" id="bdSidebarOffcanvasLabel">
              Browse docs
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              data-bs-target="#bdSidebar"
            ></button>
          </div>

          <div className="offcanvas-body" style={{ maxHeight: "calc(100vh - 60px)", overflowY: "auto", overflowX: "hidden" }}>
            <nav
              className="bd-links w-100"
              id="bd-docs-nav"
              aria-label="Docs navigation"
            >
              <ul className="bd-links-nav list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2 w-100" >
                {linkGroups.map((group, index) => (
                  <LinkGroup key={index} heading={group.heading} links={group.links} />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </aside>

      {/* Main content section */}
      <div>{/* Your main content goes here */}</div>
    </div>
  );
};

export default ProductGridSidebar;
