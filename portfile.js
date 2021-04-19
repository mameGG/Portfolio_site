'use strict';

// アコーディオンメニュー------
const menu = document.querySelectorAll(".js-menu");//全てのjs-menu要素を取得
 
function toggle() {
  const content = this.nextElementSibling;
  this.classList.toggle("is-active");
  content.classList.toggle("is-open");
}
 
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", toggle);
 }

// --------アコーディオンメニュー


