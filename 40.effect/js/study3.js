$(document).ready(function () {

    // $(".btn").click(function () {
    // //   textAni(".title", {
    // //     aniDelay: 0.5,
    // //     aniSpeed: 1,
    // //     textSize: 80
    // //   })
     
    // })

    textAni(".title",{
        textSize:100,
        aniSpeed:0.5,
        effect:"fadeInOut"
    })
    textAni(".title2",{
        textSize:30,
        aniSpeed:0.5,
        aniDelay:0.01,
        effect:"moveTopToBottom"
    })
  
  })