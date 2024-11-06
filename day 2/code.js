/* Given a value n print the below pattern n = 3

n = 3
* * *
# # #
* * *

n=4
* * * *
# # # #
* * * *
# # # # */
let n=4
for(i=1;i<=n;i++){
  let str=""
  for(j=1;j<=n;j++){
    if(i%2==0){
      str+="# "
    }
    else{
      str+="* "
    }
    }
    console.log(str)
}
