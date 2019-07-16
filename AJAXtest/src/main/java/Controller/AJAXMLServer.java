package Controller;

import Dao.DBUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
//已xml的形式返回值，通过script中的XMLHttpRequest对象去解析获取值
@WebServlet(name = "AJAXMLServer")
public class AJAXMLServer extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try{
            //Content-Type修改成text/xml
            response.setContentType("text/xml;charset=UTF-8");
            String old = request.getParameter("name");
            System.out.println(old);
            //ISO-8859-1
            String name = new String(old.getBytes("UTF-8"),"UTF-8");
            System.out.println(name);
            DBUtil jdbc = new DBUtil();
            String sql = "select * from xka where name = ?";
            PreparedStatement ps = jdbc.SetPs(sql);
            ps.setString(1,name);
            ResultSet rs = ps.executeQuery();

            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("<message>");
            if(rs.next()){
                do{
                    stringBuilder.append("用户名已存在");
                }while(rs.next());
            }else{
                stringBuilder.append("用户名不存在");
            }
            stringBuilder.append("</message>");
            PrintWriter out = response.getWriter();
            out.println(stringBuilder.toString());
            System.out.println(stringBuilder.toString());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
