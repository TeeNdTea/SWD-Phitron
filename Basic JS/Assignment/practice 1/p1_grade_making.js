const getScore = (grades)=>{
    if(grades>=80 && grades<=100){
        return 'A';
    }
    else if(grades>=70 && grades<80){
        return 'B';
    }
    else if(grades>=60 && grades<70){
        return 'C';
    }
    else if(grades>=50 && grades<60){
        return 'D';
    }
    else if(grades>=0 && grades<=40){
        return 'F';
    }
    else{
        return 'Invalid Input';
    }
};


score = 40;
const res = getScore(score)
console.log(res)