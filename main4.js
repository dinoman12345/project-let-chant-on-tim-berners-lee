function get_profile(){
    j = localStorage.getItem("User_name");
    document.getElementById("Name").innerHTML = "User Name - " + j;
}
function save(){
    window.location="index3.html"
}
function logout(){
    localStorage.removeItem("User_name");
    window.location="index.html";
}