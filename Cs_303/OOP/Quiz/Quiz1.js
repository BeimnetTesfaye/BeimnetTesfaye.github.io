function aggregate(arr){
    return arr.reduce(function(obj,pet){
        if(!obj[pet]){
            obj[pet]=1;
        }else {
            obj[pet]++;
        }
        return obj;
    })
}

let pets=['dog','chicken','cat','dog','chicken','chicken','rabit'];
let result=aggregate(pets);
console.log(result);
