$(function () {
  let pro = $(".profile_m li").length;
  let m = 0;
  let play_m;

  start();

  function pfslideM() {
    $(".profile_m")
      .stop()
      .animate({ "margin-left": -100 + "%" }, function () {
        $(".profile_m li").eq(0).appendTo(".profile_m");
        $(".profile_m").css({ "margin-left": "0" });
      });
  }
  function pfslideM2() {
    $(".profile_m li").last().prependTo(".profile_m");
    $(".profile_m").css({ "margin-left": "-100%" });
    $(".profile_m").stop().animate({ "margin-left": "0" });
  }

  function start() {
    play_m = setInterval(function () {
      if (m == pro - 1) {
        m = 0;
      } else {
        m++;
      }
      pfslideM();
    }, 3000);
  }
  function start2() {
    play_m2 = setInterval(function () {
      if (m == 0) {
        m = pro - 1;
      } else {
        m--;
      }
      pfslideM2();
    }, 3000);
  }

  $(".next").on("click", function () {
    clearInterval(play_m);
    if (m == pro - 1) {
      m = 0;
    } else {
      m++;
    }
    pfslideM();
    start();
  });

  $(".prev").on("click", function () {
    clearInterval(play_m);
    if (m == 0) {
      m = pro - 1;
    } else {
      m--;
    }
    pfslideM2();
    start();
  });
});
