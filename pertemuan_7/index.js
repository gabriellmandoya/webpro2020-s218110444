/*
    JavaScript Conditional
*/

var job="teacher";
var firstName= "jhon";
switch(job){
    case "teacher":
        console.log(firstName + " is a teacher");
        break;
    case "driver":
        console.log(firstName + " is a driver");
        break;
    case "designer":
        console.log(firstName + " is a digigner");
        break;
    default:
        console.log (firstName +" does something else");
}

var firstName = "jhon";
var age = 16;
if(age < 13){
    console.log(firstName + "is a boy");
}
else if (age >= 13 && age<20)
{
    console.log(firstName + "is a teenager");
}
else if(age >=20 && age<30){
    console.log(firstName + "is a young man");
}
else{
    console.log(firstName + "is a man");
}

var age = 56;
var firstName ="jhon";
switch(true){
    case age < 13:
            console.log(firstName + "is a boy");
            break;
    case age >= 13 && age<20:
            console.log(firstName + "is a teenager");
            break;
    case age >=20 && age<30:
            onsole.log(firstName + "is a young man");
            break;
    default:
        console.log(firstName + " is a man")       
}


/*
    JavaScript Loop
*/

//For Loop
for(var i=0; i<10;i++){
    console.log(i);
}
//Loop Backward
for(var i=9; i<=0; i--){
    console.log(i);
}

//Example
var jhon = ["jhon","smith",1990, "teacher",false];
for(var i =0;i<jhon.length;i++){
    console.log(jhon[i]);
}

//While Loop
var i=0;
while(i <10){
    console.log(i);
    i++;
}