var nowIndex = 0;
var len = $('.lbt li').length;
var timer;
// 初始化入口函数
function init() {
  // 绑定事件
  bindEvent();
  // 自动轮播
  sliderAuto();
  // 切换效果
  container();
}
init();
function bindEvent() {
  // 按钮绑定事件
  $('.con-lbt-btn a').on('click', function () {
    // 获得按钮上的class类名
    var tar = $(this).attr('class');
    // 调用移动函数
    move(tar);
  });
  // 点击list按钮
  $('.con-lbt-list li').on('click', function () {
    // 获得当前点击li索引
    var i = $(this).index();
    // 调用移动函数
    move(i);
  });
  // 鼠标移入移出
  $('.con-lbt').on('mouseenter', function () {
    // 鼠标移入清除定时器
    clearTimeout(timer);
  }).on('mouseleave', function () {
    // 鼠标移走继续轮播
    sliderAuto();
  })
}
function sliderAuto() {
  clearTimeout(timer);
  // 自动轮播  延迟2s 向右轮播  相当于点击右键按钮
  timer = setTimeout(function () {
    move('right');
  }, 2000);
}
// 移动函数
function move(dir) {
  // 判断左右按钮
  if (dir == 'right' || dir == 'left') {
    // 方向是右  
    if (dir == 'right') {
      // 索引++  向后轮播
      nowIndex++;
      // 判断当前索引值   超出边界为0
      nowIndex = nowIndex > len - 1 ? 0 : nowIndex;
      // 向右切换一张  再次触发延迟向右展示下一张
      sliderAuto();
    } else {
      // 向前轮播
      nowIndex--;
      // 判断索引边界
      nowIndex = nowIndex < 0 ? len - 1 : nowIndex;
    }
  } else {
    // 如果是点击li小圆点  直接切换当前选中索引
    nowIndex = dir;
  }
  // 移动ul
  $('.lbt').css({
    'left': -nowIndex * 1226 + 'px'
  });
  // 每一张图片淡入淡出效果改变opacity
  $('.lbt li ').eq(nowIndex).animate({
    'opacity': 1
  }, 800);
  // 其他图片再将opacity变0
  $('.lbt li  ').not(nowIndex).css('opacity', 0);
  changeStyle();
}
// 切换选中小圆点
function changeStyle() {
  $('.active').removeClass('active');
  $('.con-lbt-list li').eq(nowIndex).addClass('active');
}






window.onload = function () {
  function $(id) {
    return document.getElementById(id);
  }
  //鼠标进   ----手机 电话卡
  $("category").onmouseover = function () {
    $("children").style.display = "block"
  }
  //鼠标出
  $("category").onmouseout = function () {
    $("children").style.display = "none"
  }
  //鼠标进   ----电视 盒子
  $("category1").onmouseover = function () {
    $("children1").style.display = "block"
  }
  //鼠标出
  $("category1").onmouseout = function () {
    $("children1").style.display = "none"
  }
  //鼠标进   ----笔记本 平板
  $("category2").onmouseover = function () {
    $("children2").style.display = "block"
  }
  //鼠标出
  $("category2").onmouseout = function () {
    $("children2").style.display = "none"
  }
  //鼠标进   ---- 家电 插线板
  $("category3").onmouseover = function () {
    $("children3").style.display = "block"
  }
  //鼠标出
  $("category3").onmouseout = function () {
    $("children3").style.display = "none"
  }
  //鼠标进   ---- 出行 穿戴
  $("category4").onmouseover = function () {
    $("children4").style.display = "block"
  }
  //鼠标出
  $("category4").onmouseout = function () {
    $("children4").style.display = "none"
  }
  //鼠标进   ---- 智能 路由器
  $("category5").onmouseover = function () {
    $("children5").style.display = "block"
  }
  //鼠标出
  $("category5").onmouseout = function () {
    $("children5").style.display = "none"
  }
  //鼠标进   ---- 电源 配件
  $("category6").onmouseover = function () {
    $("children6").style.display = "block"
  }
  //鼠标出
  $("category6").onmouseout = function () {
    $("children6").style.display = "none"
  }
  //鼠标进   ---- 健康 儿童
  $("category7").onmouseover = function () {
    $("children7").style.display = "block"
  }
  //鼠标出
  $("category7").onmouseout = function () {
    $("children7").style.display = "none"
  }
  //鼠标进   ---- 耳机 音响
  $("category8").onmouseover = function () {
    $("children8").style.display = "block"
  }
  //鼠标出
  $("category8").onmouseout = function () {
    $("children8").style.display = "none"
  }
  //鼠标进   ---- 生活 箱包
  $("category9").onmouseover = function () {
    $("children9").style.display = "block"
  }
  //鼠标出
  $("category9").onmouseout = function () {
    $("children9").style.display = "none"
  }
}
function  container(){
 //找到选像卡列表的父容器
var tabList = document.getElementsByClassName("tab-list")[0];
//获取到下面的所有要点击切换的选项卡
var btnslist = tabList.getElementsByTagName("li");
//获取内容显示区域的父容器
var tabList_box = document.getElementsByClassName("tab-container")[0];
//在获取到下面的每一个要显示内容的盒子
var aLi1 = tabList_box.getElementsByClassName("brick-list");
//循环所有的选项卡
for(var i = 0; i < btnslist.length; i ++){
  //给每一个要点击的按钮标记一个序号
  btnslist[i].index = i;
  //添加点击事件
  btnslist[i].onmouseover = function() {
    //初始化每个li 的默认样式包括css里面写的
    for(var i = 0; i < btnslist.length; i++) {
      //清除每个选项卡的样式class 因为第一个我们开始添加类
      btnslist[i].className = '';
      //为当前点击的选项卡添加样式 首先准备一个class样式  例如active 这里例子只是添加下边框
      this.className = 'tab-active';
      //上面记录了每个选项卡的标记 下面要显示内容的盒子和选项卡是一样多的
      //此时 我们只需要将所有的mian1隐藏起来
      aLi1[i].style.display = 'none';
    }
    //再将当前点击选项卡对应的内容区域显示出来
    aLi1[this.index].style.display = "block"   // this当前作用的对象
  }
}
}
