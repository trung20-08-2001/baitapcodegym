package com.example.thithuchanh.controller;

import com.example.thithuchanh.dao.StudentDAO;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/delete")
public class DeleteServlet extends HelloServlet{
    StudentDAO studentDAO =new StudentDAO();

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        int id=Integer.parseInt(request.getParameter("id"));
        studentDAO.delete(id);
        response.sendRedirect("/home");
    }
}
