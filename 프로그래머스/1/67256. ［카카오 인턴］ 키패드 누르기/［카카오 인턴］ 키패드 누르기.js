function solution(numbers, hand) {
    var answer = '';
    let left='*';
    let right='#';
    
    const rightNum = [3,6,9];
    const leftNum = [1,4,7];
    
    const coordinateNum = [
        {num:'*', x:0, y:3},
        {num:'#', x:2, y:3},
        {num:0, x:1, y:3},
        {num:1, x:0, y:0},
        {num:2, x:1, y:0},
        {num:3, x:2, y:0},
        {num:4, x:0, y:1},
        {num:5, x:1, y:1},
        {num:6, x:2, y:1},
        {num:7, x:0, y:2},
        {num:8, x:1, y:2},
        {num:9, x:2, y:2},
    ];
    
    function calculateDistance(a,b){
        const answer = Math.abs(a.x-b.x)+Math.abs(a.y-b.y)
        return answer;
    }
    
    numbers.forEach((num)=>{
        if(rightNum.includes(num)){
            answer += 'R'
            right = num;
        } else if(leftNum.includes(num)){
            answer += 'L';
            left = num;
        } else {
            const numCoor = coordinateNum.find(coor => coor.num===num);
            const rightCoor = coordinateNum.find(coor => coor.num===right);
            const leftCoor= coordinateNum.find(coor => coor.num===left);
            
            const distanceRight = calculateDistance(rightCoor,numCoor);
            const distanceLeft = calculateDistance(leftCoor,numCoor);
            
            answer += distanceRight > distanceLeft ? 'L' : 
            (distanceRight === distanceLeft? hand[0].toUpperCase() : 'R');
            
            if(answer[answer.length-1]==='R'){
                right = num;
            } else {
                left = num;
            }
        }
    })
    return answer;
}