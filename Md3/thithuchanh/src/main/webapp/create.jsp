<%--
  Created by IntelliJ IDEA.
  User: trung
  Date: 7/5/2023
  Time: 9:54 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

<div class="container">
    <h2>Form Validation</h2>
    <p>In this example, we use <code>.was-validated</code> to indicate what's missing before submitting the form:</p>
    <form action="/create" class="was-validated">
        <div class="form-group">
            <label for="uname">Name:</label>
            <input type="text" class="form-control" id="uname" placeholder="Enter name" name="name" required>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div class="form-group">
            <label for="pwd">Email address:</label>
            <input type="email" class="form-control" id="pwd" placeholder="Enter email" name="email" required>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
        </div>

        <div class="form-group">
            <label >Date of Birth</label>
            <input type="date" class="form-control" placeholder="Enter date of birth" name="birthday" required>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
        </div>

        <div class="form-group">
            <label >Address</label>
            <input type="text" class="form-control" placeholder="Enter address" name="address" required>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
        </div>

        <div class="form-group">
            <label >Phone</label>
            <input type="text" class="form-control" placeholder="Enter phone" name="phone" required pattern="[0-9]*">
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
        </div>

        <div class="form-group">
            <label >Class</label><br>
            <select name="class" id="myDropdown">
                <option value="1" selected>C0323H1</option>
                <option value="2">C0423H1</option>
                <option value="3">C0523H1</option>
                <option value="4">C0623H1</option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <a href="/home" type="button" class="btn btn-info">Quay lại</a>
</div>
</body>
</html>