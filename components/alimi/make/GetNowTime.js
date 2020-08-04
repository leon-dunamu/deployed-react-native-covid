const GetNowTime = () => {
    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;  // 월
    let date = today.getDate() < 10 ? '0' + today.getDate() : `${today.getDate()}`; // 날짜
    let hour = today.getHours();

    if(hour < 11) {
        date = parseInt(date)-1;
        if(date < 10) {
            date = '0'+date;
        }
    }
    return `${year}${month}${date}`;
}

export default GetNowTime;