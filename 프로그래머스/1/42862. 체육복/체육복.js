function solution(n, lost, reserve) {
    var answer = n;
    const lostArr = lost.sort((a,b)=>a-b);
    let reserveArr = reserve.sort((a,b)=>a-b);

    const filterSame = lostArr.filter(num=>{
        const reservedIndex = reserveArr.indexOf(num);
        if(reservedIndex !== -1){
            reserveArr.splice(reservedIndex,1);
        }
        return reservedIndex===-1;
    });
       
    filterSame.forEach(num=>{
        const isReserved = reserveArr.find(el => el===num-1 || el===num+1);
        if(isReserved){
            reserveArr.shift();
        } else{
            answer--;
        }
    })
    return answer;
}