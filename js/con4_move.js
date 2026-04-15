$(function () {
  //섹션4 슬라이드
  let tot = $(".profile li").length;
  let a = 0;
  let play;

  start2();

  function slide() {
    $(".animal_list")
      .stop()
      .animate({ "margin-left": "-200px" }, function () {
        $(".animal_list li").eq(0).appendTo(".animal_list");
        $(".animal_list").css({ "margin-left": "0" });
      });
    $(".profile")
      .stop()
      .animate({ "margin-left": -100 + "%" }, function () {
        $(".profile li").eq(0).appendTo(".profile");
        $(".profile").css({ "margin-left": "0" });
      });

    //모바일
    $(".animal_laptop")
      .stop()
      .animate({ "margin-left": "-200px" }, function () {
        $(".animal_laptop li").eq(0).appendTo(".animal_laptop");
        $(".animal_laptop").css({ "margin-left": "0" });
      });
  }

  function slide2() {
    $(".animal_list li").last().prependTo(".animal_list");
    $(".animal_list").css({ "margin-left": "-200px" });
    $(".animal_list").stop().animate({ "margin-left": "0" });
    $(".profile li").last().prependTo(".profile");
    $(".profile").css({ "margin-left": "-100%" });
    $(".profile").stop().animate({ "margin-left": "0" });

    //모바일
    $(".animal_laptop li").last().prependTo(".animal_laptop");
    $(".animal_laptop").css({ "margin-left": "-200px" });
    $(".animal_laptop").stop();
  }

  function start2() {
    play = setInterval(function () {
      if (a == tot - 1) {
        a = 0;
      } else {
        a++;
      }
      slide();
    }, 4000);
  }

  $(".next").on("click", function () {
    clearInterval(play);
    if (a == tot - 1) {
      a = 0;
    } else {
      a++;
    }
    slide();
    start2();
  });

  $(".prev").on("click", function () {
    clearInterval(play);
    if (a == 0) {
      a = tot - 1;
    } else {
      a--;
    }
    slide2();
    start2();
  });
});
