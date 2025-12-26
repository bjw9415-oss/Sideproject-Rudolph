// 루돌프 요소 가져오기
const rudolph = document.getElementById("rudolph");

// 현재 위치 값 (px 단위)
let posX = 0;
let posY = 200;

// 이동 속도
const speed = 10;

// 키 눌렀을 때
document.addEventListener("keydown", (e) => {
  // 걷는 상태 ON
  rudolph.classList.add("walking");

  switch (e.key) {
    case "ArrowRight":
      posX += speed; // 오른쪽 이동
      break;

    case "ArrowLeft":
      posX -= speed; // 왼쪽 이동
      break;

    case "ArrowUp":
      posY -= speed; // 위로 이동
      break;

    case "ArrowDown":
      posY += speed; // 아래로 이동
      break;
  }

  // 화면에 적용
  rudolph.style.left = posX + "px";
  rudolph.style.top = posY + "px";
});

// 키 떼면 멈춤
document.addEventListener("keyup", () => {
  rudolph.classList.remove("walking");
});

// id가 "snow"인 HTML 요소를 가져온다
// getElementById = "아이디로 요소를 가져온다"
const snowcontainer = document.getElementById("snow");

/*
  눈 하나를 만들어서 떨어뜨리는 함수
  function = "기능 묶음"
*/
// 눈송이 생성 함수
function createSnowflake() {
  // 새로운 div 요소를 만든다
  // createElement = "HTML 태그를 새로 생성"
  const snowflake = document.createElement("div");
  // snowflake 요소에 class="snowflake"를 추가
  // classList.add = "클래스 추가"
  snowflake.classList.add("snowflake");
  // Math.random() = 0 이상 1 미만의 랜덤 숫자
  // 눈 크기를 랜덤으로 설정
  snowflake.innerText = "❄️";
  const size = Math.random() * 5 + 2; // 2px ~ 7px
  // style.width = CSS width 설정

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  // 눈이 떨어지는 속도 (랜덤)
  const fallspeed = Math.random() * 0.01 + 1; // 2s ~ 5s
  let positionY = 0;
  snowflake.style.animationDuration = fallspeed + "s";

  // snow 컨테이너 안에 눈을 추가
  // appendChild = "자식 요소로 추가"
  snowcontainer.appendChild(snowflake);

  /*
    setInterval = 일정 시간마다 반복 실행
    16ms ≈ 1초에 60번 (부드러운 애니메이션)
  */
  const fallInterval = setInterval(() => {
    positionY += fallspeed; // y 위치 증가
    snowflake.style.top = positionY + "px"; // 위치 적용
    // 화면 아래로 벗어나면 제거
    if (positionY > window.innerHeight) {
      clearInterval(fallInterval); // 반복 중지
      snowcontainer.removeChild(snowflake); // 요소 제거
    }
  });
}

setInterval(createSnowflake, 200); // 200ms마다 눈송이 생성
