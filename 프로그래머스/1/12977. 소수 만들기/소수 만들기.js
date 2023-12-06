function solution(nums) {
    var answer = 0;
    const length = nums.length;
    
    let sumArr = [];
    for(let i=0; i< length-2; i++ ){
        for(let j=i+1; j <length-1; j++){
            for(let r= j+1; r<length; r++){
                sumArr.push(nums[i]+nums[j]+nums[r]);
            }
        }
    }
    
    sumArr.forEach(num=>{
        for(let i=2; i<num; i++){
            if(num%i===0) return;  
        }
            answer++;
    })
    
    return answer;
}