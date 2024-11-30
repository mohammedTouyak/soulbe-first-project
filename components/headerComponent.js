class headerComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid header">
                            <div class="top-bar">
                                <a class="navbar-brand" href="#">
                                    <div class="logo">
                                        <img src="./assets/images/camel-logo.png" alt="Camel Logo">
                                    </div>
                                </a>
                                <div class="languages">
                                    <small> Languages:</small>
                                    <img src="./assets/images/us-flag.png" alt="English" id="english-flag">
                                    <img src="./assets/images/fr-flag.png" alt="French" id="french-flag">
                                    <img src="./assets/images/es-flag.png" alt="Spanish" id="spanish">
                                    <img src="./assets/images/cn-flag.png" alt="Chinese" id="chinese">
                                    <img src="./assets/images/kw-flag.png" alt="Arabic" id="arabic">
                                </div> 
                            </div>
                            
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="border-bottom: 1px solid #f4f4f4;">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home<br><small>الرئيسية</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#who-we-are">Who We Are?<br><small>من نحن؟</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#our-services">Our Services<br><small>خدماتنا</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Photos<br><small>الصور</small></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#contact-us">Contact Us<br><small>اتصل بنا</small></a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
        `
    }
}

customElements.define('app-header',headerComponent)