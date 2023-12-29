function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    const reportList = id_list.reduce((acc,cur)=>{
        acc[cur] = [];
        return acc;
    },{});
    
    report.forEach((el)=>{
        const [reporter, suspect] = el.split(' ');
        if(!reportList[suspect].includes(reporter)){
            reportList[suspect].push(reporter);
        }
    });
    
    const reportedIdList = id_list.filter(id=>reportList[id].length >= k);
    
    reportedIdList.forEach((id,idx)=>{
        reportList[id].map(reporter=>{
           const addIndex = id_list.indexOf(reporter);
            answer[addIndex] ++;
        })
    })
    
    return answer;
}