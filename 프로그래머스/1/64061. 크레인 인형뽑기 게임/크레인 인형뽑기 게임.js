function solution(board, moves) {
    var answer = 0;
    let out = [];
    moves.forEach((move)=>board.find((row,i)=>{
        
        if(row[move-1]!==0){
            out.push(row[move-1]);
            isSame();
            board[i][move-1]=0;
            return true;
        }
    }))
    function isSame(){
        const lastIndex = out.length-1;
        if(lastIndex<=0) return;
        if(out[lastIndex]===out[lastIndex-1]){
            out.splice(lastIndex-1,2);
            answer+=2;
        }
    }
    return answer;
}