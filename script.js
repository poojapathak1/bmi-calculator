function whformula(height,weight){
    var height=document.getElementById("height").value;
    var weight=document.getElementById("w").value;
    var result=document.getElementById("result");

    if (height==="" || weight===""){
        alert ("Please enter valid height and weight");
        return;
    }

    var bmi;
    bmi=weight/height;
    result.textContent=` Your BMI is ${bmi.toFixed(2)}`

};
