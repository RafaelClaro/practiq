"use client";

import { useEffect } from "react";

const WA_URL =
  "https://wa.me/5511976287171?text=Olá%2C%20Rafael%21%20Vi%20o%20site%20da%20Practiq%20e%20quero%20saber%20mais%20sobre%20automação%20para%20minha%20empresa.";

const TL_IDS    = ["dor", "solucao", "servicos", "prova", "como"];
const TL_LABELS = ["O problema", "A solução", "Serviços", "Resultados", "Como contratar"];
const TL_ICONS  = [
  '<svg viewBox="0 0 24 24"><path d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7-2.983l-8.423-14.06a1.989 1.989 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M3 12h1m8-9v1m8 8h1m-15.4-6.4l.7.7m12.1-.7l-.7.7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3"/><path d="M9.7 17h4.6"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M3.5 5.5l1.5 1.5l2.5-2.5m-4 6l1.5 1.5l2.5-2.5m-4 6l1.5 1.5l2.5-2.5"/><path d="M11 6h9m-9 6h9m-9 6h9"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M7 4h10M17 4v8a5 5 0 0 1-10 0V4"/><path d="M5 9H3M19 9h2"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M5 12l5 5l10-10"/></svg>',
];

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

    // Timeline
    const wrap  = document.getElementById("timeline-wrap");
    const rail  = document.getElementById("timeline-rail");
    const fill  = document.getElementById("tl-fill");
    const track = document.getElementById("tl-track");
    if (!wrap || !rail || !fill) return;

    let tlYFirst = 0;
    let tlYEnd   = 0;

    const nodes = TL_IDS.map((id, i) => {
      const d = document.createElement("div");
      const isEndpoint = i === TL_IDS.length - 1;
      d.className = isEndpoint ? "tl-node endpoint" : "tl-node";
      d.innerHTML = isEndpoint
        ? TL_ICONS[i]
        : TL_ICONS[i] + `<span class="tl-tip">${TL_LABELS[i]}</span>`;
      d.addEventListener("click", () => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      rail.appendChild(d);
      return d;
    });

    function placeNodes() {
      const wrapTop = wrap!.getBoundingClientRect().top + window.scrollY;
      TL_IDS.forEach((id, i) => {
        const sec = document.getElementById(id);
        if (!sec) return;
        const y = sec.getBoundingClientRect().top + window.scrollY - wrapTop + 80;
        nodes[i].style.top = y + "px";
      });
      if (nodes.length >= 2 && track) {
        const yFirst = parseFloat(nodes[0].style.top || "0");
        const lastSec = document.getElementById(TL_IDS[TL_IDS.length - 1]);
        const wrapTop2 = wrap!.getBoundingClientRect().top + window.scrollY;
        const yEnd = lastSec
          ? lastSec.getBoundingClientRect().top + window.scrollY - wrapTop2 + lastSec.offsetHeight
          : parseFloat(nodes[nodes.length - 1].style.top || "0");
        tlYFirst = yFirst;
        tlYEnd   = yEnd;
        track.style.top    = yFirst + "px";
        track.style.height = Math.max(0, yEnd - yFirst) + "px";
      }
    }

    function update() {
      placeNodes();
      const wrapTop = wrap!.getBoundingClientRect().top + window.scrollY;
      const vh = window.innerHeight;

      const nodePageYs = nodes.map((n) => parseFloat(n.style.top || "0") + wrapTop);
      const scrollMid = window.scrollY + vh * 0.55;

      const fillStartPageY = wrapTop + tlYFirst;
      const fillEndPageY   = wrapTop + tlYEnd;
      const pct = fillEndPageY > fillStartPageY
        ? Math.max(0, Math.min(1, (scrollMid - fillStartPageY) / (fillEndPageY - fillStartPageY)))
        : 0;
      fill!.style.top    = tlYFirst + "px";
      fill!.style.height = Math.max(0, (tlYEnd - tlYFirst) * pct) + "px";

      let activeIdx = -1;
      nodePageYs.forEach((y, i) => { if (scrollMid >= y - 20) activeIdx = i; });

      nodes.forEach((n, i) => {
        n.classList.remove("active", "done", "future");
        if (activeIdx < 0) { n.classList.add("future"); return; }
        if (i < activeIdx)        n.classList.add("done");
        else if (i === activeIdx) n.classList.add("active");
        else                      n.classList.add("future");
      });
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", () => { placeNodes(); update(); });

    if (document.readyState === "complete") { placeNodes(); update(); }
    else window.addEventListener("load", () => { placeNodes(); update(); });
    requestAnimationFrame(() => { placeNodes(); update(); });
    const t = setTimeout(() => { placeNodes(); update(); }, 400);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", update);
      observer.disconnect();
      counterObs.disconnect();
      clearTimeout(t);
      // remove injected nodes on unmount
      nodes.forEach((n) => n.remove());
    };
  }, []);

  return null;
}
