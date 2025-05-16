// ローディング画面の要素を取得-------------------------------------------------------
const loadingScreen = document.querySelector(".loading-screen");

// ページの読み込みが完了したら実行される関数
window.addEventListener("load", function () {
    // 5秒後にloadingScreenが表示されていなければ、強制的に非表示にする
    setTimeout(function () {
        if (!loadingScreen.classList.contains("active")) {
            loadingScreen.classList.add("active");
        }
    }, 5000);

    // ローディング画面を非表示にする
    loadingScreen.classList.add("active");
});

// -------------------------------------------------------

// 文字がふわっと------------
// スクロールしたときに文字が表示されるかどうかをチェックする関数
function checkVisibility() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        // すでに表示済みなら何もしない
        if (element.classList.contains('visible')) return;

        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);


// ページをスクロールした際にチェック
window.addEventListener('scroll', checkVisibility);

// 初回ロード時にもチェック
document.addEventListener('DOMContentLoaded', checkVisibility);

// -------------------------------------------------


// TOPボタンが出現-----------
// TOPボタンを指定
const pagetop_btn = document.querySelector(".topbtn");

window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // TOPボタンの表示・非表示制御
    if (scrollY > 50 && (scrollY + windowHeight) < (documentHeight - 100)) {
        pagetop_btn.style.opacity = "1";
    } else {
        pagetop_btn.style.opacity = "0";
    }

    // スクロール量をコンソールに表示
    console.log("scrollY:", scrollY);
    console.log("scrollY + windowHeight:", scrollY + windowHeight);
    console.log("documentHeight:", documentHeight);
});


//コンソールを見ると、ものすごい速さでイベントが発生して処理が行われていたと思います。
//そこで、スクロール検知の頻度をさげるためにthrottle関数を使うことで改善できます。

//throttle関数について。

//throttle関数。これは個人の方、もしくはAIで作成できますのでこの内容はこのままコピペでOKです。
function throttle(fn, wait) {
    let time = Date.now();
    return function () {
        if (time + wait - Date.now() < 0) {
            fn();
            time = Date.now();
        }
    };
}

// ドロワーメニュー（ハンバーガーメニュー）-----------
const button = document.getElementById("drawerButton");
const demo = document.getElementById("menu");

button.addEventListener("click", drawermenu);

function drawermenu() {
    demo.classList.toggle("open");
    button.classList.toggle("close");
}

// ▼ 追加：メニュー内のリンクをクリックしたらメニューを閉じる
const navLinks = document.querySelectorAll("#menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // メニューとボタンのクラスを元に戻す
        demo.classList.remove("open");
        button.classList.remove("close");
    });
});

// -------------------------------------------------------

// header-------------------------------------------

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 0) {
        header.classList.add("transparent"); // スクロールしたらクラスを追加
    } else {
        header.classList.remove("transparent"); // スクロールしていなければクラスを削除
    }
});
// -------------------------------------------

// swiper-------------------------------------------------------
const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    autoplay: {
        // 自動再生
        delay: 2000, // 1秒後に次のスライド（初期値：3000）
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    effect: "fade", // フェード
    speed: 1500,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
// -------------------------------------------------------

// ButtonSection-------------------------------------------------
// 1-----
const jsSection01 = document.getElementById("sec01");
const jsButton01 = document.getElementById("jsButton01");

function jsChange01() {
    if (jsSection01.classList.contains("spchange")) {
        jsSection01.classList.remove("spchange", "change01");
    } else if (jsSection01.classList.contains("change01")) {
        jsSection01.classList.add("spchange");
    } else {
        jsSection01.classList.toggle("change01");
    }
}

jsButton01.addEventListener("click", jsChange01);

// 2-----
const jsSection02 = document.getElementById("sec02");
const jsButton02 = document.getElementById("jsButton02");

function jsChange02() {
    jsSection02.classList.toggle("change02");
}

jsButton02.addEventListener("click", jsChange02);

// 3-----
const jsSection03 = document.getElementById("sec03");
const jsButton03 = document.getElementById("jsButton03");

function jsChange03() {
    jsSection03.classList.toggle("change03");
    jsButton03.classList.toggle("change02");
    // ボタンの色を変更するには、CSSで#jsButton03.change02と
    // 記載することで.change02が効く（change02だけでは効かない）。
}
jsButton03.addEventListener("click", jsChange03);

// -------------------------------------------------


