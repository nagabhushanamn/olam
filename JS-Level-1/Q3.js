

var arr=[];
//-----------------------------------------
function getF(i){
    var func=function(){
        console.log(i); 
    }
    return func;
}
for(var i=0;i<200;i++){
    arr.push(getF(i));
}
//-----------------------------------------
arr[0]();
arr[1]();