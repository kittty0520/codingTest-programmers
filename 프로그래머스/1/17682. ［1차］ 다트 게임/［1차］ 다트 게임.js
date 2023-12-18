function solution(dartResult) {
    var answer = 0;
    const dartArr = dartResult.split('');
    const SDT = ['S','D','T']
    let calculated = [];
    dartArr.forEach(el=>{
        const endIndex = calculated.length-1;
        
        if(Number.isInteger(parseInt(el))){
            if(parseInt(el)===0 && calculated[endIndex]===1){
                calculated[endIndex] = 10;
            } else{
                calculated.push(parseInt(el))
            }
        } else if(SDT.includes(el)){
            for(let i=0; i<SDT.length; i++){
                if(el===SDT[i]){
                    calculated[endIndex] = Math.pow(calculated[endIndex],i+1);
                    break;
                }
            }
        } else{
            if(el==='*'){
                calculated[endIndex] *=2;
                endIndex-1>=0? calculated[endIndex-1] *=2 :null;
            } else{
                calculated[endIndex] *= -1;
            }
        }
    })
    answer =  calculated.reduce((a,c)=>a+c,0);
    return answer;
}