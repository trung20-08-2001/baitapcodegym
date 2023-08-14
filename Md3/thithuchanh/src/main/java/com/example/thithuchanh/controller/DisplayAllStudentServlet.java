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
import java.util.List;

@WebServlet("/home")
public class DisplayAllStudentServlet extends HttpServlet {
    StudentDAO studentDAO=new StudentDAO();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Student> studentList=studentDAO.getAllStudent();
        RequestDispatcher dispatcher=req.getRequestDispatcher("/index.jsp");
        req.setAttribute("studentList",studentList);
        dispatcher.forward(req,resp);
    }
}
