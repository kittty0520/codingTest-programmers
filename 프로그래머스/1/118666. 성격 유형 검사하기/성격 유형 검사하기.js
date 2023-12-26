function solution(survey, choices) {
    var answer = '';
    const scoreArr = { 'A':0,'N':0,'C':0,'F':0,'R':0,'T':0,'M':0,'J':0};
    survey.forEach((q,i)=>{
        const char = q.split('');
        const selectedChar = choices[i]>4? char[1]:char[0];
        const score = Math.abs(choices[i]-4);
        scoreArr[selectedChar] += score;
    });
    const indicatorOrder = ['RT','CF','JM','AN'];
    indicatorOrder.forEach(indi=>{
        const indicator = indi.split('');
        if(scoreArr[indicator[0]] === scoreArr[indicator[1]]){
            answer += indicator.sort().shift()
        } else{
             answer += scoreArr[indicator[0]] > scoreArr[indicator[1]]?
              indicator[0]:indicator[1];
        }
       
        
    })
    return answer;
}