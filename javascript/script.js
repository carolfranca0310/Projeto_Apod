let button = document.getElementById('button')

function ChamadaAPI(date) {
    let URL = "https://api.nasa.gov/planetary/apod?";
    chave ="Ey7AxDfg7ssx5wm2kcUBrKWSXPnovnkwGxuoKSzV";
    
    fetch(`${URL}api_key=${chave}&date=${date}`) // fetch = função para chamar a API
        .then(resp => resp.json())
        .then(function(retorno) {
            console.log(retorno)
        })
}

function creatNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}
var result = ChamadaAPI("2014-10-01")