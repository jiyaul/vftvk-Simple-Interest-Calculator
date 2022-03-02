function compute(){
    var principal = document.getElementById("principal").value;
    
    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);    
    var result ="If you deposit <b>"+principal+"</b>,";
    result +="<br>at an interest rate of <b>"+rate+"</b>.";
    result+="<br>You will receive an amount of <b>"+interest+"</b>, in year <b>"+year+"</b>";
    document.getElementById("result").innerHTML=result;
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

        