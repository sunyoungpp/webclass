//생성자 함수를 정할때는 앞글자를 대문자로 하는게 관습(필수X)
function Dog(dogName,dogAge){
    this.name = dogName
    this.age = dogAge
    this.feel = Math.floor(Math.random()*3)
    this.say = function(){
        if(this.feel==0){
            document.write(`멍멍🐶 나는 ${this.name}이다멍 기부니가 좋다멍🥰<br>`)
        }else if(this.feel==1){
            document.write(`${this.name}는 오늘 심심하다멍 집에 갈래멍😔<br>`)
        }else{
            document.write(`${this.name}는 지금 굉장히 화가 난다멍 건들지말라멍😡<br>`)
        }
    }
}

