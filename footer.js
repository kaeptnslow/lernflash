class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-inner">
          <div class="footer-links" aria-label="Footer Navigation">
            <a href="index.html">Start</a>
            <a href="support.html">Support</a>
            <a href="privacy.html">Datenschutz</a>
            <a href="imprint.html">Impressum</a>
            <a href="eula.html">EULA</a>
          </div>
          <p class="small muted">© 2026 LernFlash · Kai Wolfram</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
