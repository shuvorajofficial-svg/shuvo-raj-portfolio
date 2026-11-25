
(()=>{const overlay=document.querySelector('.page-wipe');if(!overlay)return;
document.querySelectorAll('a[href]').forEach(link=>{link.addEventListener('click',e=>{
 const href=link.getAttribute('href');if(!href||href.startsWith('#')||href.startsWith('mailto:')||href.startsWith('tel:')||link.target==='_blank'||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
 const url=new URL(href,location.href);if(url.origin!==location.origin)return;
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 e.preventDefault();overlay.classList.add('play');setTimeout(()=>location.href=url.href,430);
});});
})();
