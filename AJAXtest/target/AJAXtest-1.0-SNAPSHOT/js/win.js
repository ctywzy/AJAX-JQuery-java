//显示浮动窗口

//说白了就是一个在最前面的方框标签

function showindow(){
    //alert("窗口");
    //通过id获取节点
    var winobj = $("#win");
  //  winobj.css("display","block");

    //给窗口加上一些动画
    //用的时候要先把其他的注释掉

    winobj.show("slow");


}

function hide() {
    var clobj = $("#win");

    clobj.hide("slow");

    clobj.fadeOut("slow");
}