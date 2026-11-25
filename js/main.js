const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-header .nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
    toggle.innerHTML=open?'<span></span><span></span>':'<span></span><span></span><span></span>';
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open navigation menu');
    toggle.innerHTML='<span></span><span></span><span></span>';
  }));
}
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
