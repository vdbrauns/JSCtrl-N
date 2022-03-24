$( function() {
$( ".draggable" ).draggable();
} );

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
      $(".framekorzina").toggleClass("showover1");
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
    $(".framegraf").toggleClass("showover2");
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
    $(".framepic").toggleClass("showover3")
  })
})
// блокнот
$(document).ready(function(){
  $(".note4").click(function(){
    $(".framenote").toggleClass("showover5");
  })
})
$(document).ready(function(){
  $(".close4").click(function(){
      $(".framenote").toggleClass("showover5");
  })
})

// ctrl
$(document).ready(function(){
  $(".ctrlp").click(function(){
    $(".framectrl").toggleClass("showover6");
  })
})

$(document).ready(function(){
  $(".close6").click(function(){
    $(".framectrl").toggleClass("showover6")
  })
})
// ctrl описание
$(document).ready(function(){
  $(".descriptionapp").click(function(){
    $(".frametextcn").toggleClass("showover7");
  })
})

$(document).ready(function(){
  $(".close7").click(function(){
    $(".frametextcn").toggleClass("showover7")
  })
})
// ctrl фото
$(document).ready(function(){
  $(".ctrlphoto").click(function(){
    $(".framephoto").toggleClass("showover8");
  })
})

$(document).ready(function(){
  $(".close8").click(function(){
    $(".framephoto").toggleClass("showover8")
  })
})
// ctrl опрос
$(document).ready(function(){
  $(".ctrlopros").click(function(){
    $(".frameopros").toggleClass("showover9");
  })
})

$(document).ready(function(){
  $(".close9").click(function(){
    $(".frameopros").toggleClass("showover9")
  })
})
