let person={
    name:"Parth",
    id:2,
    address: "Ichalkaranji",
    getData: function (){
    document.writeln("ID :- ",person.id);
    document.writeln("<br>Name:-",person.name);
    document.writeln("<br>Addrees:-",person.address);
}
}
//console.log(person);
person.getData();
document.writeln("<br>");
let student=new Object();
student.id=1;
student.name="Rohan";
student["marks"]=990;
document.writeln("Id :- "+student.id+" Name :- "+student.name+" Marks:- "+student.marks);

// Function constructior :-
function employee(id,name,salary){
this.id = id;
this.name=name;
this.salary=salary;
this.display = function (){
    document.writeln("<br>Id :- "+this.id);
    document.writeln("<br>name :- "+this.name);
    document.writeln("<br>salary :- "+this.salary);

}
}

document.writeln("<br>Employee Info :- ")
let emp1 = new employee(1,"Rohan",80000);
emp1.display();
// document.writeln("<br>ID :- "+ emp1.id);
// document.writeln("<br>name :- "+ emp1.name);
// document.writeln("<br>salary :- "+ emp1.salary);

let emp2 = new employee(2,"Suvarna",90000);
//document.writeln("<br>ID :- "+ emp2.id);
// document.writeln("<br>name :- "+ emp2.name);
// document.writeln("<br>salary :- "+ emp2.salary);

emp2.display();

