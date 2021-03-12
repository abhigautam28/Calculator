function gethistory(){
  var a=document.getElementById("history_value").innerText;
  return a;
}

function printhistory(num){
     document.getElementById("history_value").innerText=num;
}

// printhistory("mr jaba")
function getoutput()
{
  return document.getElementById("output_value").innerText;
}

function printoutput(num)
{
  // now making in some format the 
  if(num=="")
  {
    document.getElementById("output_value").innerText=num; 
  }
  else{
    document.getElementById("output_value").innerText=elementinformate(num);
  }
 
}

function elementinformate(num)
{
  let n=Number(num);
  let value= n.toLocaleString("en");
  return value;
}

function noinreverseformate(num)
{
  return Number(num.replace(/,/g,''));
}

// printoutput("9999999");

let operater=document.getElementsByClassName("operation");

for(let i=0;i<operater.length;i++)
{
    operater[i].addEventListener('click',function(){
         if(this.id=="clear")
         {
           printhistory("");
           printoutput("");
         }
         else if(this.id=="del")
         {
           let out=noinreverseformate(getoutput()).toString();
           if(out){
            //  if length of no string is greater than 0
              out= out.substr(0,out.length-1);
              printoutput(out);
           }
         }else
         {
          //  now if another operateris click then value of output go to history
          let output=getoutput();
          let history=gethistory();
          if(output!="")
          {
            output=noinreverseformate(output);
            history=history+output;
            if(this.id=="=")
            {
                let result=eval(history); //to calculate the result 
                  // result show kro bassically
                  printoutput(result);
                  printhistory("");
            }else
            {
                history=history+this.id;
              printhistory(history);
              printoutput("");
            }
          }else{

          }
         }
         
    });
}
let number=document.getElementsByClassName("btn");

for(let i=0;i<number.length;i++)
{
    number[i].addEventListener('click',function(){
     let no= noinreverseformate(getoutput());
     if(no!=NaN)     //  this check the no is number or not
     {
      //  if ouput is no
      no=no+this.id;
      printoutput(no)
     } 
    });
}

