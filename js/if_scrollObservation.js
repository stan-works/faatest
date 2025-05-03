// 対象の要素を全て取得（共通のクラス名がついている要素）
const allTarget = document.querySelectorAll(".target");

//　要素がビューポート内に入っているかどうか確認してクラスと付け外しを行う関数
function observation() {
    // 取得した全ての対して処理を繰り返すためにforEach関数を使って処理する
    allTarget.forEach(function (target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与

            // 画面に入った要素にleftINというクラスが付いていた場合とそうでない場合の分岐
            if (target.classList.contains("leftIn")) {
                target.classList.add("animate__slideInLeft");

                // leftINはついていないが、centerInが付いていた場合とそうでない場合の分岐
            } else if (target.classList.contains("centerIn")) {
                target.classList.add("animate__slideInUp");

                // leftINもcenterInも付いていなかった時の分岐
            } else {
                target.classList.add("animate__slideInRight");
            }
        } else {
            // 画面外に出た場合、クラスを除去。上記のif文で出てきた全てのクラス名を記載。すべてを消す。
            target.classList.remove(
                "animate__slideInLeft",
                "animate__slideInRight",
                "animate__slideInUp"
            );
        }
    });
}

// スクロールイベントを追加
window.addEventListener("scroll", observation);
