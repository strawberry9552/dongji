$(function () {
  // 얘는 메인비주얼(히어로비주얼) 슬라이드
  let total = $(".slide-img li").length;
  let i = 0; //순번
  let interval; //외부에서 선언되어 프로그램 전체 영역에서 접근 및 수정이 가능한 변수 : 전역변수
  start();

  function fade() {
    $(".slide-img li").removeClass("bg_on");
    $(".slide-img li").eq(i).addClass("bg_on");
    $(".page li").removeClass("page_on");
    $(".page li").eq(i).addClass("page_on");
  }

  function start() {
    interval = setInterval(function () {
      if (i == total - 1) {
        //이미지슬라이드 순번이 1일 때 i는 0이여야하므로 -1
        i = 0;
        //암튼 이미지가 끝나서 0이 될때는 다시 0번째로 돌아가거라
      } else {
        i++;
        //그런거 아니면 계속 나와랏
      }
      fade();
    }, 4000);
  }

  $(".slide_dot .s_left").on("click", function () {
    clearInterval(interval);
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
      //뒤로 밑장빼기
    }
    fade();
    start();
  });

  $(".slide_dot .s_right").on("click", function () {
    clearInterval(interval);
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    fade();
    start();
  });

  $(".page li").on("click", function () {
    clearInterval(interval);
    i = $(this).index();
    fade();
    start();
  });
});
