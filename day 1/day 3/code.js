/* Given an array check if its sum of all of its numbers is divisble by 11 or not */

let array =[11,21, 34,38,41]
let sum=0;
for(let i=0; i<=array.length;i++){
  sum=sum+array[i]
}
   
  if(sum%11===0){
   console.log("divisible by 11")   
  }
  else {
    console.log("Not divisible by 11")
  }




 /*  Print the below pattern use $ instead of even numbers in the below pattern for n = 3 */

  let n=3;
for(let i=1;i<=n;i++){
    let st="";
    let gap="";
    for(let j=1;j<=i;j++){
        if(i%2==0){
            st=st+"$"+" ";
        }
        else{
            st=st+i+" ";
        }
    }
    for(let k=n-i;k>0;k--){
        gap=gap+" ";
    }
    console.log(gap+st);
}
for(let i=n-1;i>=1;i--){
    let st="";
    let gap="";
    for(let j=1;j<=i;j++){
        if(i%2==0){
            st=st+"$"+" ";
        }
        else{
            st=st+i+" ";
        }
    }
    for(let k=n-i;k>0;k--){
        gap=gap+" ";
    }
  
    console.log(gap+st);
    
}