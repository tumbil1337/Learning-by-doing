

var frame = document.getElementById('Iframe');
var links = document.getElementsByClassName('Inhalt_a');

for(i= 0; i<links.length;i++)
{
    links[i].addEventListener('click',get_name);
}

function get_name()
    {
    pagename = this.innerHTML;
    document.getElementById('Headline_iframe').textContent=(pagename);
    console.log(pagename);
    }
    


frame.onload = function(){
frame.style.height = frame.contentWindow.document.body.scrollHeight+'px';
frame.style.width = frame.contentWindow.document.body.scrollWidth+'px';
console.log(frame.style.height);
console.log(frame.style.height);
};



    


