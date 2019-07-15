package Dao;

import java.sql.*;

public class DBUtil {
    private static final String UserName = "root";
    //数据库密码
    private static final String Password = "123456";
    //驱动信息
    private static final String Driver = "com.mysql.jdbc.Driver";
    //数据库地址
    private static final String URL = "jdbc:mysql://localhost:3306/ajaxmysql";
    //数据库连接
    private static Connection conn = null;
    //sql语句编译运行
    private static PreparedStatement ps = null;
    //查询结果集
    private static ResultSet rs = null;
    private ResultSetMetaData rst = null;

    //静态加载驱动
    static {
        try{
            Class.forName(Driver);
            System.out.println("数据库驱动加载正常");
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("数据库驱动加载异常");
        }
    }

    public Connection GetConn(){
        try{
            conn = DriverManager.getConnection(URL,UserName,Password);
            System.out.println("数据库连接成功！");
        }catch(SQLException e){
            e.printStackTrace();
            System.out.println("数据库连接异常！");
        }

        return conn;
    }

    //加载sql语句
    public PreparedStatement SetPs(String sql){
        GetConn();//调用类中的连接方法，编译sql语句，并返回运行结果
        try{
            ps = conn.prepareStatement(sql);
            System.out.println("加载sql语句成功");
        }catch (SQLException e){
            e.printStackTrace();
            System.out.println("加载sql语句异常");
        }
        return ps;
    }

    //关流
    public static void CloseAll(){
        boolean flag = true;
        if(rs!=null){
            try{
                rs.close();
            }catch (SQLException e){
                flag = false;
                System.out.println("查询结果集关闭失败！");
                e.printStackTrace();
            }
        }
        if(ps!=null){
            try{
                ps.close();
            }catch(SQLException e){
                flag = false;
                e.printStackTrace();
                System.out.println("语句对象关闭异常！");
            }
        }
        if(conn!=null){
            try{
                conn.close();
            }catch (SQLException e){
                flag = false;
                e.printStackTrace();
                System.out.println("语句对象关闭异常！！");
            }
        }
        if(flag){
            System.out.println("数据库连接已关闭");
        }

    }
}
