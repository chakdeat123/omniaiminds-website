
const navToggle = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(navToggle){navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));}

document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>navLinks?.classList.remove('open'));
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

function handleContactForm(form){
  const data = new FormData(form);
  const subject = encodeURIComponent('Website enquiry - OmniAIMinds');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nWork Email: ${data.get('email')}\nCompany: ${data.get('company') || ''}\nService: ${data.get('service') || ''}\n\nMessage:\n${data.get('message')}`
  );
  window.location.href = `mailto:hello@ominiaiminds.com?subject=${subject}&body=${body}`;
  return false;
}
