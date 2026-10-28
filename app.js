const translations = {
  en: {
    skip:'Skip to content',navBlog:'Blog',writingTitle:'Latest writing',allPosts:'All posts',writingIntro:'Notes on algorithms, LLMs, and learning along the way.',navEducation:'Education',navAbout:'About',navExperience:'Experience',navResearch:'Research',navContact:'Contact',heroLabel:'2027 GRADUATE · OPEN TO OPPORTUNITIES',heroTitle:'Algorithms in practice.<br><em>Reasoning</em> in research.',heroDescription:'Master’s student at Sun Yat-sen University.<br>Algorithm experience at Tencent, NetEase AI Lab, and iFLYTEK.',downloadCV:'Download CV',exploreWork:'Explore my work',getInTouch:'Get in touch',overviewCareerText:'Seeking graduate roles in search, advertising, recommendation, or LLM algorithms.',overviewCareerLink:'Explore industry experience',overviewResearchText:'Exploring how neural representations and symbolic processes can work together.',overviewResearchLink:'Explore research interests',consoleFooter:'ENGINEERING + RESEARCH',careerLabel:'CAREER INTERESTS',careerFocus:'Search, ads & recommendation<br>LLM algorithms',researchLabel:'RESEARCH FOCUS',researchFocus:'Neuro-symbolic methods<br>for LLM reasoning',currentFocus:'CURRENT FOCUS',focus1:'LLM Reasoning',focus2:'Retrieval & Recommendation',focus3:'Model Post-training',aboutTitle:'A little about me',aboutLead:'Algorithm engineering in industry.<br><em>Neuro-symbolic reasoning</em> in research.',aboutBody:'I’m a master’s student in Computer Technology at Sun Yat-sen University, with a background in Software Engineering from Jilin University. My research explores neuro-symbolic methods for improving the reasoning capabilities of large language models.',aboutBody2:'My career interests span search, advertising, recommendation, and LLM algorithms. I’ve worked on recommendation at Tencent, code intelligence at NetEase AI Lab, and model post-training at iFLYTEK. These engineering experiences complement my research interests.',aboutNote:'Curious about the mechanism. Careful about the evidence.',experienceTitle:'Industry experience',experienceAside:'FROM IDEAS TO REAL SYSTEMS',researchTitle:'Neuro-symbolic LLM reasoning',researchAside:'RESEARCH INTERESTS',r1Title:'Neural–symbolic integration',r1Body:'How can symbolic structures and operations work with neural representations to support language-model reasoning?',r2Title:'Learning from symbolic processes',r2Body:'How can symbolic reasoning processes provide useful supervision for model training and internal computation?',r3Title:'Verification & generalization',r3Body:'How do we verify intermediate reasoning and evaluate generalization across reasoning depth, composition, and tasks?',publicationsTitle:'Selected publications',educationTitle:'Education',contactLabel:'LET’S CONNECT',contactTitle:'Good questions.<br><em>Better conversations.</em>',contactBody:'I’m looking for 2027 graduate opportunities in search, advertising, recommendation, and LLM algorithms. I also welcome research discussions.',copyEmail:'COPY EMAIL',footerNote:'A work in progress, just like research.',backTop:'BACK TO TOP',detailLabel:'A closer look',copied:'Copied',copyFailed:'Please copy the email above.',themeDark:'Switch to dark theme',themeLight:'Switch to light theme'
  },
  zh: {
    skip:'跳至正文',navBlog:'博客',writingTitle:'最新文章',allPosts:'全部文章',writingIntro:'记录算法与大模型实践，也记录技术之外的思考。',navEducation:'教育',navAbout:'关于',navExperience:'经历',navResearch:'研究',navContact:'联系',heroLabel:'2027 届秋招 · 求职中',heroTitle:'算法工程实践，<br><em>神经符号推理。</em>',heroDescription:'中山大学计算机技术硕士在读。<br>曾在腾讯、网易 AI Lab 与科大讯飞参与算法研发。',downloadCV:'下载简历',exploreWork:'了解我的工作',getInTouch:'联系我',overviewCareerText:'正在寻找 2027 届校招全职机会，关注搜广推算法与大模型算法岗位。',overviewCareerLink:'查看实习与工作经历',overviewResearchText:'探索神经网络表征与符号推理过程的结合。',overviewResearchLink:'了解研究兴趣',consoleFooter:'工程实践 + 科研探索',careerLabel:'职业方向',careerFocus:'搜广推算法 · 大模型算法',researchLabel:'研究方向',researchFocus:'神经符号方法<br>提升 LLM 推理能力',currentFocus:'关注方向',focus1:'大模型推理',focus2:'检索与推荐',focus3:'模型后训练',aboutTitle:'关于我',aboutLead:'在工程中探索算法应用，<br><em>在研究中探索神经符号推理。</em>',aboutBody:'我是朱波，目前在中山大学攻读计算机技术硕士，本科毕业于吉林大学软件工程专业。我的研究方向是通过神经符号方法提升大语言模型的推理能力，关注神经网络与符号推理的结合。',aboutBody2:'职业方向上，我同时关注搜广推算法与大模型算法，曾在腾讯参与推荐算法、在网易 AI Lab 探索代码智能、在科大讯飞参与模型后训练。我希望兼顾实际系统中的算法问题与模型推理机制的研究。',aboutNote:'对机制保持好奇，对证据保持严谨。',experienceTitle:'实习与工作经历',experienceAside:'从研究想法到真实系统',researchTitle:'神经符号与大模型推理',researchAside:'研究兴趣',r1Title:'神经与符号的结合',r1Body:'如何将符号结构和运算融入神经网络表征与计算，支持语言模型的推理过程？',r2Title:'从符号过程学习',r2Body:'如何利用符号推理过程提供训练信号，帮助模型学习推理步骤与内部计算？',r3Title:'验证与泛化',r3Body:'如何验证推理中的中间状态，并评估模型在推理深度、组合结构与不同任务上的泛化能力？',publicationsTitle:'代表性论文',educationTitle:'教育背景',contactLabel:'一起交流',contactTitle:'从一个好问题，<br><em>开始一次好交流。</em>',contactBody:'正在寻找 2027 届搜广推算法与大模型算法的校招全职机会。欢迎招聘沟通，也欢迎研究交流。',copyEmail:'复制邮箱',footerNote:'持续探索，持续更新。',backTop:'回到顶部',detailLabel:'展开技术细节',copied:'已复制',copyFailed:'请复制上方邮箱地址。',themeDark:'切换深色主题',themeLight:'切换浅色主题'
  }
};
const profile = window.PROFILE;
const safeStore = {get(k){try{return localStorage.getItem(k)}catch{return null}},set(k,v){try{localStorage.setItem(k,v)}catch{}}};
const languagePreferenceKey = 'bz-language-v2';
let language = safeStore.get(languagePreferenceKey) === 'en' ? 'en' : 'zh';
let theme = safeStore.get('bz-theme') === 'dark' ? 'dark' : 'light';
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function render(){
  const t=translations[language],i=language==='en'?0:1;
  document.documentElement.lang=language==='en'?'en':'zh-CN';
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=t[el.dataset.i18n]||'';});
  document.getElementById('language').innerHTML=language==='en'?'中<span class="divider">/</span><b>EN</b>':'<b>中</b><span class="divider">/</span>EN';
  document.getElementById('language').setAttribute('aria-label',language==='en'?'Switch to Chinese':'Switch to English');
  document.querySelector('nav').setAttribute('aria-label',language==='en'?'Main navigation':'主导航');
  document.querySelector('meta[name="description"]').content=language==='en'?'Bo Zhu — Algorithm engineering in search, recommendation and LLMs. Research in neuro-symbolic methods for LLM reasoning.':'朱波，中山大学硕士在读。职业方向为搜广推算法与大模型算法，研究通过神经符号方法提升 LLM 推理能力。';
  document.title=language==='en'?'Bo Zhu (朱波) | Sun Yat-sen University':'朱波 Bo Zhu｜中山大学｜算法与大模型研究';
  document.getElementById('experience-list').innerHTML=profile.experience.map(x=>`<article class="experience-row"><div class="experience-company"><span class="company-icon ${escapeHTML(x.logoClass)}"><img src="${escapeHTML(x.logo)}" alt="${escapeHTML(x.logoAlt||(x.team.startsWith('Yuanbao')?'Tencent Yuanbao':x.company))} logo" width="96" height="52" loading="lazy"></span><div><h3 class="company-name">${escapeHTML(i?x.companyZh:x.company)}</h3><div class="company-team">${escapeHTML(i?x.teamZh:x.team)}</div></div></div><div><div class="experience-role"><h3>${escapeHTML(x.role[i])}</h3><span class="experience-date">${escapeHTML(x.dates[i])}</span></div><p class="experience-intro">${escapeHTML(x.intro[i])}</p><p class="experience-body">${escapeHTML(x.body[i])}</p><div class="tags">${x.tags.map(tag=>`<span class="tag">${escapeHTML(tag)}</span>`).join('')}</div><details><summary>${t.detailLabel}</summary><ul>${x.details.map(d=>`<li>${escapeHTML(d[i])}</li>`).join('')}</ul></details></div></article>`).join('');
  document.getElementById('education-list').innerHTML=profile.education.map(x=>`<article class="education-row"><span class="university-icon"><img src="${escapeHTML(x.logo)}" alt="${escapeHTML(x.school[i])} ${i?'校徽':'crest'}" width="72" height="72" loading="lazy"></span><div class="school-info"><div class="school-heading"><h3>${escapeHTML(x.school[i])}</h3><time>${escapeHTML(x.dates[i])}</time></div><p>${escapeHTML(x.degree[i])}</p></div></article>`).join('');
  const published=profile.publications.filter(p=>p.published===true);
  document.getElementById('publications').hidden=!published.length;
  document.getElementById('publication-list').replaceChildren();
  published.forEach(p=>{const article=document.createElement('article');article.className='publication';const title=document.createElement('h3');title.textContent=p.title;const meta=document.createElement('p');meta.textContent=[p.authors,p.venue,p.year].filter(Boolean).join(' · ');article.append(title,meta);if(p.url&&/^https?:\/\//.test(p.url)){const a=document.createElement('a');a.href=p.url;a.textContent=i?'阅读论文 ↗':'Read paper ↗';a.target='_blank';a.rel='noopener noreferrer';article.append(a);}document.getElementById('publication-list').append(article);});
  let sectionNumber=0;
  document.querySelectorAll('main > section').forEach(section=>{const label=section.querySelector('.section-label > .mono');if(label&&!section.hidden)label.textContent=String(++sectionNumber).padStart(2,'0')+' /';});
  const cv=document.getElementById('download-cv');cv.href=profile.resume[language];cv.download=language==='en'?'Bo_Zhu_CV_en.pdf':'Bo_Zhu_CV_zh.pdf';
  document.getElementById('email-link').href='mailto:'+profile.email;
  document.getElementById('email-link').firstChild.textContent=profile.email+' ';
  document.getElementById('copy-status').textContent='';
  document.querySelectorAll('#writing [data-zh]').forEach(el=>{el.textContent=el.dataset[language];});
  applyTheme();
}
function applyTheme(){document.documentElement.dataset.theme=theme;document.getElementById('theme').setAttribute('aria-label',translations[language][theme==='light'?'themeDark':'themeLight']);document.querySelector('meta[name="theme-color"]').content=theme==='light'?'#f8f9f5':'#161d19';}
document.getElementById('language').addEventListener('click',()=>{language=language==='en'?'zh':'en';safeStore.set(languagePreferenceKey,language);render();});
document.getElementById('theme').addEventListener('click',()=>{theme=theme==='light'?'dark':'light';safeStore.set('bz-theme',theme);applyTheme();});
document.getElementById('copy-email').addEventListener('click',async()=>{try{if(!navigator.clipboard)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(profile.email);document.getElementById('copy-status').textContent=translations[language].copied;}catch{document.getElementById('copy-status').textContent=translations[language].copyFailed;}});
document.getElementById('year').textContent=new Date().getFullYear();
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.reading-progress').style.width=(max>0?scrollY/max*100:0)+'%';},{passive:true});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}});},{rootMargin:'-15% 0px -55% 0px'});
document.querySelectorAll('main>section[id]').forEach(section=>observer.observe(section));
render();

const profileConsole=document.querySelector('.profile-console');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if(profileConsole){
 profileConsole.addEventListener('pointermove',event=>{
  if(reducedMotion.matches||event.pointerType==='touch')return;
  const box=profileConsole.getBoundingClientRect(),x=(event.clientX-box.left)/box.width,y=(event.clientY-box.top)/box.height;
  profileConsole.style.setProperty('--glow-x',`${x*100}%`);profileConsole.style.setProperty('--glow-y',`${y*100}%`);
  profileConsole.style.transform=`perspective(1200px) rotateX(${(0.5-y)*3}deg) rotateY(${(x-0.5)*3}deg)`;
 });
 profileConsole.addEventListener('pointerleave',()=>{profileConsole.style.transform='';profileConsole.style.setProperty('--glow-x','75%');profileConsole.style.setProperty('--glow-y','15%');});
}
