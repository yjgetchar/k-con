(() => {
  'use strict';
  const slides=[...document.querySelectorAll('.slide')];
  if(!slides.length)return;
  const previous=document.getElementById('previous'),next=document.getElementById('next');
  const readHash=()=>{const n=Number.parseInt(location.hash.slice(1),10);return Number.isFinite(n)?Math.min(slides.length-1,Math.max(0,n-1)):0;};
  const picker=document.getElementById('design-picker');
  const toggle=document.getElementById('design-toggle');
  if(picker){
    document.addEventListener('click',e=>{if(picker.open&&!picker.contains(e.target))picker.open=false;});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&picker.open){picker.open=false;toggle.focus();}});
  }
  let index=readHash();
  function show(value,updateURL=true){
    index=Math.min(slides.length-1,Math.max(0,value));
    slides.forEach((slide,i)=>{slide.classList.toggle('active',i===index);slide.inert=i!==index;slide.setAttribute('aria-hidden',String(i!==index));});
    document.getElementById('slide-count').innerHTML=String(index+1).padStart(2,'0')+' <i>/ '+String(slides.length).padStart(2,'0')+'</i>';
    document.getElementById('current-title').textContent=slides[index].dataset.title;
    document.getElementById('deck-progress').style.width=((index+1)/slides.length*100)+'%';
    previous.disabled=index===0;next.disabled=index===slides.length-1;
    document.querySelectorAll('[data-design-link]').forEach(link=>{link.setAttribute('href',link.getAttribute('href').split('#')[0]+'#'+(index+1));});
    if(updateURL)history.replaceState(null,'','#'+(index+1));
  }
  previous.addEventListener('click',()=>show(index-1));next.addEventListener('click',()=>show(index+1));
  document.addEventListener('keydown',e=>{
    if(picker?.open)return;
    if(e.altKey||e.ctrlKey||e.metaKey||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;
    if(e.key===' '&&e.target.closest('button,a'))return;
    if(['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)){e.preventDefault();show(index+1);}
    if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){e.preventDefault();show(index-1);}
    if(e.key==='Home'){e.preventDefault();show(0);}if(e.key==='End'){e.preventDefault();show(slides.length-1);}
  });
  let touch=null;const canvas=document.querySelector('.canvas');
  canvas.addEventListener('touchstart',e=>{touch={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};},{passive:true});
  canvas.addEventListener('touchend',e=>{if(!touch)return;const dx=e.changedTouches[0].clientX-touch.x,dy=e.changedTouches[0].clientY-touch.y;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.5)show(index+(dx<0?1:-1));touch=null;},{passive:true});
  addEventListener('hashchange',()=>show(readHash(),false));show(index,false);
})();
