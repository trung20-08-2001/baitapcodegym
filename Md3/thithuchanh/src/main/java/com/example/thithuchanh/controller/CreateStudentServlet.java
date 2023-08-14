package com.example.thithuchanh.controller;

import com.example.thithuchanh.dao.StudentDAO;
import com.example.thithuchanh.model.Student;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@WebServlet("/create")
public class CreateStudentServlet extends HttpServlet {
    StudentDAO studentDAO=new StudentDAO();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        DateTimeFormatter formatter=DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String name=req.getParameter("name");
        String email=req.getParameter("email");
        LocalDate birthday=LocalDate.parse(req.getParameter("birthday"),formatter);
        String address=req.getParameter("address");
        String phone =req.getParameter("phone");
        int idClass= Integer.parseInt(req.getParameter("class"));
        studentDAO.saveStudent(new Student(0,idClass,"A",name,address,birthday,email,phone));
        resp.sendRedirect("/home");
    }
}
