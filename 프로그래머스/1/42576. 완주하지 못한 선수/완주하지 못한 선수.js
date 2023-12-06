function solution(participant, completion) {
    let answer = '';
    const sortedParti = participant.sort();
    const sortedComple = completion.sort();
    
    for(let i=0; i<participant.length; i++){
        if(sortedParti[i] !== sortedComple[i]){
            answer = sortedParti[i];
            break;
        }
    }
    
    // for(let i=0; i<participant.length; i++){
    //     const idx = completion.indexOf(participant[i]);
    //     if(idx === -1){
    //         answer = participant[i];
    //         break;
    //     }
    //     completion.splice(idx,1);
    // }

    return answer;
}