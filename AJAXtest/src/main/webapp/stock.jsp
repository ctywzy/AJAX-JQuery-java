<%--
  Created by IntelliJ IDEA.
  User: F
  Date: 2019-07-20
  Time: 20:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>股票演示</title>
    <link type="text/css"  rel="stylesheet" href="css/stock.css">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/stock.js"></script>
</head>
<body>
    <div id="stockone">
        <a href="#">
            清华指数
        </a>
        <span>

        </span>
    </div>

    <div id="stocktwo">
        <a href="#">
            北大指数
        </a>
        <span>

        </span>

    </div>

    <div id="stock">
        <div id="yesterday">昨天：<span></span></div>
        <div id="today">今天：<span></span></div>
        <div id="now">现在：<span></span></div>
    </div>
</body>
</html>
