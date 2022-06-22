var claro = document.getElementById('claro');
var escuro = document.getElementById('escuro');
var item = document.getElementsByClassName('item')


claro.addEventListener('click', function(){
    item[1].style.color = 'black';
    document.body.style.backgroundColor = 'whitesmoke'
    for(var x = 0; x < item.length; x++){
        item[x].style.backgroundColor = 'rgb(172, 219, 244)'
}
})

escuro.addEventListener('click', function(){
    item[1].style.color = 'white';
    document.body.style.backgroundColor = 'black';
    for(var x = 0; x < item.length; x++){
        item[x].style.backgroundColor = 'rgba(0, 0, 29, 0.892)';
    }
    
})
