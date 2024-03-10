
var navlinks=document.getElementById("nav-links");
var o=document.getElementById("open");
var c=document.getElementById("close");
function s_menu()
{
    navlinks.style.display="block";
    o.style.display="none";
    c.style.display="block";

}
function h_menu()
{
    navlinks.style.display="none";
    o.style.display="block"
    c.style.display="none";

}

function popup_close()
{
    let popup=document.getElementById("popup");
    popup.style.display="none";
}

// function button_close()
// {
//     if(validate)
//     {
//         let login = document.getElementById('l-btn');
//         let sign = document.getElementById('s-btn');
//         login.style.display="none";
//         sign.style.display="none"
//     }
// }

function validate()
{
    var u=document.getElementById("username").value;
    var p=document.getElementById("password").value;

    var moin_username="moin";
    var moin_password="moin";
    var moin=(moin_username===u&&moin_password===p);
    
    var shyam_username="shyam";
    var shyam_password="shyam";
    var shyam=(shyam_username===u&&shyam_password===p);
    
    var aaryan_username="aaryan";
    var aaryan_password="aaryan";
    var aaryan=(aaryan_username===u&&aaryan_password===p);
    if(moin)
    {
        popup_close();
        alert("LOGIN SUCCESSFUL");
    }
    else if(shyam)
    {
        popup_close();
        alert("LOGIN SUCCESSFUL");
    }
    // else if(abdul)
    // {
    //     popup_close();
    //     alert("LOGIN SUCCESSFUL");
    // }
    else if(aaryan)
    {
        popup_close();
        alert("LOGIN SUCCESSFUL");
    }
    else{
        alert("LOGIN FAILED, PLEASE TRY AGAIN");
        return false;
    }
}
// window.addEventListener("click",function()
// {
//     if(event.target===popup)
//     {
//     document.getElementById("popup").style.display="none";
//     }
// });

var login = document.getElementById("l-btn")

login.addEventListener("click",function()
{
    let popup=document.getElementById("popup");
    popup.style.display="block";
});

var sign = document.getElementById("s-btn")

sign.addEventListener("click",function()
{
    let popup=document.getElementById("popup");
    popup.style.display="block";
});

var content = document.querySelector("onlogin-btn");
content.addEventListener('click', function()
{
    let popup=document.getElementById("popup");
    popup.style.display="block";
    alert("TO ACCESS THE CONTENT OF CATALOG YOU WILL HAVE TO SIGN IN");
});


// window.addEventListener("load",function()
// {
//     setTimeout(function()
//     {document.getElementById("popup").style.display="block";},3000);
// });


//     window.addEventListener("load", function() {
//     setTimeout(function() {
//         document.getElementById("popup").style.display = "block";
//     }, 3000);
// });
// setTimeout(function()
// {
//     if(!delay)
//     {
//     document.getElementById("popup").style.display = "block";
//     delay=true;
//     }
// },3000);