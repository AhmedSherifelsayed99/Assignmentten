var signupName=document.getElementById('signupName');
var signupEmail=document.getElementById('signupEmail');
var signupPassword=document.getElementById('signupPassword');

 var userData=[];

 if(localStorage.getItem('userData')!= null){
    userData=JSON.parse(localStorage.getItem('userData'));
 }

 else{
    userData=[];
 }

function addData(){
    if (signupName.value=='' || signupEmail.value=='' || signupPassword.value=='')
    document.getElementById('massage').innerHTML=`<p class="text-center">All inputs is required</p>`
  else{
    var data ={
        name:signupName.value,
        email:signupEmail.value,
        password:signupPassword.value,
    }
    userData.push(data);
    localStorage.setItem('userData',JSON.stringify(userData))
    cleardata()
  }
}


function cleardata(){
    signupName.value='';
    signupEmail.value='';
    signupPassword.value='';
}