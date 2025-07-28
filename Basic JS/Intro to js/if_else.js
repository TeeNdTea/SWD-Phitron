// var status = "rain";

// if(status == "rain"){
//     console.log("Dont go outside");
// }
// else{
//     console.log("Will go outside");
// }

// if(false){
//     console.log("Dont go outside");
// }
// else{
//     console.log("Will go outside");
// }

// 80-100 A
// 70-79 A-
// 60-69 B
// 50-59 C 
// 40-49 D 
// 0-39 F 

var res = -2;

if(res >=0 && res < 40){
    console.log("Grade: F");
}
else if(res>=40 && res<50){
    console.log("Grade: D");
}
else if(res>=50 && res<60){
    console.log("Grade: C");
}
else if(res>=60 && res<70){
    console.log("Grade: B");
}
else if(res>=70 && res<80){
    console.log("Grade: A-");
}
else if(res>=80 && res<=100){
    console.log("Grade: A");
}
else{
    console.log("Invalid Input");
}
