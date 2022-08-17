document.addEventListener('DOMContentLoaded', function() {



//Меню(Флаги) клик или is-open--is-active//
const params = {
  btnClassName: "simplebar-js",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();



//Слайдер - Ценик(price)//
let priceSlider = new Swiper(".price__slides-container", {
  // slidesPerColumnFill: "row",(от Swiper-а 6-ой версии)
  slidesPerView: 1,
  // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
  grid: {
    rows: 1,
    fill: "row"
  }, //(от Swiper-а 7-ая версия)
  spaceBetween: 20,


  //Бесконечное листание страниц
  speed: 2000, //Интервал ожидания

  // autoplay: {
  //delay: 3000,Интервал ожидания
  //     disableOnInteraction: false,      
  // }, 


  pagination: {
    el: ".price .price__pagination",
    type: "fraction"
  },

  navigation: {
    nextEl: ".price__btn_next",
    prevEl: ".price__btn_prev"
  },

  //Стили для галереи
  breakpoints: {
    320: {
      slidesPerView: 1,
      // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
      grid: {
        rows: 1
      }, //(от Swiper-а 7-ая версия)
      spaceBetween: 30
    }, 

    581: {
      slidesPerView: 1,
      // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
      grid: {
        rows: 1
      }, //(от Swiper-а 7-ая версия)
      spaceBetween: 30
    },

    768: {
      slidesPerView: 1,
      // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
      grid: {
        rows: 1
      }, //(от Swiper-а 7-ая версия)
      spaceBetween: 32
    },

    900: {
      slidesPerView: 2,
      // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
      grid: {
        rows: 1
      }, //(от Swiper-а 7-ая версия)
      spaceBetween: 35
    },

    1620: {
      slidesPerView: 2,
      // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
      grid: {
        rows: 1
      }, //(от Swiper-а 7-ая версия)
      spaceBetween: 35
    },

    1920: {
      slidesPerView: 2,
      // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
      grid: {
        rows: 1
      }, //(от Swiper-а 7-ая версия)
      spaceBetween: 35
    },

    2220: {
      slidesPerView: 2,
      // slidesPerColumn: 2,(от Swiper-а 6-ой версии)
      grid: {
        rows: 1
      }, //(от Swiper-а 7-ая версия)
      spaceBetween: 50
    }
  },


  on: {
    /* исправляет баг с margin-top остающимся при смене брейкпоинта */
    beforeResize: function () {
      this.slides.forEach((el) => {
      el.style.marginTop = "";
      });
    }
    }
});




  /*Клик БУРГЕР*/
  // $ предполагает использование библиотеки jQuery. В codepen-е без неё работает, в других местах без библиотеки jQuery не работает
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    }) 
  })

  $(document).ready(function() {
    $('#burger').click(function() {
      $(this).toggleClass('open')
    })
  })

  


  // Плавный скролл по якорям. В любое место можно кинуть.
  // $(function(){
  //   $('a[href^="#"]').click(function(){
  //     var target = $(this).attr('href');
  //     $('html, body').animate({scrollTop: $
  //   (target).offset().top},800);
  //     return false;
  //   })
  // })


  









});