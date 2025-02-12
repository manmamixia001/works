// モーダルウィンドウ全体を指す要素
const modal = document.getElementById('modal');

// モーダル内で拡大表示される画像を指す要素
const modalImg = document.getElementById('modalImage');

// .popupクラスを持つ画像のリストです。これらの画像をクリックすると、モーダルが表示されます
const imgs = document.querySelectorAll('.popup');

// モーダルを閉じるためのボタン
const closeSpan = document.getElementById('close');

// 画像クリックでモーダルを表示するイベント
for (let img of imgs) {
    img.onclick = function () {
        // モーダルを表示する
        modal.style.opacity = "1";
        modal.style.visibility = "visible";

        // モーダルで表示する画像に、クリックした画像のパスを設定する
        modalImg.src = this.src;
    };
}

// クローズボタンを押したらモーダルを閉じる
closeSpan.onclick = function () {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
};

// 画像以外の部分をクリックしたらモーダルを閉じる
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
    }
};


$(document).ready(function() {
  $('.work-kinds-btn').on('click', function(e) {
    e.preventDefault();
    console.log ('確認');
  
    // ボタンのテキストが"動画編集"の場合だけ動作
    if ($(this).text() === '動画編集') {
      $('.Works').show();
      $('.none').hide();
    }
  });
});

$(document).ready(function() {
    $('.work-kinds-btn').on('click', function(e) {
      e.preventDefault();
      console.log ('確認');
    
      // ボタンのテキストが"サムネイル"の場合だけ動作
      if ($(this).text() === 'サムネイル') {
        $('.Works').hide();
        $('.none').show();
      }
    });
  });

  $(document).ready(function() {
    $('.work-kinds-btn').on('click', function(e) {
      e.preventDefault();
      console.log ('確認');
    
      // ボタンのテキストが"イラスト"の場合だけ動作
      if ($(this).text() === 'イラスト') {
        $('.Works').hide();
        $('.none').show();
      }
    });
  });

  $(document).ready(function() {
    $('.work-kinds-btn').on('click', function(e) {
      e.preventDefault();
      console.log ('確認');
    
      // ボタンのテキストが"その他"の場合だけ動作
      if ($(this).text() === 'その他') {
        $('.Works').hide();
        $('.none').show();
      }
    });
  });


$('.work-kinds-btn').on('click', function(e) {
  e.preventDefault(); // デフォルトのリンク動作を防ぐ
  console.log('ボタンがクリックされました:', $(this).text());
});


if (typeof jQuery === 'undefined') {
    console.error('jQueryが読み込まれていません');
} else {
    console.log('jQueryが正常に読み込まれています');
}


$(document).ready(function () {
    // ボタンがクリックされたときの処理
    $('.work-kinds-btn').on('click', function (e) {
      e.preventDefault(); // デフォルトの動作を防ぐ
  
      // クリックされたボタンに.grey-btnを追加
      $(this).addClass('grey-btn');
  
      // 他のボタンから.grey-btnを削除
      $('.work-kinds-btn').not(this).removeClass('grey-btn');
    });
  });
  



  document.addEventListener("DOMContentLoaded", function () {
    // header以外のすべての要素を対象に取得
    const fadeElements = document.querySelectorAll("body > *:not(header)");

    fadeElements.forEach((el) => {
        // 初期状態を非表示に設定
        el.style.opacity = "0";
        el.style.transition = "opacity 3s ease";

        // フェードインの実行
        setTimeout(() => {
            el.style.opacity = "1"; // 表示状態にする

            // フェードイン完了後にtransitionをリセット
            setTimeout(() => {
                el.style.transition = "opacity 0s ease"; // トランジションを即時に変更
            }, 3000); // 3秒後（フェードインが完了するタイミング）にリセット
        }, 0); // ページロード直後に実行
    });
});

  

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

  