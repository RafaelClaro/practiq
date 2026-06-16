"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // Nav scroll
    const nav = document.getElementById("navbar");
    const waBtn = document.querySelector<HTMLElement>(".wa-float");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 40);
      // Mostra o botão WhatsApp quando o usuário chega perto do fim da página
      const nearBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 120;
      waBtn?.classList.toggle("wa-visible", nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Stagger: adiciona reveal + delay nos filhos de [data-stagger]
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((grid) => {
      Array.from(grid.children).forEach((child, i) => {
        const el = child as HTMLElement;
        el.classList.add("reveal");
        el.style.setProperty("--delay", `${i * 120}ms`);
      });
    });

    // Observa todos os tipos de reveal
    document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
      const d = el.dataset.delay;
      if (d) el.style.setProperty("--delay", d + "ms");
      observer.observe(el);
    });

    // Counter animation
    function animateCounter(el: HTMLElement) {
      const target = parseInt(el.dataset.count || "0");
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();
      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    const counterObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { animateCounter(e.target as HTMLElement); counterObs.unobserve(e.target); } }),
      { threshold: 0.5 }
    );
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => counterObs.observe(el));

    // Timeline "Como contratar" — barra vertical que se autopreenche conforme scroll
    const timelineEl   = document.getElementById("comoTimeline");
    const timelineFill = document.getElementById("comoTimelineFill");
    const steps = document.querySelectorAll<HTMLElement>("#comoTimeline .timeline-step");

    function updateComoTimeline() {
      if (!timelineEl || !timelineFill) return;
      const rect = timelineEl.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.75;
      const end = -rect.height + vh * 0.35;
      const total = start - end;
      const current = start - rect.top;
      const pct = Math.min(Math.max(current / total, 0), 1) * 100;
      timelineFill.style.height = pct + "%";

      steps.forEach((step) => {
        const stepRect = step.getBoundingClientRect();
        step.classList.toggle("active", stepRect.top < vh * 0.6);
      });
    }
    window.addEventListener("scroll", updateComoTimeline, { passive: true });
    window.addEventListener("resize", updateComoTimeline);
    updateComoTimeline();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", updateComoTimeline);
      window.removeEventListener("resize", updateComoTimeline);
      observer.disconnect();
      counterObs.disconnect();
    };
  }, []);

  return null;
}
