function makeArmy() {
  
    let shooters = [];
  
    let i=0;
    while(i<10){
      let shooter=function(){
        console.log(i);
      };
      shooters.push(i);
      i++;
    }
    return shooters;}
    
    let army=makeArmy();
    console.log(army);
    console.log(army[0]);
  