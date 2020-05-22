function square(x) {
    a = parseFloat(x);
    return (a * a);
}
function check(x) {
    if (isNaN(x)) {
        alert("This is not a number, try again!");
    }
}

function bai1() {
    do {
        x = prompt("Enter x:");
        check(x);
    }
    while (isNaN(x));
    console.log("x = %s", x);
    console.log("x^2 = " + square(x));
}

function bai2() {
    do {
        a = prompt("Enter a:");
        check(a);
    }
    while (isNaN(a));

    do {
        b = prompt("Enter b:");
        check(b);
    }
    while (isNaN(b));

    do {
        c = prompt("Enter c:");
        check(c);
    }
    while (isNaN(c));
    var arr = [a, b, c];
    console.log("[a,b,c] = {" + arr + "}");
    console.log("(3a+2b-c)^2 = " + square(3 * a + 2 * b - c));
}

function bai3() {
    var s = "";
    do {
        s = prompt("Enter string more than 30 chars");
        if (s.length <= 30) {
            alert("This string isn't more than 30 chars, try again!")
        }
    } while (s.length <= 30)

    console.log(s);
    var s2 = s.substr(0, 10);
    console.log(s2 + "...");
}

function bai4() {
    var s = prompt("Enter a string: ", "welcome to Techmaster");
    var s2 = s.toLowerCase();
    var s3 = s.substr(0, 1);
    var res = s2.replace(s3, s3.toUpperCase());
    console.log(res);
}

function bai5(a) {
    console.log("a = [" + a + "]");
    var min = a[0];
    for (var x in a) {
        if (typeof a[x] != "number") {
            console.log("Mảng có phần tử không phải là số.")
            min = "???";
            break;
        }
        else if (min > a[x]) {
            min = a[x];
        }
    }
    if (typeof min == "number") {
        console.log("Số nhỏ nhất trong mảng là: " + min);
    }
}

function bai6(a) {
    console.log("mảng gốc ban đầu: [" + a + "]");
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < i; j++) {
            if (a[i].toLowerCase() < a[j].toLowerCase()) {
                var x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
        }
    }
    console.log("mảng sau khi xếp: [" + a + "]");
}



// function bai7() {
var teacher = new info("Alex", "Sandra", 30);
var student = new info("Jazze", "Koain", 22);
var parent = new info("Oddey", "Koain", 40);

var teacher3 = {
    firstName: "Kim",
    lastName: "Dung",
    age: 30,
    say: function () { }
}

function info(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    say = function () { }
}

var aboutMe = function () {
    console.log("Hi, my name is " + this.firstName + " " + this.lastName + ". This year I'm " + this.age + " year old.");
}

// }
//-----------------------------------------------------

//testcase bài 5
console.log("\nbài 5");
var arr = [82, 93, 76, 49, 64, 50, 24, 57, 34];
bai5(arr);

//testcase bài 6
console.log("\nbài 6");
var arr = ["Oxy", "Hydro", "nitro", "heli", "clo"];
bai6(arr);

function clickbai6() {
for (var i in arr) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(arr[i]);
    node.appendChild(textNode);
    document.getElementById("olist").appendChild(node);
}
}

