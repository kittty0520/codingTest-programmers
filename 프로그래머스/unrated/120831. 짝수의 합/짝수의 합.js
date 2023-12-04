function solution(n) {
    var answer = 0;
    for(let i =0; i<= Math.floor(n/2)*2 ;i+=2){
        answer+=i;
    }
    return answer;
}