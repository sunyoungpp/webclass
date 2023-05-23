window.onload = function(){

    let tabTitles = document.querySelectorAll(".tabTit>li")
    let tabDes = document.querySelector(".tabDes")
    let tabDescription = [
        `<h3>title</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate sapiente nobis necessitatibus alias assumenda perspiciatis porro impedit vitae, repudiandae voluptates optio exercitationem. Facilis modi inventore corrupti aspernatur quo fugiat.</p>`,
    `<h3>title2</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate sapiente nobis necessitatibus alias assumenda perspiciatis porro impedit vitae, repudiandae voluptates optio exercitationem. Facilis modi inventore corrupti aspernatur quo fugiat.</p>`,
    `<h3>title3</h3>
    <ul>
        <li>des1</li>
        <li>des2</li>
        <li>des3</li>
        <li>des4</li>
    </ul>`
]
    let list = document.querySelectorAll(".tabTit>li")
    for(let i=0; i<list.length; i++){
        list[i].addEventListener("click",function(){
            for(let j=0; j<list.length; j++){
                list[j].classList.remove("on")
            }
            this.classList.add("on")

            tabDes.innerHTML = tabDescription[i]

        })
    }

}
