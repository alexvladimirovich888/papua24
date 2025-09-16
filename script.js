
window.addEventListener('load', ()=>{
  // falling decorations: palm tree, hut, drum, wave
  const symbols = ["🌴","🛖","🥁","🌊"];
  const container = document.getElementById('falling');
  const COUNT = 20;
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  for(let i=0;i<COUNT;i++){
    const el = document.createElement('div');
    el.className = 'fall';
    el.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    const size = 18 + Math.random()*30;
    el.style.fontSize = size + 'px';
    el.style.left = Math.random() * (vw - 40) + 'px';
    el.style.top = (-50 - Math.random()*400) + 'px';
    container.appendChild(el);

    const duration = 6 + Math.random()*7;
    const delay = Math.random()*3;
    el.animate([
      { transform: 'translateY(0px) rotate(0deg)', opacity:1 },
      { transform: 'translateY(' + (window.innerHeight + 200) + 'px) rotate(' + ((Math.random()>0.5?1:-1)*(90+Math.random()*220)) + 'deg)', opacity:0.8 }
    ], { duration: duration*1000, iterations: Infinity, delay: delay*1000, easing:'linear' });
  }
});
