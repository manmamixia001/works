// パララックス
const cloudLayer1 = document.querySelectorAll(".Layer1");
const cloudLayer2 = document.querySelectorAll(".Layer2");
const cloudLayer3 = document.querySelectorAll(".Layer3");
const cloudLayer4 = document.querySelectorAll(".Layer4");
const cloudLayer5 = document.querySelectorAll(".Layer5");
const cloudLayer6 = document.querySelectorAll(".Layer6");
const cloudLayer7 = document.querySelectorAll(".Layer7");
const cloudLayer8 = document.querySelectorAll(".Layer8");
const cloudLayer9 = document.querySelectorAll(".Layer9");
const cloudLayer10 = document.querySelectorAll(".Layer10");
const cloudLayer11 = document.querySelectorAll(".Layer11");
const cloudLayer12 = document.querySelectorAll(".Layer12");

// 事前に各要素のoffsetTopを取得して、配列化しておく
const layer1OffsetList = Array.from(cloudLayer1).map((cloud) => cloud.offsetTop);
const layer2OffsetList = Array.from(cloudLayer2).map((cloud) => cloud.offsetTop);
const layer3OffsetList = Array.from(cloudLayer3).map((cloud) => cloud.offsetTop);
const layer4OffsetList = Array.from(cloudLayer4).map((cloud) => cloud.offsetTop);
const layer5OffsetList = Array.from(cloudLayer5).map((cloud) => cloud.offsetTop);
const layer6OffsetList = Array.from(cloudLayer6).map((cloud) => cloud.offsetTop);
const layer7OffsetList = Array.from(cloudLayer7).map((cloud) => cloud.offsetTop); // 新規追加
const layer8OffsetList = Array.from(cloudLayer8).map((cloud) => cloud.offsetTop);
const layer9OffsetList = Array.from(cloudLayer9).map((cloud) => cloud.offsetTop);
const layer10OffsetList = Array.from(cloudLayer10).map((cloud) => cloud.offsetTop);
const layer11OffsetList = Array.from(cloudLayer11).map((cloud) => cloud.offsetTop); // 新規追加
const layer12OffsetList = Array.from(cloudLayer12).map((cloud) => cloud.offsetTop);

// レイヤーごとの移動スピード倍率
const LAYER1_SPEED = 0.2;
const LAYER2_SPEED = 0.35;
const LAYER3_SPEED = 0.25;
const LAYER4_SPEED = -0.2;
const LAYER5_SPEED = 0.5;
const LAYER6_SPEED = 0.05;
const LAYER7_SPEED = 0.2; // 新規追加
const LAYER8_SPEED = -0.2;
const LAYER9_SPEED = -0.4;
const LAYER10_SPEED = -0.2;
const LAYER11_SPEED = -0.2;
const LAYER12_SPEED = 0.1;

// 移動量に応じてパララックスを実行する関数
const moveParallax = () => {
  const scrollVal = window.scrollY; // 現在のスクロール量を取得

  cloudLayer1.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer1OffsetList[index]) * LAYER1_SPEED
    }px)`;
  });

  cloudLayer2.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer2OffsetList[index]) * LAYER2_SPEED
    }px)`;
  });

  cloudLayer3.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer3OffsetList[index]) * LAYER3_SPEED
    }px)`;
  });

  cloudLayer4.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer4OffsetList[index]) * LAYER4_SPEED
    }px)`;
  });

  cloudLayer5.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer5OffsetList[index]) * LAYER5_SPEED
    }px)`;
  });

  cloudLayer6.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer6OffsetList[index]) * LAYER6_SPEED
    }px)`;
  });

  cloudLayer7.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer7OffsetList[index]) * LAYER7_SPEED
    }px)`;
  });

  cloudLayer8.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer8OffsetList[index]) * LAYER8_SPEED
    }px)`;
  });

  cloudLayer9.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer9OffsetList[index]) * LAYER9_SPEED
    }px)`;
  });

  cloudLayer10.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer10OffsetList[index]) * LAYER10_SPEED
    }px)`;
  });

  cloudLayer11.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer11OffsetList[index]) * LAYER11_SPEED
    }px)`;
  });

  cloudLayer12.forEach((cloud, index) => {
    cloud.style.transform = `translateY(${
      (scrollVal - layer12OffsetList[index]) * LAYER12_SPEED
    }px)`;
  });
};

// 初期位置セット
moveParallax();

// スクロール時にパララックスを更新
window.addEventListener("scroll", moveParallax);

//------------------------------------------------------------------------------


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


