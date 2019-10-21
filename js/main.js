//----------------------------- Barbanian > -----------------------------

document.getElementById('btn').addEventListener("click", function(){
var imag = document.getElementById('imag');
var imag_1 = document.getElementById('imag_1');
    if(imag.style.display == "non")
        {
            imag.style.display = "block";
        }
    else
    {
            imag.style.display = "none";
            imag_1.style.display = "block";
    }
        
});

//----------------------------- Knight > -----------------------------

document.getElementById('btn_2').addEventListener("click", function(){
var imag_1 = document.getElementById('imag_1');
var imag_2 = document.getElementById('imag_2');
    if(imag_1.style.display == "non")
        {
            imag_1.style.display = "block";
        }
    else
    {
            imag_1.style.display = "none";
            imag_2.style.display = "block";
    }
        
});

//--------------------------------- giant > -------------------------

document.getElementById('btn_4').addEventListener("click", function(){
var imag_2 = document.getElementById('imag_2');
var imag = document.getElementById('imag');
    if(imag_2.style.display == "non")
        {
            imag_2.style.display = "block";
        }
    else
    {
            imag_2.style.display = "none";
            imag.style.display = "block";
    }
        
});

//----------------------------- Barbanian < -----------------------------

document.getElementById('btn_1').addEventListener("click", function(){
var imag = document.getElementById('imag');
var imag_2 = document.getElementById('imag_2');
    if(imag.style.display == "none")
        {
            imag.style.display = "block";
        }
        else
        {
            imag.style.display = "none";
            imag_2.style.display = "block";
        }
});

//--------------------------------- giant < -------------------------

document.getElementById('btn_5').addEventListener("click", function(){
var imag_2 = document.getElementById('imag_2');
var imag_1 = document.getElementById('imag_1');
    if(imag_2.style.display == "non")
        {
            imag_2.style.display = "block";
        }
    else
    {
            imag_2.style.display = "none";
            imag_1.style.display = "block";
    }
        
});

//------------------------------- Knight < ---------------------------

document.getElementById('btn_3').addEventListener("click", function(){
var imag_1 = document.getElementById('imag_1');
var imag = document.getElementById('imag');
    if(imag_1.style.display == "non")
        {
            imag_1.style.display = "block";
        }
    else
    {
            imag_1.style.display = "none";
            imag.style.display = "block";
    }
        
});

