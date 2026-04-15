$(function () {
  $(window).on("scroll", function () {
    let pos = $(this).scrollTop();
    if (pos >= 100) {
      $("header").addClass("hd_on");
    } else {
      $("header").removeClass("hd_on");
    }
  });

  //아래 얘는 섹션1의 슬라이드임.
  setInterval(function () {
    $(".con1_slide")
      .stop()
      .animate({ "margin-left": -300 + "px" }, 1000, function () {
        $(".con1_slide li").eq(0).appendTo(".con1_slide");
        $(".con1_slide").css({ "margin-left": "0" });
      });
  }, 2000);

  // 섹션2 스크롤 이벤트
  let con2 = $(".con2").offset().top;
  let con3 = $(".con2").offset().top;
  $(window).on("scroll", function () {
    pos2 = $(this).scrollTop();
    if (pos2 >= con2 - 800 && pos2 <= con3 + 800) {
      $(".report").removeClass("con2_on");
      $(".report").addClass("con2_on");
    } else {
      $(".report").removeClass("con2_on");
    }
  });

  let s1 = $(".slide1").offset().top;
  let s2 = $(".slide2").offset().top;
  let s3 = $(".slide3").offset().top;
  let s4 = $(".slide4").offset().top;
  let c4 = $(".con4").offset().top;

  $(window).on("scroll", function () {
    cs = $(this).scrollTop();
    // console.log(pos2);
    if (cs >= s1 && cs <= s2) {
      $(".imgwrap li").removeClass("up");
    } else if (cs > s2 && cs <= s3) {
      $(".imgwrap li").removeClass("up");
      $(".imgwrap li").eq(1).addClass("up");
    } else if (cs > s3 && cs <= s4) {
      $(".imgwrap li").removeClass("up");
      $(".imgwrap li").eq(1).addClass("up");
      $(".imgwrap li").eq(2).addClass("up");
    } else if (cs > s4) {
      $(".imgwrap li").removeClass("up");
      $(".imgwrap li").eq(1).addClass("up");
      $(".imgwrap li").eq(2).addClass("up");
      $(".imgwrap li").eq(3).addClass("up");
    }
  });
});
