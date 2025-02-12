// ページ読み込みが完了したら実行
$(document).ready(function () {
    // 3秒後に "/" にリダイレクト
    setTimeout(function () {
        window.location.href = "/index";
    }, 60000); // 3000ミリ秒 = 3秒
});
