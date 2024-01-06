document.getElementById('userName').innerHTML=localStorage.getItem('userName');

document.getElementById('logbtn').addEventListener('click', function(eventInfo){
localStorage.removeItem('userName')
location.href='../Login/index.html'
})