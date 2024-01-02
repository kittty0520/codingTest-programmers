function solution(ingredient) {
    var answer = 0;
    
    let stack = [];
    
    ingredient.forEach((num)=>{
        stack.push(num);
        if(stack.length>=4){
            const lastFour = stack.slice(-4).join('');
            if(lastFour==='1231'){
                answer++;
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
            }
        }
    })
    // let ingredi = ingredient.join('');
    // for(let i = 0; i <= ingredi.length; i++){
    //     const index = ingredi.indexOf('1231');
    //     if(index!==-1){
    //         answer++;
    //         ingredi = ingredi.slice(0,index)+ ingredi.slice(index+4)
    //     } else {
    //         break;
    //     }
    // }
    return answer;
}

