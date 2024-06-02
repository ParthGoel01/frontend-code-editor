document.addEventListener('DOMContentLoaded',()=>{
    let clear = document.getElementById('clear');
    let execute = document.getElementById('execute');

    let html_btn= document.getElementById('html_btn');
    let css_btn= document.getElementById('css_btn');
    let js_btn= document.getElementById('js_btn');

    let html = document.querySelector('#html');
    let css = document.querySelector('#css');
    let js = document.querySelector('#js');

    let iframe = document.querySelector('#iframe');

    let zoom_in = document.querySelector('.zoom_in');
    let zoom_out = document.querySelector('.zoom_out');

    execute.addEventListener('click',()=>{
        iframe.srcdoc=html.value+`<style>${css.value}</style> <script>${js.value}</script>`;
    })
    clear.addEventListener('click',()=>{
        document.querySelector('.z_index').value="";
    })
    html_btn.addEventListener('click',()=>{
       language(html,css,js);
       button(html_btn,css_btn,js_btn);
    })
    css_btn.addEventListener('click',()=>{
        language(css,html,js);
        button(css_btn,html_btn,js_btn);
    })
    js_btn.addEventListener('click',()=>{
        language(js,html,css);
        button(js_btn,html_btn,css_btn);
    })
    zoom_in.addEventListener('click',()=>{
        [html,css,js].forEach((e)=>{
            let currentSize = window.getComputedStyle(e).fontSize;
            let newSize = parseFloat(currentSize) + 1;
            e.style.fontSize = newSize + 'px';
        })
    })
    zoom_out.addEventListener('click',()=>{
        [html,css,js].forEach((e)=>{
            let currentSize = window.getComputedStyle(e).fontSize;
            let newSize = parseFloat(currentSize) - 1;
            e.style.fontSize = newSize + 'px';
        })
    })
    let Mode = ['<i class="fa-solid fa-moon"></i>','<i class="fa-solid fa-sun" style="color: #ffffff;"></i>'];
    var color = ["#fff","#000"];
    var i=1;
    var change = document.getElementById("button");
    change.addEventListener('click', function() {
        document.documentElement.style.setProperty("--primary-color",color[i]);
        document.documentElement.style.setProperty("--secondary-color",color[(i+1)%2]);
        change.innerHTML= Mode[i];
        i=(i+1)%2;
    });
    if(window.innerWidth<=500){
        js_btn.innerHTML="JS";
    }
})

function language(select , remove1,remove2){
    select.classList.add('z_index');
    remove1.classList.remove('z_index');
    remove2.classList.remove('z_index');
}
function button(select , remove1,remove2){
    select.style.backgroundColor="var(--primary-color)";
    select.style.color="var(--secondary-color)";

    remove1.style.backgroundColor="lightgray";
    remove1.style.color="black";

    remove2.style.backgroundColor="lightgray";
    remove2.style.color="black";
}