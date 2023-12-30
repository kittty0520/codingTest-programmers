function solution(s) {
    let answer = 0;
    let countX = 0;
    let countNonX = 0;
    
    let firstLetter = '';
    
    s.split('').forEach((letter,idx)=>{
        if(firstLetter==='') firstLetter = letter;
        letter === firstLetter? countX++: countNonX++;
        
        if(countX === countNonX) {
            answer++;
            firstLetter='';
        }
        
        if(idx === s.length-1 && countX !== countNonX){
            answer++;
        }
    })
    
    return answer;
}