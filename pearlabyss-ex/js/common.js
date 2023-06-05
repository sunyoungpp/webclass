window.onload = function(){

    let newsSlider = new Swiper(".news_station",{
       
        pagination: {
            el: '.news_pagination',
            clickalbe:true,
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
    
    let noticeSlider = new Swiper(".notice_station",{
      
          breakpoints:{
            280:{
                slidesPerView: 1,
            },
            768:{
                slidesPerView: 4,
                spaceBetween: 20
            }
          }  ,
          pagination: {
            el: '.notice_pagination',
            clickalbe:true,
          },
        
    })
}