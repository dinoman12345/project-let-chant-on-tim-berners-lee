function Login_account(){
    x = document.getElementById("user_name").value;
    x2 = document.getElementById("type").value;
    localStorage.setItem("User_name",x);
    localStorage.setItem("Type",x2);
    window.location="index2.html";
}
function enter(){
    document.getElementById("user_name").style.display = "inline-block";
    document.getElementById("login").style.display = "inline-block";
    document.getElementById("type").style.display = "inline-block";
}
