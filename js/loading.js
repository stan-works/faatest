// ローディング画面の要素を取得
const loadingScreen = document.querySelector(".loading-screen");

// ページの読み込みが完了したら実行される関数
window.addEventListener("load", function () {
    // ローディング画面を非表示にする
    loadingScreen.classList.remove("active");
});

// 5秒後にローディング画面を強制的に非表示にする
setTimeout(function () {
    if (loadingScreen.classList.contains("active")) {
        loadingScreen.classList.remove("active");
    }
}, 5000);
