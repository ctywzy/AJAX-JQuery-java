//做到一进入页面就从服务器端获取数据，进行数据交互

//这个obj是返回的json数据对象
var obj;
var stockid;
$(document).ready(function () {
    //一开始隐藏标签
    var StockNode = $("#stock");//div框
    StockNode.hide();
    GetInfo();
    var labela = $("a");
    //给a节点注册鼠标经过事件
    labela.mouseover(function (event) {

        var aobj = $(this);
        var divobj = aobj.parent();
        var divid = divobj.attr("id");
        update();

        if(divid=="stockone"){
            stockid = "1001";
        }else{
            stockid = "1002";
        }

        /*var offset = aobj.offset();
        StockNode.css("left",offset.left+"px").css("top",offset.top+aobj.height()+"px");
        */
        var myEvent = event || window.event;

        StockNode.css("left",myEvent.clientX+15+"px").css("top",myEvent.clientY+5+"px");


        StockNode.show();


    })
    //注册鼠标离开事件
    labela.mouseout(function () {
        StockNode.hide();
    })
    setInterval(GetInfo,1000);

})
//声明每次刷新中的函数
function GetInfo() {
    $.get("GetStockInfo",null,function (data) {
        //将获取的xml转换为javascript类型的值
        obj = eval(data);
        //JavaScript去参数
        var sone = obj['1001'];
        var stwo = obj['1002'];

        /*JavaScript遍历
        *for(var stock in obj){
        *     stock = obj[stockid];
        * }
        * */
        /*
        $("#id名")更具标签id获取标签节点
         */
        //通过id获取标签节点，然后更具id修改其中子节点sapn中的值
        $("#stockone").children("span").html(sone.now);
        if(sone.now>sone.yesterday){
           $("#stockone").children("span").css("color","red");
        }else{
            $("#stockone").children("span").css("color","green");
        }
        $("#stocktwo").children("span").html(stwo.now);
        if(stwo.now>stwo.yesterday){
            $("#stocktwo").children("span").css("color","red");
        }else{
            $("#stocktwo").children("span").css("color","green");
        }
        //3。每隔5秒种和服务器交互一次，不用手动刷新消息，自动实时刷新

        update();
    })
}

//更新函数
function update(){
    var stockobj = obj[stockid];//json数据对象

    //JQuery中的attr方法可以返回当前标签的id值
    for(var stockname in stockobj){
        if(stockname != "name"){
            $("#"+stockname).children("span").html(stockobj[stockname]);
        }
    }
}




