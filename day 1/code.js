/* Given a number find the LCM of a number */

let a=12;
let b=18;
let min=a<b?a:b;
let lcm=a*b;
let gcd =1;
for(let i=2;i<=min;i++){
    if(a%i==0&& b%i==0){
        gcd=i
    }
}
console.log("lcm is: "+lcm/gcd)

/* Write code to implement the fibonacci sequence. */
let n=9;
let f1=0;
let f2=1;
let f3="";
if(n==1){
    console.log(f1)
}
else if(n==2){
    console.log(f2)
}
if(n>2){
    for(let i=3;i<=n; i++){
        f3=f2+f1;
        f1=f2;
        f2=f3;
    }
}
console.log( "Fibonaseries of 9 is:" +f3)


/* Print the following pattern if n = 4
1

*    *

3  3  3

*  *   *  *   */


let p=4;
for(let i=1; i<=p; i++){
    let str="";
    let gap="";
    for(let j=1;j<=i;j++){
        if(i%2==0){
            str=str+"* "
        }
        else{
            str=str+i+" "
        }
     
    }
    for(let k=p-i;k>0;k--){
        gap =gap+" "
    }
    console.log(gap+str)
}



