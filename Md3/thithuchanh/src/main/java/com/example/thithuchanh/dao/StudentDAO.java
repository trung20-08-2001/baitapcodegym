package com.example.thithuchanh.dao;

import com.example.thithuchanh.model.Student;

import javax.servlet.RequestDispatcher;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class StudentDAO {

    final String GET_ALL_STUDENT = "" +
            " SELECT * FROM Student " +
            " JOIN class on Student.idClass=class.idClass ";

    final String SAVE_STUDENT=" " +
            "INSERT INTO Student (idClass,nameStudent,address,birthday,email,phone) VALUES (?,?,?,?,?,?) ";

    final String FIND_BY_ID= "" +
            " SELECT * FROM Student " +
            " JOIN  CLASS ON  Student.idClass=class.IDclass WHERE idStudent=? ";
    final String EDIT_STUDENT=" " +
            " UPDATE  Student SET idClass= ? ,nameStudent=? , address=? , birthday=? , email=? , phone=?" +
            " WHERE idStudent=? ";

    final String GET_ALL_STUDENT_BY_CLASS ="" +
            " SELECT * FROM Student " +
            " JOIN class on Student.idClass=class.idClass  " +
            " WHERE class.idclass=?";

    final String FIND_BY_NAME="" +
            " SELECT * FROM Student" +
            "            JOIN class on Student.idClass=class.idClass " +
            "            WHERE  nameStudent like ? ";
    public List<Student> getAllStudent() {
        List<Student> studentList = new ArrayList<>();
        try (Connection connection = Connect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(GET_ALL_STUDENT)) {
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int id = resultSet.getInt("idStudent");
                String nameClass = resultSet.getString("nameclass");
                String name = resultSet.getString("nameStudent");
                String address = resultSet.getString("address");
                LocalDate birthday = resultSet.getDate("birthday").toLocalDate();
                String email = resultSet.getString("email");
                String phone = resultSet.getString("phone");
                int idClass=resultSet.getInt("idClass");
                studentList.add(new Student(id,idClass,nameClass,name,address,birthday,email,phone));
            }
        } catch (SQLException e) {
            e.printStackTrace();

        }
        return studentList;
    }

    public void saveStudent(Student student){
        LocalDate date = student.getBirthday();
        java.sql.Date sqlDate = java.sql.Date.valueOf(date);
        try(Connection connection=Connect.getConnection();
        PreparedStatement preparedStatement=connection.prepareStatement(SAVE_STUDENT)){
            preparedStatement.setInt(1,student.getIdClass());
            preparedStatement.setString(2,student.getName());
            preparedStatement.setString(3,student.getAddress());
            preparedStatement.setDate(4,sqlDate);
            preparedStatement.setString(5,student.getEmail());
            preparedStatement.setString(6,student.getPhone());
            preparedStatement.execute();
        }catch (SQLException e){
            e.printStackTrace();
        }
    }

    public Student findById(int id){
        Student student=null;
        try(Connection connection=Connect.getConnection();
        PreparedStatement preparedStatement=connection.prepareStatement(FIND_BY_ID)){
            preparedStatement.setInt(1,id);
            ResultSet resultSet=preparedStatement.executeQuery();
            resultSet.next();
            String nameClass = resultSet.getString("nameclass");
            String name = resultSet.getString("nameStudent");
            String address = resultSet.getString("address");
            LocalDate birthday = resultSet.getDate("birthday").toLocalDate();
            String email = resultSet.getString("email");
            String phone = resultSet.getString("phone");
            int idclass=resultSet.getInt("idClass");
            student=new Student(id,idclass,nameClass,name,address,birthday,email,phone);
        }catch (SQLException e){
            e.printStackTrace();
        }
        return student;
    }


    public void edit(Student student){
        LocalDate date = student.getBirthday();
        java.sql.Date sqlDate = java.sql.Date.valueOf(date);
        try(Connection connection=Connect.getConnection();
        PreparedStatement preparedStatement=connection.prepareStatement(EDIT_STUDENT)){
            preparedStatement.setInt(1,student.getIdClass());
            preparedStatement.setString(2,student.getName());
            preparedStatement.setString(3,student.getAddress());
            preparedStatement.setDate(4,sqlDate);
            preparedStatement.setString(5,student.getEmail());
            preparedStatement.setString(6,student.getPhone());
            preparedStatement.setInt(7,student.getId());
            preparedStatement.execute();
        }catch (SQLException e){
            e.printStackTrace();
        }
    }

    public void delete(int id ){
        try(Connection connection=Connect.getConnection();
        PreparedStatement preparedStatement=connection.prepareStatement(" DELETE  FROM Student WHERE IdStudent=? ")){
            preparedStatement.setInt(1,id);
            preparedStatement.execute();
        }catch (SQLException e){
            e.printStackTrace();
        }
    }

    public List<Student> findByClass(int idClass){
        List<Student> studentList = new ArrayList<>();
        try (Connection connection = Connect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(GET_ALL_STUDENT_BY_CLASS)) {
            preparedStatement.setInt(1,idClass);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int id = resultSet.getInt("idStudent");
                String nameClass = resultSet.getString("nameclass");
                String name = resultSet.getString("nameStudent");
                String address = resultSet.getString("address");
                LocalDate birthday = resultSet.getDate("birthday").toLocalDate();
                String email = resultSet.getString("email");
                String phone = resultSet.getString("phone");
                studentList.add(new Student(id,idClass,nameClass,name,address,birthday,email,phone));
            }
        } catch (SQLException e) {
            e.printStackTrace();

        }
        return studentList;
    }

    public List<Student> findByName(String name){
        List<Student> studentList = new ArrayList<>();
        try (Connection connection = Connect.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(FIND_BY_NAME)) {
            preparedStatement.setString(1,"%"+name+"%");
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                int id = resultSet.getInt("idStudent");
                String nameClass = resultSet.getString("nameclass");
                String name2 = resultSet.getString("nameStudent");
                String address = resultSet.getString("address");
                LocalDate birthday = resultSet.getDate("birthday").toLocalDate();
                String email = resultSet.getString("email");
                String phone = resultSet.getString("phone");
                int idClass=resultSet.getInt("idclass");
                studentList.add(new Student(id,idClass,nameClass,name2,address,birthday,email,phone));
            }
        } catch (SQLException e) {
            e.printStackTrace();

        }
        return studentList;
    }
}
