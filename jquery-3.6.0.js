// меню ctrl//
$(document).ready(function(){
  $(".butt").click(function(){
    $(".myModal").toggleClass("showover");
  })
})

// открытие файла вируса
$(document).ready(function(){
  $(".notfound").click(function(){
    $("#desktop").css("display","none");
    $("#error").css("display","grid");
  })
})
// закрытие файла вирус
$(document).ready(function(){
  $(".dino").click(function(){
    $("#error").css("display","none");
    $("#desktop").css("display","grid");
  })
})

// корзина
$(document).ready(function(){
  $(".korzina").click(function(){
    $(".framekorzina").toggleClass("showover1");
  })
})
$(document).ready(function(){
  $(".close1").click(function(){
    $(".framekorzina").css("display","none");
    $("#desktop").css("display","grid");
  })
})

// фото 1
$(document).ready(function(){
  $(".picfile1").click(function(){
    $(".framegraf").toggleClass("showover2");
  })
})

$(document).ready(function(){
  $(".close2").click(function(){
    $(".framegraf").css("display","none");
    $("#desktop").css("display","grid");
  })
})
// фото 2
$(document).ready(function(){
  $(".picfile2").click(function(){
    $(".framepic").toggleClass("showover3");
  })
})

$(document).ready(function(){
  $(".close3").click(function(){
    $(".framepic").css("display","none");
    $("#desktop").css("display","grid");
  })
})
