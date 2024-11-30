class footerComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <footer class="footer">
                        <div class="footer-content">
                            <div class="footer-section footer-logo">
                                <img src="assets/images/camel-logo.png" alt="Camel Logo">
                                <div class="social-icons">
                                    <img src="assets/images/x-logo.png" alt="Camel Logo">
                                    <img src="assets/images/logo-instagram.png" alt="Camel Logo">
                                    <img src="assets/images/youtube-logo.png" alt="Camel Logo">
                                    <img src="assets/images/linkedin-logo.png" alt="Camel Logo">
                                </div>
                            </div>
                            <div class="footer-section">
                                <h4>Our Resources</h4>
                                <ul>
                                    <li><a href="#">UI Design</a></li>
                                    <li><a href="#">UX Design</a></li>
                                    <li><a href="#">Wireframing</a></li>
                                    <li><a href="#">Diagramming</a></li>
                                    <li><a href="#">Team Collaboration</a></li>
                                </ul>
                            </div>
                            <div class="footer-section">
                                <h4>External Links</h4>
                                <ul>
                                    <li><a href="#">Design</a></li>
                                    <li><a href="#">Prototyping</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            Designed, developed, and maintained by SAULBE Ltd. ©
                        </div>
                    </footer>
        `
    }
}

customElements.define('app-footer',footerComponent)