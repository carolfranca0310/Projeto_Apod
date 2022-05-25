
function ChamadaAPI(date) {
    let URL = "https://api.nasa.gov/planetary/apod?";
    chave = "Ey7AxDfg7ssx5wm2kcUBrKWSXPnovnkwGxuoKSzV";


    fetch(`${URL}api_key=${chave}&date=${date}`) // fetch = função para chamar a API
        .then(resp => resp.json())
        .then(function (response) {
            ProcessarHTML(response);
        })
}
