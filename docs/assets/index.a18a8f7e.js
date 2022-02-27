import{d as O,o as l,c as d,a as e,w as j,b as ae,p as Y,e as K,u as M,_ as U,r as h,f as F,F as A,g as Q,t as _,n as b,h as ie,i as S,j as C,k as oe,l as T,m as V,R as ne,q as re,s as le,v as ue,x as de,y as ce,z as pe,A as ve,B as me,C as he,D as fe,E as _e}from"./vendor.1bdc2fd1.js";const ge=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};ge();const W=[{id:1,date:"2022-2-20",title:"Quelle est l'ann\xE9e de cr\xE9ation de twitch&nbsp;?",answer:2011,linkForMore:"https://fr.wikipedia.org/wiki/Twitch",attemptLimit:4},{id:2,date:"2022-2-21",title:"Combien existe-t-il de langues dans le monde&nbsp;? (en centaines ou milliers)",answer:7e3,linkForMore:"https://1to1progress.fr/blog/2021/04/30/combien-de-langues-dans-le-monde/",attemptLimit:5},{id:3,date:"2022-2-22",title:"Quelle est l'ann\xE9e de fondation de la ville de New\u2011York&nbsp;?",answer:1624,linkForMore:"https://fr.wikipedia.org/wiki/New_York",attemptLimit:6},{id:4,date:"2022-2-23",title:"Combien existe-t-il de constellations astronomiques&nbsp;?",answer:88,linkForMore:"https://fr.wikipedia.org/wiki/Liste_des_constellations",attemptLimit:4},{id:5,date:"2022-2-24",title:"Quelle est la hauteur de la Tour Eiffel&nbsp;? (en m\xE8tres)",answer:324,linkForMore:"https://fr.wikipedia.org/wiki/Tour_Eiffel",attemptLimit:6},{id:6,date:"2022-2-25",title:"Quel est le plus gros QI du monde&nbsp;?",answer:230,linkForMore:"https://fr.wikipedia.org/wiki/Quotient_intellectuel#Records",attemptLimit:5},{id:7,date:"2022-2-26",title:"Combien d'\xE9pisodes poss\xE8de la plus longue s\xE9rie termin\xE9e au monde&nbsp;?",answer:18262,linkForMore:"https://fr.wikipedia.org/wiki/Haine_et_Passion",attemptLimit:10},{id:8,date:"2022-2-27",title:"Combien d'os poss\xE8de un corps humain adulte&nbsp;?",answer:206,linkForMore:"https://fr.wikipedia.org/wiki/Squelette_humain",attemptLimit:4},{id:9,date:"2022-2-28",title:"Combien de temps la lumi\xE8re du soleil met-elle pour nous parvenir&nbsp;? (en minutes)",answer:8,linkForMore:"https://fr.wikipedia.org/wiki/Vitesse_de_la_lumi%C3%A8re",attemptLimit:4},{id:10,date:"2022-3-1",title:"Combien y a-t-il de signes astrologiques chinois ?",answer:12,linkForMore:"https://fr.wikipedia.org/wiki/Astrologie_chinoise",attemptLimit:3},{id:11,date:"2022-3-2",title:"Combien y a-t-il de joueurs sur le terrain dans une \xE9quipe de base-ball ?",answer:9,linkForMore:"https://fr.wikipedia.org/wiki/Baseball",attemptLimit:4},{id:12,date:"2022-3-3",title:"A combien d'ann\xE9es de mariages correspondent les noces de papier ?",answer:37,linkForMore:"https://fr.wikipedia.org/wiki/Anniversaire_de_mariage",attemptLimit:7},{id:13,date:"2022-3-4",title:"En quelle ann\xE9e Angela Merkel a-t-elle \xE9t\xE9 nomm\xE9e chanceli\xE8re d'Allemagne ?",answer:2005,linkForMore:"https://fr.wikipedia.org/wiki/Angela_Merkel",attemptLimit:4},{id:14,date:"2022-3-5",title:"Combien font un + la moiti\xE9 d'un quart de 8 ?",answer:2,linkForMore:"https://fr.wikipedia.org/wiki/2_(chiffre)",attemptLimit:2},{id:15,date:"2022-3-6",title:"Combien y a-t-il de miles \xE0 parcourir dans la course d'Indianapolis ?",answer:500,linkForMore:"https://fr.wikipedia.org/wiki/500_miles_d%27Indianapolis",attemptLimit:6},{id:16,date:"2022-3-7",title:"Combien de fois Elizabeth Taylor s'est-elle mari\xE9e ?",answer:8,linkForMore:"https://fr.wikipedia.org/wiki/Elizabeth_Taylor",attemptLimit:4},{id:17,date:"2022-3-8",title:"Quel num\xE9ro porte le d\xE9partement du Loir-et-Cher ?",answer:41,linkForMore:"https://fr.wikipedia.org/wiki/Loir-et-Cher",attemptLimit:6},{id:18,date:"2022-3-9",title:"Combien d'ann\xE9es a dur\xE9 le plus long r\xE8gne de tous les temps ?",answer:82,linkForMore:"https://fr.wikipedia.org/wiki/Sobhuza_II",attemptLimit:7},{id:19,date:"2022-3-10",title:"Combien de c\xF4t\xE9s poss\xE8de un enn\xE9agone ?",answer:9,linkForMore:"https://fr.wikipedia.org/wiki/Enn%C3%A9agone",attemptLimit:3},{id:20,date:"2022-3-11",title:"Quel chiffre effraie la plupart des habitants d'Asie de l'est ?",answer:4,linkForMore:"https://fr.wikipedia.org/wiki/T%C3%A9traphobie",attemptLimit:3}],H=s=>W.filter(a=>new Date(a.date).getTime()===new Date(s).setHours(0,0,0,0))[0],P=s=>W.filter(a=>new Date(a.date).getTime()<=new Date(s).setHours(0,0,0,0)),E=s=>`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()}`,we=s=>new Date(s.getTime()-24*60*60*1e3),ye=s=>new Date(s.getTime()+24*60*60*1e3),q=s=>Number.isInteger(s)?s:s.toFixed(2),L=O("datemode",{state:()=>({currentDate:E(new Date),datemode:!1}),getters:{getCurrentDate:s=>s.currentDate},actions:{switch(){this.datemode=!this.datemode},changeCurrentDate(s){this.currentDate=s}}});var G="/assets/cross.be0a5bfd.svg";var J=(s,a)=>{const i=s.__vccOpts||s;for(const[n,t]of a)i[n]=t;return i};const ke=s=>(Y("data-v-1f6ae8d7"),s=s(),K(),s),xe={class:"rules-container border-2 border-white rounded fixed max-w-[400px] w-5/6 h-[500px] max-h-[90vh] mx-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll hide-scroll"},be={class:"text-center p-4 text-sm"},$e=ke(()=>e("img",{class:"w-[20px] h-[20px]",src:G,alt:"croix de fermeture de modal des r\xE8gles"},null,-1)),De=[$e],Se=ae('<h2 class="font-bold text-lg my-4" data-v-1f6ae8d7>Comment \xE7a marche\xA0?</h2><p data-v-1f6ae8d7> Smart Numdle est un quiz quotidien o\xF9 vous devez trouver la bonne r\xE9ponse en un nombre de tentatives limit\xE9. </p><p data-v-1f6ae8d7>En cas de mauvaise r\xE9ponse un indice vous sera donn\xE9.</p><div class="separator" data-v-1f6ae8d7></div><p data-v-1f6ae8d7>1847 : \u{1F53A}<br data-v-1f6ae8d7>Le r\xE9sultat \xE0 trouver est plus grand.</p><div class="separator" data-v-1f6ae8d7></div><p data-v-1f6ae8d7>1400 : \u{1F53B}<br data-v-1f6ae8d7>Le r\xE9sultat \xE0 trouver est plus petit.</p><div class="separator" data-v-1f6ae8d7></div><p data-v-1f6ae8d7>Comparez ensuite votre r\xE9sultat avec vos amis\xA0!</p><p data-v-1f6ae8d7>Bonne chance\xA0!</p>',10),Ce={emits:["close"],setup(s,{emit:a}){const i=()=>{a("close","rules")};return(n,t)=>(l(),d("div",{class:"rules-modal fixed z-50 h-screen w-screen left-0 top-0",onClick:t[1]||(t[1]=j(r=>i(),["self"]))},[e("div",xe,[e("div",be,[e("div",{class:"fixed top-4 right-4 cursor-pointer",onClick:t[0]||(t[0]=r=>i())},De),Se])])]))}};var Fe=J(Ce,[["__scopeId","data-v-1f6ae8d7"]]);const I=O({id:"history",state:()=>({questionHistory:M("questionHistory",[]),bestStreak:M("bestStreak",0),currentStreak:M("currentStreak",0)}),getters:{history:s=>s.questionHistory,getTodaysQuestion:s=>s.questionHistory.filter(a=>new Date(a.date).getTime()===new Date().setHours(0,0,0,0))[0],getQuestionHistoryByDate:s=>a=>s.questionHistory.filter(i=>new Date(i.date).getTime()===new Date(a).setHours(0,0,0,0))[0],getFinishedQuestions:s=>s.questionHistory.filter(a=>a.hasFinished),getFoundQuestions:s=>s.questionHistory.filter(a=>a.hasFound)},actions:{addAttemptToQuestion(s,a,i,n){const t=this.questionHistory.filter(r=>new Date(r.date).getTime()===new Date(s.date).getTime())[0];t?(t.attempts.push(a),t.hasFound=i,t.hasFinished=n):this.questionHistory.push({id:s.id,date:s.date,attempts:[a],hasFound:i,hasFinished:n})}}});const X=s=>(Y("data-v-c915aa34"),s=s(),K(),s),Le={class:"stats-container border-2 border-white rounded fixed max-w-[400px] w-5/6 h-[500px] max-h-[90vh] mx-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll hide-scroll"},Me={class:"p-4 text-sm"},Te=X(()=>e("img",{class:"w-[20px] h-[20px]",src:G,alt:"croix de fermeture de modal des r\xE8gles"},null,-1)),qe=[Te],Ae=X(()=>e("h2",{class:"text-center font-bold text-lg my-4"},"Statistiques",-1)),Qe={class:"table-auto my-10"},He={class:"py-2 w-[70%]"},Ee={class:"py-2 text-3xl text-center"},Ie={class:"text-center mt-4"},ze={key:0},Be={key:1},Ne={emits:["close"],setup(s,{emit:a}){const{toClipboard:i}=U(),n=I(),t=h({statCurrentStreak:{title:"S\xE9rie courante de bonnes r\xE9ponses cons\xE9cutives",value:""},statBestStreak:{title:"Record de bonnes r\xE9ponses cons\xE9cutives",value:""},statAvgAttempt:{title:"Moyenne de tentatives par question termin\xE9e",value:""},statPerFound:{title:"Pourcentage de r\xE9ponses trouv\xE9es",value:""},statPerAnswered:{title:"Pourcentage de questions effectu\xE9es",value:""}}),r=h(!1),o=()=>{t.value.statCurrentStreak.value=n.currentStreak,t.value.statBestStreak.value=n.bestStreak,t.value.statAvgAttempt.value=n.getFinishedQuestions.length>0?q(n.getFinishedQuestions.reduce((c,u)=>c+u.attempts.length,0)/n.getFinishedQuestions.length):0,t.value.statPerFound.value=`${q(n.getFoundQuestions.length/P(E(new Date)).length*100)}%`,t.value.statPerAnswered.value=`${q(n.getFinishedQuestions.length/P(E(new Date)).length*100)}%`},v=async()=>{let c=`Mes statistiques Smart numdle \u{1F4CA}\r
\r
`;Object.keys(t.value).forEach(u=>{c+=`${t.value[u].title}: ${t.value[u].value}\r
`}),c+=`\r
https://smartnumdle.nitocode.com`;try{await i(c),r.value=!0}catch(u){console.error(u)}};F(()=>{o()});const y=()=>{a("close","stats")};return(c,u)=>(l(),d("div",{class:"stats-modal fixed z-50 h-screen w-screen left-0 top-0",onClick:u[2]||(u[2]=j(k=>y(),["self"]))},[e("div",Le,[e("div",Me,[e("div",{class:"fixed top-4 right-4 cursor-pointer",onClick:u[0]||(u[0]=k=>y())},qe),Ae,e("table",Qe,[e("tbody",null,[(l(!0),d(A,null,Q(Object.keys(t.value),(k,w)=>(l(),d("tr",{key:w},[e("td",He,_(t.value[k].title),1),e("td",Ee,_(t.value[k].value),1)]))),128))])]),e("div",Ie,[e("button",{class:"btn-numdle",onClick:u[1]||(u[1]=k=>v())},[r.value?(l(),d("span",Be,"Stats copi\xE9es !")):(l(),d("span",ze,"Partager mes stats"))])])])])]))}};var Re=J(Ne,[["__scopeId","data-v-c915aa34"]]),Ve="/assets/stat.3b3c9956.svg",Pe="/assets/time.ac189514.svg",Oe="/assets/rules.5cc81703.svg";const je={class:"flex justify-between items-center mx-4 mb-8 relative z-10"},Ye=e("h1",{class:"text-2xl font-mono"},"SMART NUMDLE",-1),Ke={class:"flex justify-between w-[120px]"},Ue={emits:["open"],setup(s,{emit:a}){const i=r=>{a("open",r)},n=L(),t=()=>{n.switch()};return(r,o)=>(l(),d("header",je,[Ye,e("div",Ke,[e("img",{class:"w-[32px] h-[32px] cursor-pointer",onClick:o[0]||(o[0]=v=>i("stats")),src:Ve,alt:"icone pour ouvrir les statistiques"}),e("img",{class:"w-[32px] h-[32px] cursor-pointer",onClick:o[1]||(o[1]=v=>t()),src:Pe,alt:"icone pour passer au mode historique"}),e("img",{class:"w-[32px] h-[32px] cursor-pointer",onClick:o[2]||(o[2]=v=>i("rules")),src:Oe,alt:"icone pour ouvrir les r\xE8gles du jeu"})])]))}};var We="/assets/left.8b41bb26.svg",Ge="/assets/right.ac3d04ce.svg";const Je={class:"relative z-10 flex flex-row justify-around items-center"},Xe=e("img",{class:"w-[28px] h-[28px]",src:We,alt:"left arrow image"},null,-1),Ze=[Xe],et={key:0},tt=e("img",{class:"w-[28px] h-[28px]",src:Ge,alt:"right arrow image"},null,-1),st=[tt],at={setup(s){I();const a=L(),i=h(null),n=h(null),t=h(null),r=new Date().setHours(0,0,0,0),o=()=>{n.value=new Date(a.currentDate).getTime(),i.value=new Date(a.currentDate).toLocaleDateString(),t.value=H(a.currentDate)},v=()=>{a.changeCurrentDate(ye(new Date(a.currentDate))),o()},y=()=>{a.changeCurrentDate(we(new Date(a.currentDate))),o()};return F(()=>{o()}),(c,u)=>(l(),d("div",Je,[e("div",{class:b(["cursor-pointer opacity-0",{"opacity-100":t.value&&t.value.id>1}]),onClick:u[0]||(u[0]=k=>t.value&&t.value.id>1?y():null)},Ze,2),e("div",null,[e("p",null,[ie(_(i.value)+" ",1),t.value&&t.value.id?(l(),d("span",et,"- #"+_(t.value.id),1)):S("",!0)])]),e("div",{class:b(["cursor-pointer opacity-0",{"opacity-100":n.value<C(r)}]),onClick:u[1]||(u[1]=k=>n.value<C(r)?v():null)},st,2)]))}};const it={class:"app-container text-white min-h-screen px-4 py-8"},ot={class:"max-w-[500px] mx-auto"},nt={setup(s){const a=L(),i=h({rules:{isOpen:!1},stats:{isOpen:!1}}),n=o=>{i.value[o].isOpen=!0},t=o=>{i.value[o].isOpen=!1},r=oe();return F(()=>{let o=localStorage.getItem("path");o&&(localStorage.removeItem("path"),r.push(o))}),(o,v)=>(l(),d("div",it,[i.value.rules.isOpen?(l(),T(Fe,{key:0,onClose:t})):S("",!0),i.value.stats.isOpen?(l(),T(Re,{key:1,onClose:t})):S("",!0),e("div",ot,[V(Ue,{onOpen:n}),C(a).datemode?(l(),T(at,{key:0})):S("",!0),V(C(ne))])]))}},rt={class:"text-center relative"},lt=e("canvas",{class:"fixed w-full h-full z-0 top-0 left-0",id:"confetti"},null,-1),ut={key:0,class:"relative z-10"},dt={class:"h-[50vh]"},ct=["innerHTML"],pt={class:"mt-2"},vt={key:0},mt={key:1,class:"font-bold text-amber-400"},ht={class:"h-[40px] lg:h-[20vh] overflow-scroll lg:py-10 hide-scroll"},ft=["id"],_t={key:1,class:"relative z-10"},gt={key:0},wt=e("p",{class:"text-3xl my-10"},"BRAVO\xA0!!!",-1),yt={key:1},kt=e("p",{class:"text-3xl my-10"},"Dommage\xA0!!!",-1),xt={class:"text-xl"},bt=e("p",{class:"text-sm italic mt-2"}," \xC0 demain pour une nouvelle question\xA0! ",-1),$t=e("div",{class:"separator"},null,-1),Dt={class:"text-lg mb-4"},St={class:"text-md my-4"},Ct=e("div",{class:"separator"},null,-1),Ft={key:0},Lt={key:1},Mt=e("div",{class:"separator"},null,-1),Tt=e("p",{class:"text-xl mb-2"},"En savoir plus",-1),qt=["href"],At={setup(s){const{toClipboard:a}=U(),i=I(),n=L(),t=h(null),r=h(0),o=h(0),v=h([]),y=h(),c=h(!1),u=h(!1),k=h(!1),w=h(!1),D=h(!1),$=h(!1),m=h([]);m.value=H(n.currentDate),re(()=>n.currentDate,()=>{m.value=H(n.currentDate),B()});const Z=()=>{v.value=[],o.value=0,c.value=!1,u.value=!1,D.value=!1,w.value=!1,$.value=!1,k.value=!1},B=()=>{const p=i.getQuestionHistoryByDate(n.currentDate);p?(v.value=p.attempts[0],o.value=v.value.length,c.value=p.hasFound,u.value=p.hasFinished,u.value?(D.value=!0,w.value=!0,$.value=!0):(D.value=!1,w.value=!1,$.value=!1)):Z()},ee=(p,f,g)=>{let x="\u2705";m.value.answer-p<0?x="\u{1F53B}":m.value.answer-p>0?x="\u{1F53A}":x="\u2705",v.value.push({answer:p,gap:x}),i.addAttemptToQuestion(m.value,v.value,f,g)},te=()=>{t.value({particleCount:50,startVelocity:30,spread:360,angle:0,origin:{x:.5,y:.25}})},N=()=>{const p=document.getElementById("question-text");p.ontransitionend=async f=>{f.propertyName==="opacity"&&(D.value=!0,c.value&&te(),await pe(),setTimeout(()=>{$.value=!0},1))},w.value=!0},R=()=>{y.value&&(o.value+=1,r.value=m.value.answer-y.value,r.value===0?(c.value=!0,u.value=!0,i.currentStreak++,i.currentStreak>i.bestStreak&&i.bestStreak++,N()):o.value===m.value.attemptLimit&&(c.value=!1,u.value=!0,i.currentStreak=0,N()),ee(y.value,c.value,u.value),y.value="",document.getElementById("input-answer").focus(),setTimeout(()=>{const p=document.querySelector(`#text-attempt-${v.value.length-1}`);p&&p.scrollIntoView({behavior:"smooth",block:"end"})},100))},se=async()=>{let p=`Smart numdle #${m.value.id}: ${o.value===m.value.attemptLimit&&!c.value?"\u{1F61E}":o.value}/${m.value.attemptLimit} \r
\r
`;v.value.forEach((f,g)=>{p+=`Tentative n\xB0${g+1} : ${f.gap}\r
`}),p+=`\r
https://smartnumdle.nitocode.com`;try{await a(p),k.value=!0}catch(f){console.error(f)}};return F(()=>{B();const p=document.getElementById("confetti");t.value=le(p,{resize:!0,useWorker:!0})}),(p,f)=>(l(),d("main",rt,[lt,!c.value&&!u.value||!D.value?(l(),d("div",ut,[e("div",dt,[e("div",{id:"question-text",class:b(["my-10 transition duration-1000",[{"translate-y-12 opacity-0":w.value&&c.value},{"opacity-0":w.value&&!c.value}]])},[e("h2",{class:"text-3xl",innerHTML:m.value.title},null,8,ct),e("p",pt,[m.value.attemptLimit-o.value>1?(l(),d("span",vt,"(Tentatives restantes: "+_(m.value.attemptLimit-o.value)+")",1)):(l(),d("span",mt,"(Derni\xE8re tentative\xA0!)"))])],2),e("div",{class:b(["h-[20vh] overflow-hidden transition duration-500",[{"translate-y-4 opacity-0":w.value&&c.value},{"opacity-0":w.value&&!c.value}]])},[e("div",ht,[(l(!0),d(A,null,Q(v.value,(g,x)=>(l(),d("div",{key:x},[e("p",{id:`text-attempt-${x}`,class:"text-xl lg:text-lg my-4"}," Tentative n\xB0"+_(x+1)+": "+_(g.answer)+" : "+_(g.gap),9,ft)]))),128))])],2)]),e("div",{class:b(["transition duration-1000",[{"-translate-y-24 opacity-0":w.value&&c.value},,{"opacity-0":w.value&&!c.value}]])},[ue(e("input",{id:"input-answer",class:"text-black px-4 py-2 text-xl block mx-auto","onUpdate:modelValue":f[0]||(f[0]=g=>y.value=g),type:"number",onKeyup:f[1]||(f[1]=ce(g=>R(),["enter"]))},null,544),[[de,y.value]]),e("button",{class:"btn-numdle mt-6",onClick:f[2]||(f[2]=g=>R())},"VALIDER")],2)])):(l(),d("div",_t,[e("div",{class:b(["transition duration-500 opacity-0",{"opacity-100":$.value}])},[c.value?(l(),d("div",gt,[wt,e("p",null," Vous avez trouv\xE9 la bonne r\xE9ponse en "+_(v.value.length)+"\xA0tentative"+_(v.value.length>1?"s":"")+"\xA0! ",1)])):(l(),d("div",yt,[kt,e("p",xt,"La bonne r\xE9ponse est : "+_(m.value.answer),1)])),bt],2),e("div",{class:b(["transition duration-500 delay-500 opacity-0",{"opacity-100":$.value}])},[$t,e("p",Dt,"R\xE9sum\xE9 Smart Numdle #"+_(m.value.id),1),(l(!0),d(A,null,Q(v.value,(g,x)=>(l(),d("div",{key:x},[e("p",St," Tentative n\xB0"+_(x+1)+": "+_(g.answer)+" : "+_(g.gap),1)]))),128))],2),e("div",{class:b(["transition duration-500 delay-1000 opacity-0",{"opacity-100":$.value}])},[Ct,e("div",null,[e("button",{class:"btn-numdle",onClick:f[3]||(f[3]=g=>se())},[k.value?(l(),d("span",Lt,"R\xE9sultat copi\xE9 !")):(l(),d("span",Ft,"Partager mon r\xE9sultat"))])])],2),m.value.linkForMore?(l(),d("div",{key:0,class:b(["transition duration-500 delay-1500 opacity-0",{"opacity-100":$.value}])},[Mt,e("div",null,[Tt,e("p",null,[e("a",{class:"underline break-words",href:m.value.linkForMore,target:"_blank"},_(m.value.linkForMore),9,qt)])])],2)):S("",!0)]))]))}},Qt=ve({history:me("/"),routes:[{path:"/",name:"home",component:At}]});he.polyfill();const z=fe(nt);z.use(_e());z.use(Qt);z.mount("#app");