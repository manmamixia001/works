setTimeout(function () {
    $('.header').css('transform','translateY(0)')
}, 50);



// パララックス
const element = document.querySelector(".skyWrapper");
const cloudLayer1 = document.querySelectorAll(".cloudLayer1");
const cloudLayer2 = document.querySelectorAll(".cloudLayer2");
const cloudLayer3 = document.querySelectorAll(".cloudLayer3");

// 事前に各要素のoffsetTopを取得して、配列化しておく
const layer1OffsetList = Array.from(Layer1).map(
  (cloud) => cloud.offsetTop
);
const layer2OffsetList = Array.from(Layer2).map(
  (cloud) => cloud.offsetTop
);
const layer3OffsetList = Array.from(Layer3).map(
  (cloud) => cloud.offsetTop
);

// それぞれのレイヤーの移動スピード倍率
const LAYER1_SPEED = 5;
const LAYER2_SPEED = -0.5;
const LAYER3_SPEED = -1.5;
const LAYER4_SPEED = 1;
const LAYER5_SPEED = -0.7;
const LAYER6_SPEED = -1;

// 移動量に応じてパララックスを実行する関数
const moveParallax = (scrollVal) => {
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
};

// 初期位置セット
moveParallax(0);

// スクロールに応じて移動
element.addEventListener("scroll", () => {
  const scrollVal = element.scrollTop;
  moveParallax(scrollVal);
});
