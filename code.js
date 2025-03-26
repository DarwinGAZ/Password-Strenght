//Intensidade da Senha
var buttonshowpass = document.getElementById("buttonshowpass");
var inputpass = document.querySelector("#inputpass");
var spanstrongpass = document.querySelector(".strongpass");
var definepass = document.querySelector("#definepass");
var container = document.querySelector(".container");
var buttomimg = buttonshowpass.querySelector("#buttonimg");

//Define o definir senha já desabilitado
definepass.disabled = true;
inputpass.addEventListener("input", intensepass);
definepass.addEventListener("input", intensepass);

//Revela ou oculta a senha e muda a logo
function showpassword() {
    if (inputpass.getAttribute("type") === "password") {
        inputpass.setAttribute("type", "text");
        buttomimg.src = "https://cdn-icons-png.flaticon.com/256/829/829117.png";
    } else {
        inputpass.setAttribute("type", "password");
        buttomimg.src =
            "https://cdn-icons-png.flaticon.com/256/1279/1279615.png";
    }
}

//Coloca a Intensidade já como neutra
spanstrongpass.innerHTML = "Neutra";
spanstrongpass.setAttribute("style", "color:#3d3d3d");

//Mostra a intensidade da senha
function intensepass() {
    var inputlength = inputpass.value.length;

    if (inputlength == 0) {
        spanstrongpass.innerHTML = "Neutra";
        spanstrongpass.setAttribute("style", "color: #3d3d3d");
        definepass.disabled = true;
    } else if (inputlength <= 5) {
        spanstrongpass.innerHTML = "Fraca";
        spanstrongpass.setAttribute("style", "color: red");
        definepass.disabled = true;
    } else if (inputlength <= 10) {
        spanstrongpass.innerHTML = "Média";
        spanstrongpass.setAttribute("style", "color: #ff7b00");
        definepass.disabled = false;
    } else if (inputlength > 10) {
        spanstrongpass.innerHTML = "Forte";
        spanstrongpass.setAttribute("style", "color: Green");
        definepass.disabled = false;
    }
}

//Mudar tema do navegador
var blackradio = document.querySelector("#Escuro");
var whiteradio = document.querySelector("#Claro");
const DarkImg = document.querySelector("#WhiteImg");
const WhiteImg = document.querySelector("#DarkImg");

var body = document.body;

//Coloca a caixa branca Já selecionada
whiteradio.checked = true;

//Quando clicar em alguma caixa, acontece a função
blackradio.addEventListener("click", toggletheme);
whiteradio.addEventListener("click", toggletheme);

function toggletheme() {
    //Tema Preto
    if (blackradio.checked) {
        body.style.background = "#121212";
        definepass.style.backgroundColor = "#121212";
        definepass.style.color = "white";
        body.style.color = "white";
        DarkImg.style.filter = "invert(1)";
        WhiteImg.style.filter = "invert(1)";
        buttomimg.style.filter = "invert(1)";
        container.style.backgroundColor = "#201f1f";
        spanstrongpass.setAttribute("style", "color:white");

        //Faz com que a cor do strongpass não mude ao alterar o tema
        if (spanstrongpass.innerHTML === "Neutra") {
            spanstrongpass.setAttribute("style", "color:rgb(136, 135, 135)");
        } else if (spanstrongpass.innerHTML === "Fraca") {
            spanstrongpass.setAttribute("style", "color: red");
        } else if (spanstrongpass.innerHTML === "Média") {
            spanstrongpass.setAttribute("style", "color: #ff7b00");
        } else if (spanstrongpass.innerHTML === "Forte") {
            spanstrongpass.setAttribute("style", "color: green");
        }
        //Tema Branco
    } else if (whiteradio.checked) {
        body.style.background = "white";
        body.style.color = "black";
        definepass.style.backgroundColor = "white";
        definepass.style.color = "black";
        DarkImg.style.filter = "invert(0)";
        WhiteImg.style.filter = "invert(0)";
        buttomimg.style.filter = "invert(0)";
        container.style.backgroundColor = "#dfdfdf";
        spanstrongpass.setAttribute("style", "color:#3d3d3d");

        //Faz com que a cor do strongpass não mude ao alterar o tema
        if (spanstrongpass.innerHTML === "Neutra") {
            spanstrongpass.setAttribute("style", "color: #3d3d3d");
        } else if (spanstrongpass.innerHTML === "Fraca") {
            spanstrongpass.setAttribute("style", "color: red");
        } else if (spanstrongpass.innerHTML === "Média") {
            spanstrongpass.setAttribute("style", "color: #ff7b00");
        } else if (spanstrongpass.innerHTML === "Forte") {
            spanstrongpass.setAttribute("style", "color: green");
        }
    }
}
