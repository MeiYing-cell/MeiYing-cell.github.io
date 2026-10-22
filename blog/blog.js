(() => {
  const store = {get(k){try{return localStorage.getItem(k)}catch{return null}},set(k,v){try{localStorage.setItem(k,v)}catch{}}};
  let language = store.get('bz-language-v2') === 'en' ? 'en' : 'zh';
  let theme = store.get('bz-theme') === 'dark' ? 'dark' : 'light';
  let category = new URL(location.href).searchParams.get('category') || 'all';
  let tag = new URL(location.href).searchParams.get('tag') || 'all';
  const tagSelect = document.getElementById('tag-filter');
  if(tagSelect){if(![...tagSelect.options].some(o=>o.value===tag))tag='all';tagSelect.value=tag;}
  const cards = [...document.querySelectorAll('#blog-posts .writing-card')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  if (!filters.some(b => b.dataset.filter === category)) category = 'all';
  const languageButton = document.getElementById('blog-language');
  const themeButton = document.getElementById('blog-theme');
  function applyTheme(){
    document.documentElement.dataset.theme = theme;
    themeButton.setAttribute('aria-label', language === 'en' ? `Switch to ${theme === 'light' ? 'dark' : 'light'} theme` : `切换${theme === 'light' ? '深' : '浅'}色主题`);
    document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f8f9f5' : '#161d19';
  }
  function filter(){
    cards.forEach(card=>{card.hidden=(category !== 'all' && card.dataset.category !== category)||(tag !== 'all' && !JSON.parse(card.dataset.tags).includes(tag));});
    filters.forEach(button=>{const active=button.dataset.filter===category;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    document.getElementById('blog-posts')?.classList.toggle('is-filtered',category !== 'all'||tag !== 'all');
    const count=cards.filter(card=>!card.hidden).length;
    const status=document.getElementById('filter-status');
    if(status)status.textContent=language==='en'?`${count} ${count===1?'post':'posts'}`:`${count} 篇文章`;
  }
  function render(){
    document.documentElement.lang=language==='en'?'en':'zh-CN';
    document.querySelectorAll('[data-zh]').forEach(el=>{el.innerHTML=el.dataset[language];});
    languageButton.innerHTML=language==='en'?'中<span class="divider">/</span><b>EN</b>':'<b>中</b><span class="divider">/</span>EN';
    languageButton.setAttribute('aria-label',language==='en'?'切换中文界面':'Switch interface to English');
    document.querySelector('.blog-header nav').setAttribute('aria-label',language==='en'?'Main navigation':'主导航');
    filter();applyTheme();
  }
  tagSelect?.addEventListener('change',()=>{tag=tagSelect.value;const url=new URL(location.href);if(tag==='all')url.searchParams.delete('tag');else url.searchParams.set('tag',tag);history.pushState(null,'',url);filter();});
  filters.forEach(button=>button.addEventListener('click',()=>{
    category=button.dataset.filter;const url=new URL(location.href);
    if(category==='all')url.searchParams.delete('category');else url.searchParams.set('category',category);
    history.pushState(null,'',url);filter();
  }));
  window.addEventListener('popstate',()=>{const value=new URL(location.href).searchParams.get('category')||'all';category=filters.some(b=>b.dataset.filter===value)?value:'all';tag=new URL(location.href).searchParams.get('tag')||'all';if(tagSelect){if(![...tagSelect.options].some(o=>o.value===tag))tag='all';tagSelect.value=tag;}filter();});
  languageButton.addEventListener('click',()=>{language=language==='en'?'zh':'en';store.set('bz-language-v2',language);render();});
  themeButton.addEventListener('click',()=>{theme=theme==='light'?'dark':'light';store.set('bz-theme',theme);applyTheme();});
  const toc=document.querySelector('.article-toc details');
  if(toc&&matchMedia('(max-width:700px)').matches)toc.open=false;
  const body=document.querySelector('.article-body');
  function progress(){
    const start=body?body.getBoundingClientRect().top+scrollY:0;
    const end=body?start+body.offsetHeight-innerHeight:document.documentElement.scrollHeight-innerHeight;
    const value=end>start?Math.min(100,Math.max(0,(scrollY-start)/(end-start)*100)):0;
    document.querySelector('.reading-progress').style.width=`${value}%`;
    if(body){
      const headings=[...body.querySelectorAll('h2[id]')];
      let active=headings[0]?.id;
      headings.forEach(h=>{if(h.getBoundingClientRect().top<160)active=h.id;});
      document.querySelectorAll('.article-toc a').forEach(a=>{const selected=a.hash==='#'+active;a.classList.toggle('active',selected);if(selected)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
    }
  }
  let queued=false;
  window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(()=>{progress();queued=false;});}},{passive:true});
  window.addEventListener('resize',progress);
  render();progress();
})();
