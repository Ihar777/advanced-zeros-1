module.exports = function getZerosCount(number, base) { 
    if(base == 10) {
        let endzerocount = 0;
  
  let i = 1;
  while(Math.floor(number/(Math.pow(5,i)))>=1){
      endzerocount += Math.floor(number/(Math.pow(5,i)));
    i++;
  }
  
return endzerocount;
    } else {
    var str_number = number.toString();

    var len = str_number.length;
    var pow = 1; // Initialize power of base 
    var num = 0; // Initialize result 
    var zeros = 0;
  
    for (var i = len - 1; i >= 0; i--) 
    { 
        if (Number(str_number[i]) >= base) 
        { 
            alert("Invalid Number"); 
            return -1; 
        } 

         num += str_number[i] * pow;
        pow = pow * base; 
    } 

          while(num/base > 1) {
            num = Math.floor(num/base);
            zeros += num;
          }
        
    return zeros;
} 
}
