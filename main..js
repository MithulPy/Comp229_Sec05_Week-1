function sumN(a,b,...args){//rest
    let n=(a*b);
    let numSum = 0;
    for(const arg of args){
    

    numSum=numSum+arg
  
    
    }
    return [n,numSum];
    
    }    
    
    console.log(sumN(1,2,3))