

function App() {
    return (
            <div className="App">
                <header className="App-header">
                    <h1>Bài 1</h1>
                    <p>Structuring:
                        <span onClick={structuringBai1}>Bài 1 </span>
                        <span onClick={structuringBai2}>Bài 2 </span>
                        <span onClick={structuringBai3}>Bài 3 </span>
                    </p>
                    <p>Spread Syntax:
                        <span onClick={spreadSyntaxBai1}>Bài 1 </span>
                        <span onClick={spreadSyntaxBai2}>Bài 2 </span>
                        <span onClick={spreadSyntaxBai3}>Bài 3 </span>
                        <span onClick={spreadSyntaxBai4}>Bài 4 </span>
                        <span onClick={spreadSyntaxBai5}>Bài 5 </span>
                    </p>
                    <p>Map, filter:
                        <span onClick={mapFilterBai1}>Bài 1 </span>
                        <span onClick={mapFilterBai2}>Bài 2 </span>
                        <span onClick={deleteById}>Bài 3</span>
                    </p>
                    <div id={"content"}></div>
                </header>
            </div>
    );
}

function structuringBai1() {
    // Bài tập 1: Tách phần tử từ một mảng
    // Cho một mảng arr = [1, 2, 3, 4, 5],
    // hãy sử dụng Destructuring để tách phần tử đầu tiên và phần tử thứ hai vào hai biến riêng biệt.
    let arr = [1, 2, 3, 45, 6, 78, 0];
    let [a, b, ...c] = arr;
    let str = `
    <p>Mảng ban đầu: ${arr} </p>
    <p>Phần tử đầu tiên: ${a} </p>
    <p>Phần tử thứ hai: ${b} </p>
    `
    document.getElementById("content").innerHTML = str;
}

function structuringBai2() {
    // Bài tập 2: Lấy giá trị từ một đối tượng
    // Cho một đối tượng person = { name: 'John', age: 30, city: 'New York' },
    // hãy sử dụng Destructuring để lấy giá trị của thuộc tính name và age vào hai biến riêng biệt.

    let obj = {name: 'John', age: 30, city: 'New York'}
    let {name, age} = obj;
    let str = `
    <p>Person: ${obj.name + "  " + obj.age + "  " + obj.city} </p> 
    <p>Name: ${name} </p>
    <p>Age: ${age} </p>
    `
    document.getElementById("content").innerHTML = str;
}

function structuringBai3() {
    // Bài tập 4: Lấy giá trị từ một đối tượng sâu hơn
    // Cho một đối tượng person = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } },
    // hãy sử dụng Destructuring để lấy giá trị của thuộc tính city trong address vào một biến riêng biệt.

    let person = {name: 'John', age: 30, address: {city: 'New York', country: 'USA'}};
    let {city} = person.address;
    let str = `
    <p>City: ${city}</p>
    `
    document.getElementById("content").innerHTML = str;
}

function spreadSyntaxBai1() {
    // Cho hai mảng `arr1 = [1, 2, 3]` và `arr2 = [4, 5, 6]`,
    // hãy sử dụng Spread Syntax để kết hợp hai mảng này thành một mảng mới.

    let arr1 = [1, 2, 3]
    let arr2 = [4, 5, 6]
    let arr3 = [...arr1, ...arr2]
    let str = `
    <p>Arr1: ${arr1}</p>
    <p>Arr2: ${arr2}</p>
    <p>Dùng Spreed Syntax kêt hợp ar1 và arr2: ${arr3}</p>
    `
    document.getElementById("content").innerHTML = str;
}

function spreadSyntaxBai2() {
    // Cho một mảng `originalArray`,
    // hãy sử dụng Spread Syntax để sao chép mảng này thành một mảng mới và gán vào biến `copiedArray`.

    let arr1 = [1, 2, 3];
    let copy = [...arr1, 4]
    let str = `
    <p>Arr1: ${arr1}</p>
    <p>Dùng Spreed Syntax copy arr1 vào biến khác: ${copy}</p>
    `
    document.getElementById("content").innerHTML = str;
}

function spreadSyntaxBai3() {
//     Cho hai đối tượng `obj1 = { a: 1, b: 2 }` và `obj2 = { c: 3, d: 4 }`,
//     hãy sử dụng Spread Syntax để kết hợp hai đối tượng này thành một đối tượng mới.

    let obj1 = {a: 1, b: 2};
    let obj2 = {c: 3, d: 4};
    let obj3 = {...obj1, ...obj2}
    let str = `
    <p>Obj1: ${obj1.a + "  " + obj1.b}</p>
    <p>Obj2: ${obj2.c + "   " + obj2.d}</p>
    <p>Dùng Spreed Syntax kết hợp hai đối tượng trên: ${obj3.a + "  " + obj3.b + "  " + obj3.c + "  " + obj3.d}</p>
    `
    document.getElementById("content").innerHTML = str;
}

function spreadSyntaxBai4() {
// Cho một đối tượng `originalObject`,
// hãy sử dụng Spread Syntax để sao chép đối tượng này thành một đối tượng mới và gán vào biến `copiedObject`.
    let obj1 = {name: "A", age: 10}
    let obj2 = {...obj1};
    let str = `
    <p>Obj1: ${obj1.name + "  " + obj1.age}</p>
    <p>Dùng Spreed Syntax sao chép đối tượng trên: ${obj2.name + "  " + obj2.age}</p>
    `
    document.getElementById("content").innerHTML = str;
}

function spreadSyntaxBai5() {
// Cho đối tượng obj1 = {name: 'A', age: 20}.
// sử dụng spread để sửa tên obj1 thành 'B' và thêm thuộc tính score: 20.
    let obj1 = {name: 'A', age: 20};
    let obj2 = {...obj1, name: "B", score: 20}
    let str = `
    <p>Obj1: ${obj1.name + "  " + obj1.age}</p>
    <p>Dùng Spreed Syntax sửa tên và thêm score: ${obj2.name + "  " + obj2.age + "  " + obj2.score}</p>
    `
    document.getElementById("content").innerHTML = str;
}

// Map, filter: Tạo 1 danh sách sinh viên có các thuộc tính: id, name, age, score

let studentList = [
    {id: 1, name: "A", age: 10, score: 10},
    {id: 2, name: "M1", age: 20, score: 20},
    {id: 3, name: "M2", age: 30, score: 30}
]

function mapFilterBai1() {
    // Sử dụng map để tính tổng điểm của các sinh viên trong danh sách
    let sum = 0;
    studentList.map(x => {
        sum += x.score;
    })
    let str = `
    <p>Tổng điểm: ${sum}</p>
    `
    document.getElementById("content").innerHTML = str;
}

function mapFilterBai2() {
    // Sử dụng filter để tìm các sinh viên trong tên có chữ M
    let arr2 = studentList.filter(x => x.name.includes("M"))
    let str = "<p>Các sinh viên trong tên có chữ M</p>";
    arr2.map(x => {
        str += `
        <p>Id: ${x.id}, name: ${x.name}</p>
        `
    })
    document.getElementById("content").innerHTML = str;
}

function deleteById() {
    // Sử dụng filter để xóa 1 sinh viên theo id
    let id = prompt("Nhập id muốn xóa")
    let arr2 = studentList.filter(x => x.id != id);
    let str = "<p>Tất cả các sinh viên trong danh sách sau xóa</p>";
    arr2.map(x => {
        str += `
        <p>Id: ${x.id},age: ${x.age}, name: ${x.name},score: ${x.score}</p>
        `
    })
    document.getElementById("content").innerHTML = str;
}

function showAll() {
    let str = "<p>Tất cả các sinh viên trong danh sách</p>";
    studentList.map(x => {
        str += `
        <p onclick="deleteById(${x.id})">Id: ${x.id},age: ${x.age}, name: ${x.name},score: ${x.score}</p>
        `
    })
    document.getElementById("content").innerHTML = str;
}

export default App;
