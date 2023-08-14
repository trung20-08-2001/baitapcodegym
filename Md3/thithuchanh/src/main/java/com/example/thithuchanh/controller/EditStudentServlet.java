package com.example.thithuchanh.controller;

import com.example.thithuchanh.dao.StudentDAO;
import com.example.thithuchanh.model.Student;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@WebServlet("/edit")
public class EditStudentServlet extends HttpServlet {
    StudentDAO studentDAO=new StudentDAO();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher dispatcher=req.getRequestDispatcher("/edit.jsp");
        int id= Integer.parseInt(req.getParameter("id"));
        Student student=studentDAO.findById(id);
        req.setAttribute("student",student);
        dispatcher.forward(req,resp);
    }


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        DateTimeFormatter formatter=DateTimeFormatter.ofPattern("yyyy-MM-dd");
        int id=Integer.parseInt(req.getParameter("id"));
        String name=req.getParameter("name");
        String email=req.getParameter("email");
        LocalDate birthday=LocalDate.parse(req.getParameter("birthday"),formatter);
        String address=req.getParameter("address");
        String phone =req.getParameter("phone");
        int idClass= Integer.parseInt(req.getParameter("class"));
        studentDAO.edit(new Student(id,idClass,"a",name,address,birthday,email,phone));
        resp.sendRedirect("/home");
    }
}
