
class Header extends HTMLElement{
    
    constructor(){
        super();
    }
    
    connectedCallback(){
        this.innerHTML= `
                <header>

                    <ul class="Menueband">
                        <li><a href="/Learning by doing html/html inhaltsverzeichniss.html">HTML</a></li>
                        <li><a href="/Learning by doing css/css inhaltsverzeichniss.html">CSS</a></li>
                        <li><a href="/Learning by doing javascript/javascript inhaltsverzeichniss.html">Javascript</a></li>
                        <li class="Red"><a class="Welcome" href="/index.html">Learning by doing</a></li>
                    </ul>  

                </header>
        `;
    }
    
}

customElements.define('header-component', Header);