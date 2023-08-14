<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>


<div class="container">
    <h2>Bảng danh sách học viên</h2>
    <a href="/create.jsp" type="button" class="btn btn-primary">Thêm học viên</a>
    <div class="row">
        <div class="col-6">
            <form action="/display">
                <div class="form-group">
                    <label>Class</label><br>
                    <select name="idclass" id="myDropdown">
                        <option value="1" selected>C0323H1</option>
                        <option value="2">C0423H1</option>
                        <option value="3">C0523H1</option>
                        <option value="4">C0623H1</option>
                    </select>
                </div>
                <button class="btn btn-info" type="submit">ok</button>
            </form>
        </div>
        <div class="col-6">
            <form action="/findByName">
                <div class="form-group">
                    <label>Tìm kiếm</label>
                    <input type="text" class="form-control" placeholder="Enter name" name="name" required>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <button type="submit">Tìm kiếm</button>
            </form>
        </div>
    </div>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>DateOfBirth</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Classroom</th>
            <th colspan="2">Action</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach items="${studentList}" var="student">
            <tr>
                <td>${student.name}</td>
                <td>${student.birthday}</td>
                <td>${student.email}</td>
                <td>${student.address}</td>
                <td>${student.phone}</td>
                <td>${student.nameClass}</td>
                <td>
                    <a href="/edit?id=${student.id}" type="button" class="btn btn-info">Sửa</a>
                </td>
                <td>
                    <a href="/delete?id=${student.id}" type="button" class="btn btn-primary">Xóa
                    </a>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>

<%--data-toggle="modal" data-target="#myModal"--%>
<!-- The Modal -->
<div class="modal fade" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <form>
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Bạn có chắc chắn muốn xóa</h4>
                    <button type="button" class="close" data-dismiss="modal">×</button>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                <div class="modal-footer">
                    <a href="/detete" type="button" class="btn btn-warning" data-dismiss="modal">Close</a>
                </div>
            </form>
        </div>
    </div>
</div>

</div>
</body>
</html>