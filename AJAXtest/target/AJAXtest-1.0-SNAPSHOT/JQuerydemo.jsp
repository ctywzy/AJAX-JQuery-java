<%--
  Created by IntelliJ IDEA.
  User: F
  Date: 2019-07-17
  Time: 20:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/win.js"></script>
    <link type="text/css" rel="stylesheet" href="css/style.css" />
    <title>JQuerydemo</title>
</head>
<body>
    <a href="#"  onclick="showindow()">显示浮动窗口</a>

    <div id="win">
        <div id="title">我是标题栏         <span id="close" onclick="hide()">X</span>  </div>
        <div id="content">这是一个会动的窗口</div>
    </div>
</body>
</html>
