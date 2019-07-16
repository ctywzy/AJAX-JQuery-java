function verify() {
    var username = $("#username").val();
    //javascript中的对象写法
    var obj = {name:"123",age:20};
    //json的数据类类型也是像这个样子
    $.ajax({
        type:"POST", //请求方式
        url:"AJAXMLServer", //服务器地址
        data: "name="+username, //传输数据
        dateType: "xml" ,//告诉JQuery返回数据格式
        success: callback //交互完成后，并且服务器接收返回数据时调用的回调含糊
    })
}

//回调
function callback(data) {
    //文本格式解析
    // var obj = $("result“）；
    //obj.html(date);


    //xml格式解析
    var obj = $(data);
    //通过查阅jquery手册发现直接用$.(”div").childern("标签名或id均可")；

    //先取子节点
    var XMLchild = obj.children();

    //取文本内容

    var text = XMLchild.text();

    //再首界面置留的div中显示
    var resultobj = $("#result");
    resultobj.html(text);




}

