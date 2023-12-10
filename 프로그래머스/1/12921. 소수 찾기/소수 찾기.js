function solution(n) {
    let answer = 1;
    for(let i=3;i<=n;i+=2){
        answer++;
        for(let j=3; j<=Math.sqrt(i);j+=2){
            if(i%j===0) {
                answer--;
                break;
            }
        }
    }
    return answer;
}