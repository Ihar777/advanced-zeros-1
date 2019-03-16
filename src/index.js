module.exports = function getZerosCount(number, base) 
{ 
    if(base%10 == 0) {
        let endzerocount = 0;
  
  let i = 1;
  while(Math.floor(number/(Math.pow(5,i)))>=1){
      endzerocount += Math.floor(number/(Math.pow(5,i)));
    i++;
  }
  
return endzerocount;
    } 
    let srt_number = new String(number);

    let len = srt_number.length;
    let pow = 1; 
    let num = 0; 
    let zeros = 0;

    for (let i = len - 1; i >= 0; i--) 
    { 
       
        // if (Number(srt_number[i]) >= base) 
        // { 
        //     alert("Invalid Number"); 
        //     return -1; 
        // } 
  
        num += Number(srt_number[i]) * pow; 
        pow = pow * base; 
    } 
          while(num/base > 1) {
            num = (num - num%base)/base;
            zeros += num;
          }
    return zeros;
} 
