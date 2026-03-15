class SiteHeader extends HTMLElement {
  connectedCallback() {
    const current = (document.body?.dataset?.page || "").trim();

    const links = [
      { key: "index", href: "index.html", label: "Start" },
      { key: "support", href: "support.html", label: "Support" },
      { key: "privacy", href: "privacy.html", label: "Datenschutz" },
      { key: "imprint", href: "imprint.html", label: "Impressum" },
      { key: "eula", href: "eula.html", label: "EULA" }
    ];

    const nav = links
      .map(
        (link) =>
          `<a href="${link.href}"${current === link.key ? ' class="active"' : ""}>${link.label}</a>`
      )
      .join("");

    this.innerHTML = `
      <header class="site-header">
        <div class="container header-inner">
          <a class="brand" href="index.html">LernFlash</a>
          <nav class="nav" aria-label="Hauptnavigation">
            ${nav}
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);
