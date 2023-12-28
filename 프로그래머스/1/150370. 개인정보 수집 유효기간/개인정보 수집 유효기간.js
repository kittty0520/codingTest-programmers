function solution(today, terms, privacies) {
    var answer = [];
    const expire = terms.reduce((acc,cur)=>{
        const [name, period] = cur.split(' ');
        acc[name] = period*1;
        return acc;
    },{});
    
    privacies.forEach((privacy,index)=>{
        const [collectionDate, name] = privacy.split(' ');
        const [year, month, date] = collectionDate.split('.');
        
        const expiredDate = calculateExpireDate(year*1, month*1, date*1, expire[name]);
        console.log(expiredDate)
        if(Date.parse(expiredDate) < Date.parse(today)){
            answer.push(index+1);
        }
      
    })
    return answer;
}

function calculateExpireDate(year, month, date, expire){
    date = date - 1;
    month = month + expire;
    if(month > 12){
        year += parseInt(month/12);
        if((month % 12)===0){
            month = 12;
            year--;
        } else{
            month = month % 12
        }
    }
    if(date===0){
        month--;
        date = 28;
        if(month===0){
            year--;
            month=12;
        }   
    }
    return `${year}, ${month}, ${date}`
}