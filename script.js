const input = document.querySelector('.input');
const button = document.querySelector('.button');
const result = document.getElementById('result');

button.addEventListener('click', function(){
    const value = parseInt(input.value);
    segitiga(value);
});

const segitiga = (amount) => {
    var stars = ``;
    for(let i = 0; i < amount; i++){ 
        for(let s = amount; s > i; s--){
            stars += '&nbsp;';
        }
        for(let j = 0; j <= i; j++){
            stars += '*&nbsp;';
        }
        stars += '<br>';
    }
    result.innerHTML = stars
    result.style.backgroundColor = "black";
    result.style.color = "white";
    result.style.borderRadius = "10px";
    result.style.padding = "15px";
}