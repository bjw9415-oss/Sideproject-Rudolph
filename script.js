// 루돌프 요소 선택
const rudolph = document.getElementById("rudolph");

// 시작 위치
let positionX = 0;

// 일정 시간마다 실행
setInterval(() => {
  positionX += 2; // 이동 속도

  // 화면 끝까지 가면 다시 처음으로
  if (positionX > window.innerWidth) {
    positionX = -100;
  }

  // 위치 적용
  rudolph.style.left = positionX + "px";
}, 16); // 약 60fps
