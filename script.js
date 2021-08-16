var display = document.querySelector('#display')
var minutos = document.querySelector('#minutos')
var segundos = document.querySelector('#segundos')
var comecar = document.querySelector('#comecar')

var cronometroSeg;
var minutoAtual;
var segundoAtual;
var interval;

for (var i = 0; i <= 60; i++){
    minutos.innerHTML+= '<option value="'+i+'">'+i+'</Option>';
}
for (var i = 1; i <= 60; i++){
    segundos.innerHTML+= '<option value="'+i+'">'+i+'</Option>';
}

// Funções de evento Click
comecar.addEventListener('click', ()=>{ 
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;

    interval = setInterval(function(){
        segundoAtual--;
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;
            }else{
                document.querySelector('#sound').play();
                alert('acabou')
                
                clearInterval(interval);
            }
        }
        display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
    },1000)
 })