function solution(n, m, section) {
    var answer = 0;
    let done = 0;
    section.forEach(sec=>{
        if(sec>done){
            done = sec+m-1;
            answer++;
        }
    })
    return answer;
}