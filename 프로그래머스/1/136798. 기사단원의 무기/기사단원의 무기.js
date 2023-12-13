function solution(number, limit, power) {
    var answer = 1;
    for(let i = 2; i<=number;i++){
        let divisor = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i%j===0){ 
                divisor+=2;
            }
        }
        if(Number.isInteger(Math.sqrt(i))) divisor--;

        if(divisor>limit){
             answer+=power;
        } else{
            answer+=divisor;
        }
    }
    return answer;
}