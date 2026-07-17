"use client";

import { useEffect } from "react";

const research = [
  ["Проблема", "Фиксирую наблюдаемый разрыв между ожиданием и реальностью."],
  ["Почему она возникла?", "Ищу первопричину, а не маскирую симптом."],
  ["Кто с ней сталкивается?", "Определяю пользователя, контекст и частоту ситуации."],
  ["Как её решают сейчас?", "Изучаю текущий путь и вынужденные обходные сценарии."],
  ["Почему решение не работает?", "Нахожу потери времени, качества и ценности."],
  ["Какие ограничения существуют?", "Учитываю процессы, данные, риски и ресурсы."],
  ["Что действительно нужно изменить?", "Формулирую задачу, которую стоит решать."],
];

const timeline = [
  ["Проблема", "Формулируем, что именно должно измениться."], ["Исследование", "Собираем контекст и голос пользователя."],
  ["Анализ", "Находим причины и закономерности."], ["Приоритизация", "Выбираем самое ценное и рискованное."],
  ["Проектирование", "Создаём целевой сценарий и логику."], ["MVP", "Проверяем ключевую гипотезу малым объёмом."],
  ["Разработка", "Превращаем решение в устойчивый продукт."], ["Запуск", "Доставляем ценность реальным пользователям."],
  ["Метрики", "Измеряем изменение, а не факт релиза."], ["Развитие", "Учимся и запускаем следующий цикл."],
];

const approach = [
  ["Исследую проблему", "Не начинаю с готового решения."], ["Анализирую процессы", "Изучаю причины, а не симптомы."],
  ["Проектирую продукт", "Продумываю пользовательский путь и архитектуру."], ["Проверяю гипотезы", "Минимизирую риски до разработки."],
  ["Принимаю решения на основе данных", "Использую аналитику и обратную связь."], ["Развиваю продукт", "После запуска работа только начинается."],
];

const tools = ["SQL", "Аналитика данных", "LLM", "RAG", "API", "Figma", "UX", "Product Discovery", "BPMN", "Customer Journey", "Интеграции", "Roadmap"];
const toolText: Record<string,string> = {SQL:"Проверяю гипотезы на данных.","Аналитика данных":"Нахожу закономерности и точки роста.",LLM:"Усиливаю работу с неструктурированным контентом.",RAG:"Добавляю моделям проверяемый контекст.",API:"Соединяю продукт с экосистемой.",Figma:"Быстро делаю решение видимым.",UX:"Убираю трение из пользовательского пути.","Product Discovery":"Проверяю, что мы решаем нужную задачу.",BPMN:"Вижу процесс целиком и нахожу узкие места.","Customer Journey":"Связываю шаги пользователя с его опытом.",Интеграции:"Создаю единый работающий контур.",Roadmap:"Синхронизирую движение с ценностью."};

function Flow({items, accent=false}:{items:string[],accent?:boolean}) { return <div className={`flow ${accent?"accent":""}`}>{items.map((x,i)=><div className="flowItem reveal" style={{"--delay":`${i*70}ms`} as React.CSSProperties} key={x}><span>{x}</span>{i<items.length-1&&<i>↓</i>}</div>)}</div> }
function SectionTitle({children}:{kicker:string,children:React.ReactNode}) { return <div className="sectionTitle reveal"><h2>{children}</h2></div> }

export default function Home(){
  useEffect(()=>{const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));return()=>obs.disconnect()},[]);
  const scrollSection=(direction:number)=>{const sections=Array.from(document.querySelectorAll<HTMLElement>("main > section"));const current=window.scrollY+window.innerHeight*.35;const index=sections.findIndex(section=>section.offsetTop>current);const targetIndex=direction>0?(index===-1?sections.length-1:index):Math.max(0,(index===-1?sections.length:index)-2);sections[targetIndex]?.scrollIntoView({behavior:"smooth",block:"start"})};
  return <main>
    <header className="nav"><nav><a href="#method">Подход</a><a href="#cases">Кейсы</a><a href="#about">Обо мне</a></nav><a className="navContact" href="#contact">Связаться <span>↓</span></a></header>
    <aside className="sectionArrows" aria-label="Навигация между секциями"><button onClick={()=>scrollSection(-1)} aria-label="Предыдущая секция">↑</button><button onClick={()=>scrollSection(1)} aria-label="Следующая секция">↓</button></aside>

    <section className="hero" id="top"><div className="heroCopy reveal"><h1>От проблемы —<br/>к работающему<br/><em>продукту.</em></h1><p className="lead">Продукты создаются не функциями, а правильными решениями. Именно поэтому я начинаю с понимания проблемы.</p><a className="primary" href="#method">Посмотреть мой подход <span>↓</span></a></div><div className="heroMap" aria-label="Путь от проблемы к продукту"><div className="orbit o1"/><div className="orbit o2"/><div className="mapNode problem">Проблема</div><div className="mapLine"/><div className="mapNode product">Продукт</div><i className="spark s1"/><i className="spark s2"/><i className="spark s3"/></div></section>

    <section className="compare section gray" id="method"><SectionTitle kicker="01 · С чего начинается результат">Почему многие проекты не приносят<br/>ожидаемого результата?</SectionTitle><div className="compareGrid"><article className="panel reveal"><small>Типичный подход</small><Flow items={["Идея","Функции","Разработка","Запуск"]}/></article><article className="panel blue reveal"><small>Мой подход</small><Flow accent items={["Проблема","Анализ","Решение","Продукт"]}/></article></div><p className="sectionNote reveal">Большинство команд начинают с реализации идеи или выбора технологий. <b>Я начинаю с понимания проблемы и поиска лучшего решения.</b></p></section>

    <section className="section research"><SectionTitle kicker="02 · Исследование">Каждая проблема<br/>имеет причину.</SectionTitle><div className="researchLine">{research.map(([t,d],i)=><article className="researchStep reveal" style={{"--delay":`${i*55}ms`} as React.CSSProperties} key={t}><div className="stepMarker">{String(i+1).padStart(2,"0")}</div><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="section gray options"><SectionTitle kicker="03 · Выбор">Хороший анализ рождает<br/>несколько вариантов решения.</SectionTitle><div className="branch reveal"><div className="branchTop"><span>Проблема</span><i>↓</i><span className="blueNode">Анализ</span></div><div className="variants"><span>Вариант A</span><span>Вариант B</span><span>Вариант C</span></div><div className="branchBottom"><i>↓</i><span>Оценка</span><i>↓</i><span className="blueNode">Лучшее решение</span><i>↓</i><span>MVP</span><i>↓</i><span>Разработка</span></div></div><p className="sectionNote reveal">Первое решение редко бывает лучшим. Сначала нужно оценить альтернативы, риски, стоимость и ожидаемый эффект.</p></section>

    <section className="section ai"><SectionTitle kicker="04 · Технологии">ИИ — это инструмент,<br/>а не решение.</SectionTitle><div className="compareGrid aiGrid"><article className="panel reveal"><small>Типичный подход</small><Flow items={["Нужен ИИ","Выбираем модель","Разработка","Запуск","Почему результат не оправдал ожиданий?"]}/></article><article className="panel blue reveal"><small>Мой подход</small><Flow accent items={["Проблема","Анализ процессов","Поиск узких мест","Определение роли ИИ","Выбор технологии","Разработка","Измерение результата"]}/></article></div><p className="sectionNote reveal">ИИ не делает продукт успешным сам по себе. <b>Он становится ценным только тогда, когда решает конкретную задачу пользователя или бизнеса.</b></p></section>

    <section className="section system gray"><SectionTitle kicker="05 · Системное мышление">Любой продукт —<br/>это система.</SectionTitle><div className="systemMap reveal"><div className="systemCore">Проблема<small>центр системы</small></div>{[["Пользователь","Потребность и контекст"],["Бизнес","Ценность и экономика"],["Процессы","Как работает система"],["Данные","Основа решений"],["Интеграции","Связь сервисов"],["Интерфейс","Точка взаимодействия"],["Метрики","Измеримый эффект"],["ИИ","Инструмент усиления"]].map(([t,d],i)=><div className={`systemNode n${i+1}`} tabIndex={0} key={t}><b>{t}</b><small>{d}</small></div>)}</div><p className="sectionNote reveal">Нельзя проектировать продукт, рассматривая только одну его часть. <b>Все элементы влияют друг на друга.</b></p></section>

    <section className="section timeline"><SectionTitle kicker="06 · Delivery">От идеи к работающему<br/>продукту.</SectionTitle><div className="timelineList">{timeline.map(([t,d],i)=><article className="timelineItem reveal" key={t}><span>{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="statement"><div className="reveal"><h2>Каждый продукт начинается<br/>с правильного <em>вопроса.</em></h2><p>Хорошие решения появляются не случайно.<br/>Они рождаются из анализа, проверки гипотез и понимания того, какую проблему действительно нужно решить.</p></div></section>

    <section className="section cases gray" id="cases"><SectionTitle kicker="07 · Практика">Кейсы.</SectionTitle><article className="case heroCase reveal"><div className="caseCopy"><span className="caseNum">01</span><h3>Снижение нагрузки на техническую поддержку</h3><dl><div><dt>Проблема</dt><dd>Более 3000 пользователей регулярно обращались в поддержку. До 200 обращений в день.</dd></div><div><dt>Анализ</dt><dd>Изучил повторяющиеся обращения, их причины и слабые места в продукте и процессах.</dd></div><div><dt>Решение</dt><dd>Новые инструкции, изменения в продукте и перестройка процесса обработки обращений.</dd></div><div><dt>Результат</dt><dd>Количество обращений сократилось с ~200 до менее 10 в день.</dd></div></dl></div><div className="chart"><div className="chartHeader"><span>Обращения / день</span><b>−95%+</b></div><div className="bars"><div className="bar before"><i>~200</i></div><div className="bar after"><i>&lt;10</i></div></div><div className="chartLabels"><span>До</span><span>После</span></div></div></article>
    <article className="case reveal"><div className="caseCopy"><span className="caseNum">02</span><h3>Развитие экосистемы продуктов для ВЭД</h3><p className="caseLead">Работа не над отдельными задачами, а над развитием целой системы взаимосвязанных продуктов.</p></div><div className="ecosystem">{["Брокерский софт","Бухгалтерский софт","Свободный склад","Облачные сервисы","AI-инструменты","API-интеграции"].map((x,i)=><div key={x}><span>{x}</span>{i<5&&<i>→</i>}</div>)}</div></article>
    <article className="case concept reveal"><div className="caseCopy"><span className="caseNum">03 · Концепция</span><h3>Следующее поколение продуктов</h3><p className="caseLead">Я рассматриваю искусственный интеллект как инструмент поддержки принятия решений, а не как замену бизнес-логики.</p></div><div className="techFlow"><div className="sources"><span>Документы</span><span>PDF</span><span>Excel</span><span>XML</span></div><i>↓</i>{["RAG","LLM","Rule Engine","Рекомендации","Пользователь"].map((x,i)=><div key={x}><span>{x}</span>{i<4&&<i>↓</i>}</div>)}</div></article></section>

    <section className="section approach"><SectionTitle kicker="08 · Принципы работы">Мой подход.</SectionTitle><div className="cardGrid">{approach.map(([t,d],i)=><article className="softCard reveal" style={{"--delay":`${(i%3)*80}ms`} as React.CSSProperties} key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="section tools gray"><SectionTitle kicker="09 · Инструментарий">Инструменты помогают создавать продукт.<br/><em>Но не заменяют мышление.</em></SectionTitle><div className="toolGrid">{tools.map((t,i)=><article className="toolCard reveal" style={{"--delay":`${(i%4)*45}ms`} as React.CSSProperties} tabIndex={0} key={t}><span>{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{toolText[t]}</p></article>)}</div><p className="sectionNote reveal">Я не строю продукты вокруг технологий. <b>Я выбираю технологии под задачу.</b></p></section>

    <section className="section beliefs"><SectionTitle kicker="10 · Убеждения">Во что я верю.</SectionTitle><div className="beliefList">{[["Не решаю симптомы.","Ищу первопричину."],["Не начинаю с функций.","Начинаю с проблемы."],["Не строю ради технологий.","Строю ради результата."],["Не выбираю первое решение.","Сравниваю варианты."],["Не заканчиваю запуском.","Развиваю продукт дальше."]].map(([a,b])=><div className="belief reveal" key={a}><span>{a}</span><b>{b}</b></div>)}</div></section>

    <section className="section about gray" id="about"><div className="aboutText reveal"><h2>От поддержки<br/>к продукту.</h2><p>Я пришёл в IT не как Product Manager. За несколько лет прошёл путь от технической поддержки до управления продуктом.</p><p>Работая с пользователями каждый день, я понял одну простую вещь: <b>большинство проблем появляются не из-за технологий.</b></p><p>Они появляются из-за процессов, отсутствия анализа и неправильных решений. Именно поэтому сегодня моя работа начинается не с написания требований, а с понимания проблемы и поиска лучшего пути её решения.</p></div><div className="portrait reveal"><img src="/profile.jpg" alt="Портрет Product Manager" /></div></section>

    <section className="final" id="contact"><div className="finalGlow"/><div className="reveal"><h2>Каждый продукт начинается с проблемы.<br/><em>Я помогаю превратить её в решение.</em></h2><div className="finalActions"><a className="primary" href="https://wa.me/77075760846" target="_blank" rel="noopener noreferrer" aria-label="Связаться в WhatsApp — откроется в новой вкладке">Связаться <span>↗</span></a></div></div></section>
  </main>
}
