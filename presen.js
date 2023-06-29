//'use strict'

const toggleButton = document.getElementById('toggleButton');
const seikai = document.getElementById('seikai');

let isVisible = false;

toggleButton.addEventListener('click', function() {
  if (isVisible === false) {  
    seikai.style.display = 'block';
    toggleButton.textContent = '表示は正解　⇒　つくったやつへ'; // ボタンの表示名を変更
    isVisible = true;
  } else {    
    seikai.style.display = 'none';   
    toggleButton.textContent = '表示はつくったやつ　⇒　正解へ'; // ボタンの表示名を変更
    isVisible = false;
  }
});


//   const playButton1 = document.getElementById('playButton1');
//   const videoPlayer = document.getElementById('videoPlayer');

//   let isPlaying = false; // 再生状態を管理するフラグ

//   playButton1.addEventListener('click', function() {
//     if (isPlaying === true) {
//       videoPlayer.style.display = 'none'; // 映像を非表示
//       videoPlayer.pause(); // 映像を停止
//       isPlaying = false; // 再生状態を更新
//     } else {
//       videoPlayer.style.display = 'block'; // 映像を表示
//       videoPlayer.play(); // 映像を再生
//       isPlaying = true; // 再生状態を更新
//     }
//   });

// const clickableImages = document.getElementsByClassName('clickable-image');
// let currentImageIndex = 0;

// // 画像がクリックされた時の処理
// function changeImage() {
//   // 現在の画像を非表示にする
//   clickableImages[currentImageIndex].style.display = 'none';

//   // インデックスを更新して次の画像を表示する
//   currentImageIndex = (currentImageIndex + 1) % clickableImages.length;
//   clickableImages[currentImageIndex].style.display = 'block';
// }

// // 画像にクリックイベントを追加
// for (let i = 0; i < clickableImages.length; i++) {
//   clickableImages[i].addEventListener('click', changeImage);
// }

// // 最初の画像を表示する
// clickableImages[currentImageIndex].style.display = 'block';

// // ボタンをクリックしたら最初の画像に戻る
// const resetButton = document.getElementById('resetButton');
// resetButton.addEventListener('click', function() {
//   clickableImages[currentImageIndex].style.display = 'none'; // 現在の画像を非表示にする
//   currentImageIndex = 0; // インデックスを初期化
//   clickableImages[currentImageIndex].style.display = 'block'; // 最初の画像を表示する
// });



