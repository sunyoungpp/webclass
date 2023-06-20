$(document).ready(function(){
    let ResultEl = "";
    for(let i=1; i<=20; i++){
        ResultEl+=`<li> <img class="small" src="./img/s${i}.jpg" alt="작은이미지1">
        <img class="big" src="./img/pic${i}.jpg" alt="큰이미지1"></li>`
    }
    document.querySelector(".train").innerHTML = ResultEl

})

