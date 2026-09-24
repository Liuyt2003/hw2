const navItems = [
  {
    label: "Products",
    href: "/products/"
  },
  {
    label: "Case Studies",
    href: "/case-studies/"
  },
  {
    label: "Blog",
    href: "/blog/"
  },
  {
    label: "About",
    href: "/about/"
  },
  {
    label: "Contact",
    href: "/contact/"
  }
];

const currentPath = window.location.pathname;

const navHTML = `
  <nav>
    <a aria-label="Acme Corp home" href="/">
      <img
        alt="Acme Corp"
        width="200"
        height="50"
        src="/assets/logo.svg"
      />
    </a>

    <ul>
      ${navItems.map(item => `
        <li>
          <a
            href="${item.href}"
            data-page="${item.label.toLowerCase().replace(" ", "-")}"
            class="${currentPath.startsWith(item.href) ? "active" : ""}"
          >
            ${item.label}
          </a>
        </li>
      `).join("")}
    </ul>
  </nav>
`;

document.querySelector("#site-header").innerHTML = navHTML;