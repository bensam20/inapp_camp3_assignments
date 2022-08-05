
let students =[];

class Student{
    constructor(){
        this.name = undefined;
        this.cls = undefined;
        this.age = undefined;
        this.gender = undefined;
        this.loc = undefined;
    }

    checkDetails(nam, cls, age, gender, loc){
        alert("in check details");
        arr = [nam, cls, age, gender, loc]
        flag = 0;
        for(var i=0; i<arr.length; i++){
            if(arr[i]==''){
                alert("Fields cannot be empty!");
                flag=0;
                break;
            }
            else{
                flag=1;
            }
        }
        if(flag==1){
            this.name = nam;
            this.cls = cls;
            this.age = age;
            this.gender = gender;
            this.loc = loc;
        }
    }

    addDetails(name, cls, age, gender, loc){
        alert("inside add details")
        this.name = name;
        this.cls = cls;
        this.age = age;
        this.gender = gender;
        this.loc = loc;
        students.push(s);
        return;
    }

    listDetials(){
        students.forEach (stud => {
            console.log(stud.name);
            console.log(stud.cls);
            console.log(stud.age);
            console.log(stud.gender);
            console.log(stud.loc);
        })
    }


    delName(){
        delete this.name;
    }

    delClass(){
        delete this.cls;
    }

    delAge(){
        delete this.age;
    }

    delGender(){
        delete this.gender;
    }

    delloc(){
        delete this.loc;
    }

    display(){
        console.log('Name:', this.name);
        console.log('Class:', this.cls);
        console.log('Age:', this.age);
        console.log('Gender:', this.gender);
        console.log('loc:', this.loc);
    }
}    



choice=0
while(choice!=5){
    choice = parseInt(window.prompt("1. Add \n2. List all \n3. Edit \n4. Delete"));
    switch(choice){
        case 1:
            s = new Student()
            sName = window.prompt("Enter name: ");
            cls = window.prompt("Enter class: ");
            age = parseInt(window.prompt("Enter age: "));
            gender = window.prompt("Enter gender: ");
            loc = window.prompt("Enter locaton: ");
            s.checkDetails(sName, cls, age, gender, loc);
            break;
        case 2:
            s.list();
            break;
        case 3:
            console.log("Inside edit")
            break;
        case 4:
            console.log("inside delete")
            break;
        case 5:
            break;
        default:
            alert("Invalid Input!");
            break
    }
}
