// PAGE SWITCH
function showPage(id,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.nav button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

// CURSOR
const cursor=document.getElementById('cursor');
document.addEventListener('mousemove',e=>{
  cursor.style.left=e.pageX+'px';
  cursor.style.top=e.pageY+'px';
});

// DOWNLOAD RESUME
function downloadResume(){
  window.open("portfolio_template.pdf");
}
