"use client";

import { useEffect } from "react";

const WA_URL =
  "https://wa.me/5511976287171?text=Olá%2C%20Rafael%21%20Vi%20o%20site%20da%20Practiq%20e%20quero%20saber%20mais%20sobre%20automação%20para%20minha%20empresa.";

const TL_IDS    = ["dor", "solucao", "servicos", "prova", "como"];
const TL_LABELS = ["O problema", "A solução", "Serviços", "Resultados", "Como contratar"];
const TL_ICONS  = [
  '<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
  '<svg viewBox="0 0 24 24"><path d="M6 9H4a2 2 0 0 0-2 2v1a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6v-1a2 2 0 0 0-2-2h-2"/><path d="M6 9V4h12v5"/><path d="M12 21v-6"/><path d="M9 21h6"/></svg>',
  '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
];

export default function ClientEffects() {
  useEffect(() => {
    // Nav scroll
    const nav = document.getElementById("navbar");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 40);
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
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Timeline
    const wrap  = document.getElementById("timeline-wrap");
    const rail  = document.getElementById("timeline-rail");
    const fill  = document.getElementById("tl-fill");
    const track = document.getElementById("tl-track");
    if (!wrap || !rail || !fill) return;

    const nodes = TL_IDS.map((id, i) => {
      const d = document.createElement("div");
      d.className = "tl-node";
      d.innerHTML = TL_ICONS[i] + `<span class="tl-tip">${TL_LABELS[i]}</span>`;
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
        const yLast  = parseFloat(nodes[nodes.length - 1].style.top || "0");
        track.style.top    = yFirst + "px";
        track.style.height = Math.max(0, yLast - yFirst) + "px";
      }
    }

    function update() {
      placeNodes();
      const wrapTop = wrap!.getBoundingClientRect().top + window.scrollY;
      const vh = window.innerHeight;

      const nodePageYs = nodes.map((n) => parseFloat(n.style.top || "0") + wrapTop);
      const firstY = nodePageYs[0];
      const lastY  = nodePageYs[nodePageYs.length - 1];
      const range  = lastY - firstY;
      const scrollMid = window.scrollY + vh * 0.55;

      const pct = range > 0 ? Math.max(0, Math.min(1, (scrollMid - firstY) / range)) : 0;

      const fillTop    = parseFloat(nodes[0].style.top || "0");
      const fillHeight = (parseFloat(nodes[nodes.length - 1].style.top || "0") - fillTop) * pct;
      fill!.style.top    = fillTop + "px";
      fill!.style.height = Math.max(0, fillHeight) + "px";

      let activeIdx = -1;
      nodePageYs.forEach((y, i) => { if (scrollMid >= y - 20) activeIdx = i; });

      nodes.forEach((n, i) => {
        n.classList.remove("active", "done");
        if (activeIdx < 0) return;
        if (i < activeIdx)        n.classList.add("done");
        else if (i === activeIdx) n.classList.add("active");
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
      clearTimeout(t);
      // remove injected nodes on unmount
      nodes.forEach((n) => n.remove());
    };
  }, []);

  return null;
}
