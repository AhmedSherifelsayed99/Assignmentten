var userData=[];
userData=JSON.parse(localStorage.getItem('userData'));

var signinEmail=document.getElementById('signinEmail');
var signinPassword=document.getElementById('signinPassword');

document.getElementById('login').addEventListener('click' , function(eventInfo){
    if(signinEmail.value=='' || signinPassword==''){
        document.getElementById('massage').innerHTML=`<p class"text-danger">All inputs are required</p>`
    }
    else{
        checkData();
    }
})

function checkData(){
for( var i=0 ; i<userData.length ; i++)
if(signinEmail.value== userData[i].email && signinPassword.value== userData[i].password){
    var nameofUser=userData[i].name;
    localStorage.setItem('userName', nameofUser)
    location.href='../Home/index.html'
    clearData()
}
else{

}
}


function clearData(){
    signinEmail.value="";
    signinPassword.value="";
}