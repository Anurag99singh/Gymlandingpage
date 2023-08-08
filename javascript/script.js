 var btn1= document.querySelector("#btn1");
 let flag=0;

btn1.addEventListener("click", function()
{   if(flag==0)
    { btn1.style.backgroundColor="white";
    btn1.style.color="black";
    flag=1;
    } else
    { btn1.style.backgroundColor="black";
    btn1.style.color="white";
    flag=0;
        
    }
   
});
