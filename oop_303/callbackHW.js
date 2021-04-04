function printNumbers(from,to){
    let current = from;
    let timerid=setInterval(function(){
        console.log(current);
        if(current==to){
            clearInterval(timerid);
        }
        current++;
    },1000)
}

//Question2

let i=0;
setTimeout(()=>console.log(i),100);
for(let j=0;j<1000000000;j++){
    i++;
}