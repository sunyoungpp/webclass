window.onload = function(){

    let nextBtn = document.querySelector(".btnNext")
    let btnPrev = document.querySelector(".btnPrev")
    let train = document.querySelector(".train")
    let trainList = train.children
    // let pagination = document.querySelector(".pagination")
    // let paginationList = pagination.children
    let paginationList = document.querySelectorAll(".pagination>li")
    let count = 0

    nextBtn.addEventListener("click",function(){
        // train클래스를 선택해서 왼쪽으로 500픽셀 이동
        count++
        if(count>3){count=0}
        train.style.transform = `translateX(-${25*count}%)`;

        for(let i=0;i<trainList.length;i++){
            trainList[i].classList.remove("on")
            paginationList[i].classList.remove("on")
        }
        trainList[count].classList.add("on")
        paginationList[count].classList.add("on")
    })

    btnPrev.addEventListener("click",function(){
        count--
        if(count<0){count=3}
        // train.style.transform = "translateX(-"+25*count+"%)";
        train.style.transform = `translateX(-${25*count}%)`;

        for(let i=0;i<trainList.length;i++){
            trainList[i].classList.remove("on")
            paginationList[i].classList.remove("on")
        }
        trainList[count].classList.add("on")
        paginationList[count].classList.add("on")

    })

    for(let a=0 ; a<4 ; a++){
        paginationList[a].addEventListener("click",function(){
            count = a // 순번에 맞는 인덱스를 카운트변수에 저장한다.
            for(let i=0;i<trainList.length;i++){
                trainList[i].classList.remove("on")
                paginationList[i].classList.remove("on")
            }
            trainList[a].classList.add("on")
            paginationList[a].classList.add("on")
    
            train.style.transform = `translateX(-${25*a}%)`;
        })
    }

   





}