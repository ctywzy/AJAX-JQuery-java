package Controller;

import Dao.DBUtil;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class AJAXServer extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        try{
            //编码
            response.setContentType("text/html;charset=UTF-8");
            //html输出定义
            PrintWriter out = response.getWriter();
            //获取参数
            String old = request.getParameter("name");
            String name = new String(old.getBytes("ISO-8859-1"),"UTF-8");
            //数据库操作
            DBUtil jdbc = new DBUtil();
            String sql = "select * from xka where name = ?";
            System.out.println(name);
            PreparedStatement ps = jdbc.SetPs(sql);
            ps.setString(1,name);
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
                do{
                    out.println("该用户已经存在");
                }while(rs.next());
            }else{
                out.println("该用户不存在");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        //更改请求方式
        doPost(request, response);
    }
}
