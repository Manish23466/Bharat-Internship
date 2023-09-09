
function calculate(){
    var s = document.getElementById('init');
    var item1 = s.selectedIndex;
    console.log(item1);
    console.log(typeof item1);
    if (item1 == 1) {

        const input=document.getElementById("input1").value;
        document.getElementById("spa1").innerText=input;
        
        let totalval1=(input*9/5)+32;
        document.getElementById("spa2").innerText=totalval1;

        let totalval2=(input*1)+273.15;
        document.getElementById("spa3").innerText=totalval2;
    }
    else if (item1 == 2) {

        const input=document.getElementById("input1").value;
        document.getElementById("spa2").innerText=input;
        
        let totalval1=(input - 32) * 5/9;
        document.getElementById("spa1").innerText=totalval1;

        let totalval2=(input - 32) * 5 / 9 + 273.15;
        document.getElementById("spa3").innerText=totalval2;
    }
    else if (item1 == 3) {

        const input=document.getElementById("input1").value;
        let totalval= input - 273.15;
        document.getElementById("spa1").innerText=totalval;
        
        let totalval1=(input - 273.15) * 1.8 + 32;
        document.getElementById("spa2").innerText=totalval1;

        document.getElementById("spa3").innerText=input;
    }else{
        alert("Select Correct Option")
    }
    

}