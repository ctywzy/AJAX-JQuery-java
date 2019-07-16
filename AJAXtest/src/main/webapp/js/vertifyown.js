//用户名校验
//使用XMLHttpRequest对象来进行AJAX的异步数据交互
var xmlhttp;
function verifyown() {
    //1.使用dom的方式获取文本框中的值
    //document.getElementById()
    var username = document.getElementById("username").value;

    //2.创建XMLHttpRequest对象
    //这是XMLHttpRequest对象使用中最复杂的异步
    //需要针对IE和其他类型的浏览器创建这个对象的不同方式写不同代码
    if(window.XMLHttpRequest){//这个写在前面可以应付更多的浏览器
        //针对FireFox，Mozillar，Opera，Safari，IE7+

        xmlhttp = new XMLHttpRequest();
        //针对某些特定版本的mozillar浏览器的BUG进行修正
        if(xmlhttp.overrideMimeType){
            xmlhttp.overrideMimeType("text/xml");
        }
    }else if(window.ActiveXObject){
        //针对IE6，IE5.5，IE5
        //两个可以用于创建XMLHttpRequest对象的控件名，保存在一个js数组中
        //排在前面的版本较新
        var activexName = ["MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
        for(var i=0;i<activexName.length;i++){
            try{
                //取出一个控件名进行创建，创建成功循环终止
                //如果创建失败，会抛出异常，然后可以继续循环，继续尝试创建
                xmlhttp = new ActiveXObject(activexName[i]);
                break;
            }catch (e) {

            }
        }
    }
    //程序的健壮性，判断XMLHttpRequest对象是否创建成功
    if(!xmlhttp){
        alert("XMLHttpRequest对象创建失败！！");
        return ;
    }else{
        //alert(xmlhttp);
    }
    //3.注册回掉函数
    //回调函数就写函数名，不加括号,因为我们需要将函数名注册
    //如果加上括号，就会把函数的返回值注册上，这是错误的
    xmlhttp.onreadystatechange = callback;

    //4.设置连接信息
    //第一个参数表示http请求方式，支持所有方式
    //第二个参数表示请求的url地址，get方式请求的参数也在url中
    //第三个参数表示用异步还是同步方式交互，true表示异步

    //GET请求写法
    //xmlhttp.open("GET","AJAXServer?name=" + username,true );

    //POST请求写法
    xmlhttp.open("POST","AJAXServer",true);
    xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //alert(username);
    xmlhttp.send("name="+username);
    //5.发送数据，开始和服务器端进行交互
    //同步方式下，send这句话会在服务器端数据回来后才执行
    //异步方式下，send这句话会立即执行
    //GET的send写法
    //xmlhttp.send(null)
}

//回调函数
function callback() {
    //alert(xmlhttp.readyState);
    //alert(xmlhttp.status);
    //6.接收数据响应，判断对象的状态是否交互完成
    if(xmlhttp.readyState == 4){
        //判断http的交互是否成功
        if(xmlhttp.status == 200){
            //获取服务器端返回的数据
            //获取服务器端输出的纯文本数据
            var responseText = xmlhttp.responseText;
            //alert(responseText);
            //将数据显示在页面上
            //通过dom的方式找到div标签所对应的元素节点
            var divNode = document.getElementById("result")
            divNode.innerHTML = responseText;
        }else{
            alert("出错了");
        }
    }
}