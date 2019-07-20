//做到一进入页面就从服务器端获取数据，进行数据交互
$(document).ready(function () {
    GetInfo();
    setInterval(GetInfo,1000);

})
//声明每次刷新中的函数
function GetInfo() {
    $.get("GetStockInfo",null,function (data) {
        var obj = eval(data);
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
    })
}