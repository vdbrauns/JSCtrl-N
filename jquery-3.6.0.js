// меню ctrl//
$(document).ready(function(){
  $(".butt").click(function(){
    $(".myModal").toggleClass("showover");
  })
})

// открытие файла вируса
$(document).ready(function(){
  $(".virus12").click(function(){
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
