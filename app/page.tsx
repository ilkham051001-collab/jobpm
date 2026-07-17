"use client";

import { useEffect } from "react";

const process = [
  ["Проблема", "Формулирую, что действительно должно измениться."],
  ["Исследование", "Изучаю пользователей, контекст и текущий процесс."],
  ["Анализ", "Нахожу первопричины, ограничения и точки роста."],
  ["Варианты", "Сравниваю решения по эффекту, рискам и стоимости."],
  ["MVP", "Проверяю главную гипотезу минимальным объёмом."],
  ["Продукт", "Запускаю, измеряю результат и развиваю дальше."],
];

const principles = [
  ["Не решаю симптомы.", "Ищу первопричину."],
  ["Не начинаю с функций.", "Начинаю с проблемы."],
  ["Не строю ради технологий.", "Строю ради результата."],
  ["Не выбираю первое решение.", "Сравниваю варианты."],
  ["Не заканчиваю запуском.", "Развиваю продукт дальше."],
];

function Flow({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return <div className={`flow ${accent ? "accent" : ""}`}>{items.map((item, index) => <div className="flowItem reveal" style={{ "--delay": `${index * 70}ms` } as React.CSSProperties} key={item}><span>{item}</span>{index < items.length - 1 && <i>↓</i>}</div>)}</div>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="sectionTitle reveal"><h2>{children}</h2></div>;
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollSection = (direction: number) => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const current = window.scrollY + window.innerHeight * 0.35;
    const index = sections.findIndex(section => section.offsetTop > current);
    const targetIndex = direction > 0 ? (index === -1 ? sections.length - 1 : index) : Math.max(0, (index === -1 ? sections.length : index) - 2);
    sections[targetIndex]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <main>
    <header className="nav"><nav><a href="#method">Подход</a><a href="#cases">Кейсы</a><a href="#about">Обо мне</a></nav><a className="navContact" href="#contact">Связаться <span>↓</span></a></header>
    <aside className="sectionArrows" aria-label="Навигация между секциями"><button onClick={() => scrollSection(-1)} aria-label="Предыдущая секция">↑</button><button onClick={() => scrollSection(1)} aria-label="Следующая секция">↓</button></aside>

    <section className="hero" id="top">
      <div className="heroCopy reveal"><h1>От проблемы —<br />к работающему<br /><em>продукту.</em></h1><p className="lead">Продукты создаются не функциями, а правильными решениями. Именно поэтому я начинаю с понимания проблемы.</p><a className="primary" href="#method">Посмотреть мой подход <span>↓</span></a></div>
      <div className="heroMap" aria-label="Путь от проблемы к продукту"><div className="orbit o1"/><div className="orbit o2"/><div className="mapNode problem">Проблема</div><div className="mapLine"/><div className="mapNode product">Продукт</div><i className="spark s1"/><i className="spark s2"/><i className="spark s3"/></div>
    </section>

    <section className="compare section gray" id="method">
      <SectionTitle>Почему проекты не приносят<br />ожидаемого результата?</SectionTitle>
      <div className="compareGrid"><article className="panel reveal"><small>Типичный подход</small><Flow items={["Идея", "Функции", "Разработка", "Запуск"]}/></article><article className="panel blue reveal"><small>Мой подход</small><Flow accent items={["Проблема", "Анализ", "Решение", "Продукт"]}/></article></div>
      <p className="sectionNote reveal">Большинство команд начинают с реализации идеи или выбора технологий. <b>Я начинаю с понимания проблемы и поиска лучшего решения.</b></p>
    </section>

    <section className="section timeline">
      <SectionTitle>Как я превращаю проблему<br />в работающий продукт.</SectionTitle>
      <div className="timelineList">{process.map(([title, description], index) => <article className="timelineItem reveal" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>

    <section className="section cases gray" id="cases">
      <SectionTitle>Кейсы.</SectionTitle>
      <article className="case heroCase reveal"><div className="caseCopy"><span className="caseNum">01</span><h3>Снижение нагрузки на техническую поддержку</h3><dl><div><dt>Проблема</dt><dd>Более 3000 пользователей и до 200 обращений в день.</dd></div><div><dt>Анализ</dt><dd>Изучил повторяющиеся обращения, причины вопросов и слабые места продукта.</dd></div><div><dt>Решение</dt><dd>Новые инструкции, изменения продукта и перестройка процесса поддержки.</dd></div><div><dt>Результат</dt><dd>Менее 10 обращений в день вместо примерно 200.</dd></div></dl></div><div className="chart"><div className="chartHeader"><span>Обращения / день</span><b>−95%+</b></div><div className="bars"><div className="bar before"><i>~200</i></div><div className="bar after"><i>&lt;10</i></div></div><div className="chartLabels"><span>До</span><span>После</span></div></div></article>
      <article className="case reveal"><div className="caseCopy"><span className="caseNum">02</span><h3>Развитие экосистемы продуктов для ВЭД</h3><p className="caseLead">Работа не над отдельными задачами, а над развитием единой системы взаимосвязанных продуктов.</p></div><div className="ecosystem">{["Брокерский софт", "Бухгалтерский софт", "Свободный склад", "Облачные сервисы", "AI-инструменты", "API-интеграции"].map((item, index) => <div key={item}><span>{item}</span>{index < 5 && <i>→</i>}</div>)}</div></article>
      <article className="case concept reveal"><div className="caseCopy"><span className="caseNum">03 · Концепция</span><h3>Следующее поколение продуктов</h3><p className="caseLead">Искусственный интеллект как инструмент поддержки принятия решений, а не замена бизнес-логики.</p></div><div className="techFlow"><div className="sources"><span>Документы</span><span>PDF</span><span>Excel</span><span>XML</span></div><i>↓</i>{["RAG", "LLM", "Rule Engine", "Рекомендации", "Пользователь"].map((item, index) => <div key={item}><span>{item}</span>{index < 4 && <i>↓</i>}</div>)}</div></article>
    </section>

    <section className="section beliefs">
      <SectionTitle>Принципы, на которых<br />я строю продукты.</SectionTitle>
      <div className="beliefList">{principles.map(([first, second]) => <div className="belief reveal" key={first}><span>{first}</span><b>{second}</b></div>)}</div>
    </section>

    <section className="section about gray" id="about">
      <div className="aboutText reveal"><h2>От поддержки<br />к продукту.</h2><p>Я пришёл в IT не как Product Manager. За несколько лет прошёл путь от технической поддержки до управления продуктом.</p><p>Работая с пользователями каждый день, я понял: <b>большинство проблем появляются не из-за технологий.</b></p><p>Они появляются из-за процессов, отсутствия анализа и неправильных решений. Поэтому моя работа начинается с понимания проблемы и поиска лучшего пути её решения.</p></div>
      <div className="portrait reveal"><img src="/profile.jpg" alt="Портрет Product Manager" /></div>
    </section>

    <section className="final" id="contact"><div className="finalGlow"/><div className="reveal"><h2>Каждый продукт начинается с проблемы.<br /><em>Я помогаю превратить её в решение.</em></h2><div className="finalActions"><a className="primary" href="https://wa.me/77075760846" target="_blank" rel="noopener noreferrer">Связаться <span>↗</span></a></div></div></section>
  </main>;
}
