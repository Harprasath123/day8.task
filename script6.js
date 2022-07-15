var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    
   // for(var i=0;i<data.length;i++)
    //{
   //     console.log(data[i].country+" "+data[i].flags+" ");
  //  }


      // .... countries from Asia continent /region using Filter function...

 var result1=data.filter((countriess)=>
 {
   return countriess.region==="Asia";
})
console.log(result1);


       // ....population of less than 2 lakhs using Filter function...

var result2=data.filter((countriess)=>
 {
   return countriess.population<200000;
})
console.log(result1);


      //  .... US Dollars as currency....

var result2=data.filter((countriess)=>
 {
   countriess.country = countriess.currencies==="USD";
   return countriess.country;
   
})
console.log(result2);


     //  ...details name, capital, flag using forEach function...
     
data.forEach((name,capital,flag,index,value) => {
    console.log(data[name]+" "+data[capital]+" "+data[flag]);
});
console.log(data);
}

