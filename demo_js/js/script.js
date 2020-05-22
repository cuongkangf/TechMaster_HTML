// alert("Hello!")
console.log("Hello world");
console.clear(0);
// for (i = 1; i < 10; i++) {
//     console.log(i);
// }
var a = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
var student = {
    name: "Học sinh ngoan",
    age: 20,
    runFn: function() {
        console.log("function is running");
    }
};

var hoc_luc
function info(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    hoc_luc = "good";
    // console.log("info running");
}

var The_Student_A = new info("Học sinh A", 20, "nam");
var The_Student_B = new info("Học sinh B", 19, "nữ");
var The_Student_C = new info("Học sinh C", 21, "nam");

var s;
function thongbao(){
    // alert("function thông báo");
    alert(s);
}

var myVar = "global"; // Khai báo một biến Global
function checkscope( ) {
    var myVar = "local";  // Khai báo một biến Local
    document.write(myVar);
}
document.write(myVar);

