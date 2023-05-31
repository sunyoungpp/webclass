window.onload = function(){

    let newsSlider = new Swiper(".news_station",{
       
        pagination: {
            el: '.swiper-pagination',
          },
          breakpoints:{
            280:{
                slidesPerView: 1,
            },
            768:{
                slidesPerView: 3,
            }
          }        
          
    });
    
    let noticeSlider = new Swiper(".notice",{
        pagination: {
            el: '.swiper-pagination',
          },
          breakpoints:{
            280:{
                slidesPerView: 1,
            },
            768:{
                slidesPerView: 4,
            }
          }   
        
    })
}