'use strict';

// アコーディオンメニュー------

const menu = document.querySelectorAll(".js-menu");//全てのjs-menu要素を取得
 
function toggle() {      //関数toggle
  const content = this.nextElementSibling;   
  // contentに代入。this=.js-menuを指し、js-menuの次の要素。
  // つまりthis.nextElementSibling＝.contentsクラス＝content
  this.classList.toggle("is-active");
  // js-menuをクリックしたら.is-activeクラスを指定or取り外し
  content.classList.toggle("is-open");
  // 上のcontent=contentsクラスをクリックしたらis-openクラスを指定or取り外し
}
 
for (let i = 0; i < menu.length; i++) {
  // menuクラス分だけ、今回だと0、1、2の三回処理を実行
  menu[i].addEventListener("click", toggle);
  // 0、1、2つ目のmenuクラスをクリックしたとき、関数toggleを呼び出して実行
 }

// --------アコーディオンメニュー


