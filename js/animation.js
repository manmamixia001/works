
// ページが読み込まれてから3秒後にクラスを追加
setTimeout(function () {
    $('.none').show();
}, 5000); // 3000ミリ秒（3秒）

setTimeout(function () {
    $('.header').css('transform','translateY(0)')
}, 5000);

setTimeout(function () {
    const elements = document.querySelectorAll('.my-img-before');
    elements.forEach(function (element) {
        element.classList.remove('my-img-before');
        element.classList.add('my-img-after');
    });
}, 5000)



setTimeout(function () {
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }

    function scrollAnimation() {
        $(window).scroll(function () {
            $(".u-fade-type-up").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 200) {
                    $(this).addClass('is-active'); // アクティブ化
                }
            });
        });
    }

    // 初期トリガー（ページ読み込み時にスクロール位置を反映）
    $(window).trigger('scroll');
}, 7000); // 5000ミリ秒（5秒）


setTimeout(function () {
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }

    function scrollAnimation() {
        $(window).scroll(function () {
            $(".u-fade-type-up2").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 400) {
                    $(this).addClass('is-active2'); // アクティブ化
                }
            });
        });
    }

    // 初期トリガー（ページ読み込み時にスクロール位置を反映）
    $(window).trigger('scroll');
}, 7100); // 5000ミリ秒（5秒）

document.addEventListener("DOMContentLoaded", function () {
    const aboutMeButtons = document.querySelectorAll(".AboutMe-button");
  
    if (aboutMeButtons.length > 0) {
      aboutMeButtons.forEach(button => {
        button.addEventListener("click", function (event) {
          event.preventDefault(); // デフォルトのリンク動作を無効化
  
          // フェードアウト処理
          const elementsToFadeOut = document.querySelectorAll("body > *:not(header)");
          elementsToFadeOut.forEach(element => {
            element.style.transition = "opacity 1s";
            element.style.opacity = "0";
          });
  
          // 2秒後にリンク移動
          setTimeout(() => {
            window.location.href = "/about-me";
          }, 1000);
        });
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const aboutMeButtons = document.querySelectorAll(".Works-button");
  
    if (aboutMeButtons.length > 0) {
      aboutMeButtons.forEach(button => {
        button.addEventListener("click", function (event) {
          event.preventDefault(); // デフォルトのリンク動作を無効化
  
          // フェードアウト処理
          const elementsToFadeOut = document.querySelectorAll("body > *:not(header)");
          elementsToFadeOut.forEach(element => {
            element.style.transition = "opacity 1s";
            element.style.opacity = "0";
          });
  
          // 2秒後にリンク移動
          setTimeout(() => {
            window.location.href = "/works";
          }, 1000);
        });
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const aboutMeButtons = document.querySelectorAll(".index-button");
  
    if (aboutMeButtons.length > 0) {
      aboutMeButtons.forEach(button => {
        button.addEventListener("click", function (event) {
          event.preventDefault(); // デフォルトのリンク動作を無効化
  
          // フェードアウト処理
          const elementsToFadeOut = document.querySelectorAll("body > *:not(header)");
          elementsToFadeOut.forEach(element => {
            element.style.transition = "opacity 1s";
            element.style.opacity = "0";
          });
  
          // 2秒後にリンク移動
          setTimeout(() => {
            window.location.href = "/index";
          }, 1000);
        });
      });
    }
  });
  