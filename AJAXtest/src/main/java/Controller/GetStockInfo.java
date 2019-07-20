package Controller;

import bean.Stock;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

/*
获得当前的股票信息
 */
@WebServlet(name = "GetStockInfo")
public class GetStockInfo extends HttpServlet {
    private HashMap<String, Stock> stocks = new HashMap<String, Stock>();
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //1搞个随机数
        response.setContentType("text/html;charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        double a = Math.random() * 15;
        double b = Math.random() * 15;
        int c = (int)(Math.random() * 10);
        int d = (int)(Math.random() * 10);
        boolean x = (c % 2 == 0);
        boolean y = (d % 2 == 0);
        Stock sone = stocks.get("1001");
        Stock stwo = stocks.get("1002");
        //2将股票和当前价格进行操作
        double temp;
        if(x){
            temp = sone.getNow() + a;
        }else{
            temp = sone.getNow() - a;
        }
        sone.setNow(temp);
        if(y){
            temp = stwo.getNow() + b;
        }else{
            temp = stwo.getNow() - b;
        }
        stwo.setNow(temp);
        PrintWriter out = response.getWriter();
        //3.返回股票昨天价格，今天开盘价格，当前价格

        /*out.println(sone.toString());
        out.println("</br>");
        out.println(stwo.toString());*/
        //采用json的数据格式返回股票信息
        StringBuilder str1 = new StringBuilder();
        /*数组方式*/
        /*str1.append("[{name:\"").append(sone.getName()).append("\",id:\"").append(sone.getId())
                .append("\",yesterday:").append(sone.getYesterday()).append(",today:").append(sone.getToday())
                .append(",now:").append(sone.getNow()).append("}")
                .append("{name:\"").append(stwo.getName()).append("\",id:\"").append(stwo.getId())
                .append("\",yesterday:").append(stwo.getYesterday()).append(",today:").append(stwo.getToday())
                .append(",now:").append(stwo.getNow()).append("}]");*/
        /*对象方式*/
        str1.append("({\"").append(sone.getId()).append("\":{name:\"").append(sone.getName()).append("\"")
                .append(",yesterday:").append(sone.getYesterday()).append(",today:").append(sone.getToday())
                .append(",now:").append(sone.getNow())
                .append("},\"").append(stwo.getId()).append("\":{name:\"").append(stwo.getName()).append("\"")
                .append(",yesterday:").append(stwo.getYesterday()).append(",today:").append(stwo.getToday())
                .append(",now:").append(stwo.getNow()).append("}})");
        out.println(str1.toString());
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    public void init(ServletConfig config) throws ServletException {
        Stock sone = new Stock(1000,1000,"北大","1001");
        Stock stwo = new Stock(1000,1000,"清华","1002");
        stocks.put(sone.getId(),sone);
        stocks.put(stwo.getId(),stwo);
    }
}
