function CalcTime(time){

    if(time === 0) return 'now'
    else if (time>0){
        let seconds, minutes, hours, days, years;

        seconds = time % 60;
        minutes = ((time - seconds)/60)%60;
        hours = (time - seconds - (minutes*60))/3600
        days = hours > 24 ? (hours - hours%24)/24 : 0
        years = days > 365 ? (days - days%365)/365 : 0
    
        return `${years > 0 ? (years>1 ? years + ' years,' : years + ' year,') : ''}  ${days%365 > 0 ? (days %365 >1 ? days%365 + ' days,' : days%365 + ' day,') : ''} ${hours%24 > 0 ? (hours%24 >1 ? hours %24 + ' hours,' : hours%24 + ' hour,') : ''}  ${minutes > 0 ? (minutes>1 ? minutes + ' minutes' : minutes + ' minute ') : ''} ${seconds > 0 ? (seconds>1 ? ' and ' + seconds + ' seconds.' :  ' and ' + seconds + '  second.') : ''}`
    
    }
    else{
        return 'Enter a positive number'
    }
}

console.log(CalcTime(101956166))