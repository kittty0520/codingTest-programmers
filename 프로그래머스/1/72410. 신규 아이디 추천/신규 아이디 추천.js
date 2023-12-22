function solution(new_id) {
    let answer = '';
    const regex = {
        excluded:/[^\w-.]/g,
        duplicatedComma :/\.{2,}/g,
        removeComma :/^\.|\.$/g
    }
    answer = new_id.toLowerCase()
        .replace(regex.excluded,'')
        .replace(regex.duplicatedComma,'.')
        .replace(regex.removeComma,'');
 
    if(answer.length===0) answer = 'a';
    
    if(answer.length>=16){
        answer = answer.slice(0,15);
    }
    if(answer[answer.length-1]==='.') {
            answer = answer.slice(0,14);
        }
    if(answer.length<=2){
        for(let i = answer.length; i<3;i++ ){
            answer += answer[answer.length-1];          
        }
    }
    return answer;
}