
const template = document.createElement('template');

template.innerHTML = `
        <header>
               
            <ul class="Menueband">
                
                <li><a href="/Learning by doing html/html inhaltsverzeichniss.html">HTML</a></li>                
                <li><a href="/Learning by doing css/css inhaltsverzeichniss.html">CSS</a></li>                
                <li><a href="/Learning by doing javascript/javascript inhaltsverzeichniss.html">Javascript</a></li>  
                <li class="Red"><p>Learning by doing</p></li>
                    
            </ul>  
                
        </header>
`;

document.body.appendChild(template.content);           

