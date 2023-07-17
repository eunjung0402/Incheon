$(function(){
    const mainSlide = new Swiper(".news_slide", {
      autoplay:{
        delay: 4000,
        disableOnInteraction : false,   // 스와이프 후 자동재생 비활성 되지 않음
      },
      speed:500,
      loop:true,
      loopAdditionalSlides : 1,
      pagination: {
        el: ".pagination",
        type: "fraction",
      },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });

      // 상단 메인 슬라이드 일시정지 이벤트
  let sw=0;
  $('.sc_visual .control_btn').click(function(){
    if(sw==0){
      $(this).removeClass('pause');
      $(this).addClass('restart');
      mainSlide.autoplay.stop();
      sw = 1;
    }else{
        $(this).addClass('pause');
        $(this).removeClass('restart');
        mainSlide.autoplay.start();
        sw = 0;
    }
  })

  $('.sc_visual .nav_btn').click(function(){

    idx = $(this).data('idx');
    $(this).addClass('active').siblings().removeClass('active');
    mainSlide.slideToLoop(idx);

  })

  mainSlide.on('slideChange', function(){
    idx = this.realIndex;
    $('.sc_visual .nav_btn').removeClass('active');
    if (idx >= 2) {
      $('.sc_visual .nav_btn.citizen').addClass('active');
    } else {
      $('.sc_visual .nav_btn.main').addClass('active');
    }
  })


    $('.all_menu').click(function(){
      $('.group_more_menu').slideToggle();
      $('.gnb_item .move_icon').toggleClass('on');
    })

    $('.menu_item').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })

    $('.tab_item').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })

    // 하단 메뉴 토글 슬라이드
    $('.sc_more_menu .more_item strong.title').click(function(){
      let bool = $(this).parent().hasClass('active');
      if(!bool) {
        $('.slide_wrap').slideUp();
        $('.more_item').removeClass('active');
        $(this).siblings('.slide_wrap').slideDown();
        $(this).parent().addClass('active');
      } else {
        $(this).siblings('.slide_wrap').slideUp();
        $(this).parent().removeClass('active');
      }
    })


    $('.link_go').click(function(){
      url = $('#lang').val();
      window.open(url)
    })
})