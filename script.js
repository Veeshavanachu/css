
// console.log(10+3);
// console.log('hello');
// document.write('hello');
// console.error("error");
// console.warn('warning');

// var a=10;
// if(true){
// console.log(a);
// }
// document.write(a);
// var a=10;
// var a=20;
// console.log(a);
// const student = {'roll':1, 'name'  :'abc'};
// student.fname='Abi';
// console.table(student);
// document.getElementById("demo").innerHTML ="welcome";
// function change(){
//     var sam = document.getElementById("btn");
//     sam.innerHTML ="Hii";
//     sam.style.color = "red";
//     sam.style.backgroundColor ="green";
//     document.body.style.backgroundImage = "url('https://www.google.com/imgres?q=images&imgurl=https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg&imgrefurl=https://www.freepik.com/free-photos-vectors/high-resolution&docid=qfaovBurPPMnEM&tbnid=TYKp6NN-TlN4RM&vet=12ahUKEwixxMzFvfiGAxX-8jgGHfUnD_8QM3oECGgQAA..i&w=626&h=358&hcb=2&ved=2ahUKEwixxMzFvfiGAxX-8jgGHfUnD_8QM3oECGgQAA')";
   
// }
// var a = window.prompt("Enter a number");
// a = parseInt(a);
// console.log(typeof(a));
// var b = window.prompt("Enter a number");
// b = parseInt(b);
// document.write(a+b);
// function form(){
//     var a =document.getElementById("num1").innerHTML ="num1";
//     a = parseInt(a);
//     var b=document.getElementById("num2").innerHTML ="num2";
//     b = parseInt(b);
//     document.write("num1+num2");
// }
// function add(){
//     document.write("result");
// }
// function addNumbers() {
//     var num1 = parseInt(document.getElementById("num1").value);
//     var num2 = parseInt(document.getElementById("num2").value);
//     var result = num1 + num2;
//     document.getElementById("result").value = result;
// }
// function add(){
//     var a = parseInt(document.getElementById("num1").value);
//     var b = parseInt(document.getElementById("num2").value);
//     var result = a+b;
//     document.getElementById("result").value = result;   
//     console.log(result);
// }
let checkuser = () =>{
    let user = document.getElementById("span1").innerHTML="ok";
     user.innerHTML="okay";
    //  user.style.color="red";
    user.classname = "sp1";

}
let checkpassword = () =>{
    let pass = document.getElementById("pwd").value;
    let sp2 = document.getElementById("span2");
    if(pass.length >= 7){
        sp2.innerHTML = "strong password";
        sp2.style.color = "green";
    }
    else{
        sp2.innerHTML = "weak password";
        sp2.style.color = "red";
    }
}
let viewData = () =>{
    let username = document.getElementById("username").value;
    let password = document.getElementById("pwd").value;
    document.getElementById("tablebody").innerHTML = '<tr><td>' + username + '</td><td>' + password +'</td></tr>'
    }
document.getElementById("pwd").addEventListener('keyup',checkpassword);
document.getElementById("btn").addEventListener('click',viewData);
