function back()
{
  document.getElementById("inicial").style.display = "block";
  document.getElementById("segunda").style.display = "none";
  document.getElementById("terceira").style.display = "none";
  document.getElementById("quarta").style.display = "none";
}

function go1()
{
  document.getElementById("inicial").style.display = "none";
  document.getElementById("segunda").style.display = "block";
  document.getElementById("terceira").style.display = "none";
  document.getElementById("quarta").style.display = "none";
}

function go2()
{
  document.getElementById("inicial").style.display = "none";
  document.getElementById("segunda").style.display = "none";
  document.getElementById("terceira").style.display = "block";
  document.getElementById("quarta").style.display = "none";
}

function go3()
{
  document.getElementById("inicial").style.display = "none";
  document.getElementById("segunda").style.display = "none";
  document.getElementById("terceira").style.display = "none";
  document.getElementById("quarta").style.display = "block";
}

function go4()
{
  document.getElementById("inicial").style.display = "none";
  document.getElementById("segunda").style.display = "block";
  document.getElementById("terceira").style.display = "none";
  document.getElementById("quarta").style.display = "none";
}

function reinicia()
{
  document.getElementById("quarta").style.display = "none";
  back();
}

function back2()
{
  document.getElementById("inicial").style.display = "block";
  document.getElementById("segunda").style.display = "none";
  document.getElementById("terceira").style.display = "none";
  document.getElementById("quarta").style.display = "none";
}

function back3()
{
  document.getElementById("inicial").style.display = "none";
  document.getElementById("segunda").style.display = "block";
  document.getElementById("terceira").style.display = "none";
  document.getElementById("quarta").style.display = "none";
}

function back4()
{
  document.getElementById("inicial").style.display = "none";
  document.getElementById("segunda").style.display = "none";
  document.getElementById("terceira").style.display = "block";
  document.getElementById("quarta").style.display = "none";
}

var botao1 = document.getElementById("botaoIniciar");
var botao2 = document.getElementById("proximo1");
var botao3 = document.getElementById("proximo2");
var botao4 = document.getElementById("proximo3");
var botao5 = document.getElementById("volta1");
var botao6 = document.getElementById("volta2");

var primeiraPag;

function startTimer() {
  primeiraPag = setTimeout(function (){
    document.getElementById("inicial").style.display = "block";
    document.getElementById("segunda").style.display = "none";
    document.getElementById("terceira").style.display = "none";
    document.getElementById("quarta").style.display = "none";
  }, 30000);
}

botao1.addEventListener('click', function(){
  clearTimeout(primeiraPag);
  startTimer();
})

botao2.addEventListener('click', function() { 
  clearTimeout(primeiraPag);
  startTimer();
})

botao3.addEventListener('click', function() {
  clearTimeout(primeiraPag);
  startTimer();
})

botao4.addEventListener('click', function() {
  clearTimeout(primeiraPag);
  startTimer();
})

botao5.addEventListener('click', function() {
  clearTimeout(primeiraPag);
  startTimer();
})

botao6.addEventListener('click', function() {
  clearTimeout(primeiraPag);
  startTimer();
})
