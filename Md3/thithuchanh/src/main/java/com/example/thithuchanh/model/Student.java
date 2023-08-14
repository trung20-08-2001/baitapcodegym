package com.example.thithuchanh.model;

import java.time.LocalDate;

public class Student {
    private  int id;

    private int idClass;
    private String nameClass;
    private String name;
    private String address;
    private LocalDate birthday;
    private String email;
    private String phone;

    public Student() {
    }

    public Student(int id, int idClass, String nameClass, String name, String address, LocalDate birthday, String email, String phone) {
        this.id = id;
        this.idClass = idClass;
        this.nameClass = nameClass;
        this.name = name;
        this.address = address;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameClass() {
        return nameClass;
    }

    public void setNameClass(String nameClass) {
        this.nameClass = nameClass;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getIdClass() {
        return idClass;
    }

    public void setIdClass(int idClass) {
        this.idClass = idClass;
    }
}
