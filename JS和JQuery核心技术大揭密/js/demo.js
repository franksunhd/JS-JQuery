
/********************第一个js代码**********************/
function test(){
  alert("我是一个按钮");
};

//onload 是指页面加载完毕之后
onload = function(){
  document.getElementById("btn").onclick = function(){
    alert("我是外部按钮!");
  }
  
}







/*******************轮播图代码*********************/
var i = 0;
var timer;
$(function(){
  $(".igs").hover(function(){
    $(".btn").show();
  },function(){
    $(".btn").hide();
  });
  // 开始默认第一张图片显示，其余图片隐藏
  $(".ig").eq(0).show().siblings().hide();
  showTime();
  //点击跳转到指定页
  $(".tab").click(function(){
    clearInterval(timer);
    i = $(this).index();
    show();
    showTime();
  });

  $(".btn1").click(function(){
    clearInterval(timer);//清除轮播
    if(i == 0)
    {
      i=6;
    }
    i--;
    show();
    showTime();
  });

  $(".btn2").click(function(){
    clearInterval(timer);//清除轮播
    if(i == 5)
    {
      i=-1;
    }
    i++;
    show();
    showTime();
  });
});

//封装背景图片切换和小标切换
function show(){
  // 每隔３秒下一张图片显示其余图片隐藏
  $(".ig").eq(i).fadeIn(600).siblings().fadeOut(600);
  $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}

//封装第一个和最后一个的轮播切换
function showTime(){
  timer　=　setInterval(function(){
    i++;
    if(i == 6){
      i=0;
    }
    show();
  },3000);
}



/**************定时器****************/
