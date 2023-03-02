let opCount =0;
let decCount = 0

document.addEventListener("keydown",function(event) {
  var keypress = event.key;
  str = document.getElementById('res').value;
  if(keypress == "Enter")
  {
    let operands = str.match(/[+-]?([0-9]*[.])?[0-9]+/g); 
    let operators = str.match(/[*/+-]/); 
    let total = parseFloat(operands[0]); 
    /* console.log(expr); */
    for (let i = 0; i < operators.length; i++) 
    { 
      let operator = operators[i]; 
      let operand = parseFloat(operands[i + 1]); 
      console.log(operand);
      console.log(operator);
   
        if (operator === "+") 
        { 
          total += operand; 
        }
        else if (operator === "-") 
        { 
          total -= operand; 
        } 
        else if (operator === "*") 
        { 
          total *= operand; 
        } 
        else if (operator === "/") 
        { 
          total /= operand; 
          if(total == "Infinity" )
          {
            total = "Zero Error";
          } 
        }
    }
    console.log(total);
    document.getElementById('res').value = total;
  }
});




function checkop(v)
{
  if(v.includes("+") || v.includes("-") || v.includes("*") || v.includes("/") || v.includes("."))
  {
    opCount++;
    console.log(opCount);
    console.log(v);
    if(opCount > 1)
    {
      return;
    }
    else
    {
      var vl = document.getElementById('res');
      vl.value += v;
    }
  }
  else
  {
    var vl = document.getElementById('res');
    vl.value += v;
    opCount = 0;
  }
}

function solve(val) 
{
    if(val)
    {
      checkop(val);
    }
}
    
function result() 
{
  var rs = document.getElementById('res');  
  let expr = rs.value; 
  let operands = expr.match(/[+-]?([0-9]*[.])?[0-9]+/g); 
  let operators = expr.match(/[*/+-]/); 
  let total = parseFloat(operands[0]); 
  console.log(expr);
  for (let i = 0; i < operators.length; i++) 
  { 
    let operator = operators[i]; 
    let operand = parseFloat(operands[i + 1]); 
    console.log(operand);
    console.log(operator);
   
    if (operator === "+") 
    { 
      total += operand; 
    }
    else if (operator === "-") 
    { 
      total -= operand; 
    } 
    else if (operator === "*") 
    { 
      total *= operand; 
    } 
    else if (operator === "/") 
    { 
      total /= operand; 
      if(total == "Infinity" )
      {
        total = "Zero Error";
      } 
    } 
  }
  console.log(total);
 rs.value = total; 
}
 function clr() 
 {
    var inp = document.getElementById('res');
    inp.value = "";
 }
 function back() 
 {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }
 function signchange()
 {
  var ex = document.getElementById('res')
  ex.value = -ex.value;
 }




 