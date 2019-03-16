module.exports = function getZerosCount(number, base=5) {
  let endzerocount = 0;
  
  let i = 1;
  while(Math.floor(number/(Math.pow(base,i)))>=1){

  	if(number%(Math.pow(base,i) == 0) {
      endzerocount++;
      number = Math.floor(number/(Math.pow(base,i)));
  } else {
  	return endzerocount;
  }
    i++;
  }
  
  return endzerocount;
}
