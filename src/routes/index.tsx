import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Code2, Link2, Menu, Palette, Rocket, Sparkles, X, Zap } from "lucide-react";
import { useState } from "react";

import launchProPreview from "@/assets/launchpro-preview.jpg";
import neuroAnalyticsPreview from "@/assets/neuroanalytics-preview.jpg";
import studyFlowPreview from "@/assets/studyflow-preview.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    number: "01",
    title: "StudyFlow",
    category: "EdTech / AI",
    description:
      "AI-платформа, которая выстраивает персональный маршрут обучения и адаптирует материалы под темп каждого студента.",
    technologies: ["React", "TypeScript", "OpenAI", "PostgreSQL"],
    image: studyFlowPreview,
    alt: "Интерфейс AI-платформы StudyFlow на ноутбуке и планшете",
  },
  {
    number: "02",
    title: "НейроАналитик",
    category: "Data / AI",
    description:
      "AI-сервис превращает массивы данных в понятные выводы, графики и готовые сценарии для принятия решений.",
    technologies: ["Next.js", "Python", "AI Agents", "Recharts"],
    image: neuroAnalyticsPreview,
    alt: "Панель аналитики НейроАналитик с графиками и визуализацией данных",
  },
  {
    number: "03",
    title: "LaunchPro",
    category: "Web / Growth",
    description:
      "Продуктовый лендинг с ясной структурой, выразительной подачей и фокусом на конверсию в целевое действие.",
    technologies: ["React", "Tailwind CSS", "Motion", "Vite"],
    image: launchProPreview,
    alt: "Адаптивный продуктовый лендинг LaunchPro на компьютере и смартфоне",
  },
];

const services = [
  {
    icon: Rocket,
    title: "MVP за неделю",
    description:
      "Собираю минимальную версию продукта: ключевая функция, ясный интерфейс и готовность показывать пользователям. Без лишних месяцев разработки.",
    result: "Рабочий продукт у первых пользователей уже через 5–7 дней.",
  },
  {
    icon: Zap,
    title: "AI-автоматизация",
    description:
      "Встраиваю AI в рутинные процессы — от обработки заявок до подготовки отчётов. Система делает скучную работу вместо команды.",
    result: "Часы ручной рутины сокращаются до минут.",
  },
  {
    icon: Palette,
    title: "UI/UX с вайбкодингом",
    description:
      "Проектирую интерфейсы и сразу воплощаю их в живом коде — без разрыва между макетом и продуктом. Дизайн и разработка идут в одном ритме.",
    result: "Аккуратный интерфейс, который нравится и конвертирует.",
  },
  {
    icon: Link2,
    title: "Интеграции",
    description:
      "Соединяю ваш продукт с платёжами, CRM, мессенджерами и внешними API. Данные текут между сервисами без ручного переноса.",
    result: "Все сервисы работают как единое целое.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Погружаюсь в задачу",
    description:
      "Слушаю, задаю вопросы и фиксирую цель: что строим, для кого и по какому критерию считаем успех.",
  },
  {
    number: "02",
    title: "Создаю с ИИ",
    description:
      "Проектирую структуру и сразу пишу код вместе с AI-инструментами, показывая прогресс каждый день.",
  },
  {
    number: "03",
    title: "Тестирую и улучшаю",
    description:
      "Проверяю на реальных сценариях, собираю обратную связь и довожу детали до блеска.",
  },
  {
    number: "04",
    title: "Запускаю и масштабирую",
    description:
      "Выпускаю продукт в свет, подключаю аналитику и помогаю ему расти дальше.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Алексей Ветров — Vibe Coding & AI продукты" },
      {
        name: "description",
        content: "Портфолио специалиста по вайбкодингу: AI-сервисы, продукты и современные лендинги.",
      },
      { property: "og:title", content: "Алексей Ветров — Vibe Coding & AI продукты" },
      {
        property: "og:description",
        content: "Избранные AI-продукты и веб-проекты, созданные от идеи до запуска.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-30 border-b-[10px] border-brand bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-24 sm:px-8 lg:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="На главную">
            <span className="grid size-10 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
              <Code2 className="size-5" aria-hidden="true" />
            </span>
            <span className="truncate font-display text-lg font-bold">Алексей Ветров</span>
            <span className="hidden h-5 w-px bg-border sm:block" />
            <span className="hidden text-xs font-medium uppercase text-muted-foreground sm:block">Vibe coder</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
            <a className="nav-link" href="#projects">Проекты</a>
            <Button asChild size="lg">

              <a href="mailto:hello@example.com">Обсудить проект <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </nav>

          <Button
            className="md:hidden"
            size="icon"
            variant="outline"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="absolute inset-x-0 top-full border-b border-border bg-background px-5 py-5 md:hidden" aria-label="Мобильная навигация">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <a className="nav-link" href="#projects" onClick={() => setMenuOpen(false)}>Проекты</a>
              <Button asChild className="mt-2 w-full">

                <a href="mailto:hello@example.com">Обсудить проект <ArrowUpRight /></a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative border-b border-border/60 bg-brand text-brand-foreground">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[630px] max-w-7xl items-end px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:min-h-[720px] lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 lg:px-10 lg:pb-24">
          <div className="max-w-5xl">
            <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase text-attention">
              <span className="pulse-dot" />
              Доступен для новых проектов
            </div>
            <h1 className="font-display text-[clamp(3.5rem,9vw,8.6rem)] font-bold leading-[0.86]">
              Создаю <span className="text-primary">цифровые</span><br />
              продукты с AI
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-brand-foreground/75 sm:text-lg sm:leading-8">
              Превращаю идеи в работающие сервисы и сайты — быстро, осмысленно и с вниманием к каждой детали.
            </p>
            <Button asChild size="lg" className="mt-9 h-12 px-6 text-sm">
              <a href="#projects">Смотреть проекты <ArrowDownRight aria-hidden="true" /></a>
            </Button>
          </div>

           <div className="mt-16 hidden border-l border-brand-foreground/25 pl-8 lg:block">
             <Sparkles className="mb-6 size-7 text-attention" aria-hidden="true" />
             <p className="text-xs font-bold uppercase text-brand-foreground/65">Специализация</p>
            <ul className="mt-4 space-y-3 font-display text-xl font-semibold">
              <li>AI-продукты</li><li>Веб-сервисы</li><li>Лендинги</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-5 border-b border-border pb-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <p className="section-kicker">Выборка / 2026</p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-6xl">Избранные проекты</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
              Решения на стыке продукта, дизайна и разработки.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article className="project-card group" key={project.title} style={{ animationDelay: `${index * 110}ms` }}>
                <div className="relative aspect-[3/2] overflow-hidden border-b border-border bg-background">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    src={project.image}
                    alt={project.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-background/90 px-2.5 py-1 font-mono text-xs font-bold text-foreground backdrop-blur-sm">
                    {project.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                   <p className="text-[11px] font-bold uppercase text-attention">{project.category}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold">{project.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2" aria-label={`Технологии проекта ${project.title}`}>
                    {project.technologies.map((technology) => (
                      <Badge key={technology} variant="outline">{technology}</Badge>
                    ))}
                  </div>
                  <Button asChild className="mt-7 w-full justify-between" size="lg">
                    <a href={`mailto:hello@example.com?subject=Проект ${project.title}`}>
                      Подробнее <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-5 border-b border-border pb-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <p className="section-kicker">Формат работы</p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-6xl">Что я делаю</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
              Четыре направления, в которых AI и код работают на результат.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article className="service-card p-6" key={service.title} style={{ animationDelay: `${index * 110}ms` }}>
                <span className="grid size-11 place-items-center rounded-md bg-secondary text-foreground" aria-hidden="true">
                  <service.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{service.description}</p>
                <p className="mt-6 border-t border-border pt-4 text-sm font-semibold leading-6 text-attention">
                  {service.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-border bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid gap-5 border-b border-border pb-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <p className="section-kicker">Процесс</p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-6xl">Как я работаю</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
              Понятные этапы без сюрпризов — от первой встречи до запуска.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => (
              <li className="relative pl-16 lg:pl-0 lg:pt-16" key={step.title}>
                {index < processSteps.length - 1 && (
                  <>
                    <span className="absolute left-[19px] top-11 bottom-0 w-px bg-border lg:hidden" aria-hidden="true" />
                    <span className="absolute left-10 top-[19px] hidden h-px w-[calc(100%-2.5rem)] bg-border lg:block" aria-hidden="true" />
                  </>
                )}
                <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground ring-[6px] ring-secondary">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>


      <footer className="bg-brand py-12 text-brand-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:px-8 lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase text-attention">Есть идея?</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-6xl">Давайте запустим.</h2>
          </div>
          <Button asChild size="lg">
            <a href="mailto:hello@example.com">Написать мне <ArrowUpRight /></a>
          </Button>
        </div>
      </footer>
    </main>
  );
}