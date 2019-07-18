/*
点击主菜单按钮，显示出下面的菜单
 */

/*
    思路，给主菜单添加onclick方法
    点击以后把display的属性由none改为block
 */

/*
    使用注册函数的方法
 */

/*
    标签不加#
    id加#
 */
$(document).ready(function () {
    //先找到所有主菜单
    //然后给猪才点注册点击事件
    var ulobj = $("ul > a");
    //var ulobj = $("ul").childern("a");
    alert(ulobj);
    ulobj.click(function () {
        //找到当前ul中的li

        //获取当前被点击的ul节点
        var ulnode = $(this);
        //找到当前ul节点的子节点
        var lis = ulnode.nextAll("li");
        //var lis = ulnode.children("li");
        lis.toggle("show");

    })
    $("li > a").click(function () {
        $("#content").load($(this).attr("id"));
    })

})