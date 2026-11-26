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





/* GLOBAL FLOATING WHATSAPP BUTTON */

(function () {
    if (document.querySelector('.whatsapp-float')) return;

    const style = document.createElement('style');

    style.textContent = `
        .whatsapp-float {
            position: fixed;
            right: 25px;
            bottom: 25px;
            width: 58px;
            height: 58px;
            background: #25D366;
            color: #fff !important;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            z-index: 999999;
            box-shadow: 0 5px 20px rgba(37,211,102,.35);
            transition: all .3s ease;
            text-decoration: none !important;
        }

        .whatsapp-float:hover {
            background: #1ebe5d;
            transform: translateY(-5px) scale(1.06);
            box-shadow: 0 8px 25px rgba(37,211,102,.45);
        }

        .whatsapp-float svg {
            width: 30px;
            height: 30px;
        }

        @media(max-width:600px) {
            .whatsapp-float {
                width: 52px;
                height: 52px;
                right: 18px;
                bottom: 18px;
            }
        }
    `;

    document.head.appendChild(style);

    const whatsapp = document.createElement('a');

    whatsapp.className = 'whatsapp-float';

    whatsapp.href =
        'https://wa.me/8801738446515?text=Hello%20Shuvo!%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project%20or%20collaboration%20opportunity%20with%20you.';

    whatsapp.target = '_blank';
    whatsapp.rel = 'noopener noreferrer';
    whatsapp.setAttribute('aria-label', 'Chat with me on WhatsApp');
    whatsapp.title = 'Chat with me on WhatsApp';

    whatsapp.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="currentColor"
             aria-hidden="true">
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.16 1.6 5.98L.12 24l6.3-1.65a11.85 11.85 0 0 0 5.68 1.45h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 0 0-3.47-8.44ZM12.1 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.74.98.99-3.65-.23-.37a9.87 9.87 0 0 1-1.52-5.29c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.01c0 5.47-4.45 9.92-9.93 9.92Z"/>
            <path d="M17.54 14.37c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.89 1.23 3.09.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"/>
        </svg>
    `;

    document.body.appendChild(whatsapp);
})();
