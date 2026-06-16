import ClientEffects from "@/components/ClientEffects";

const WA =
  "https://wa.me/5511976287171?text=Olá%2C%20Rafael%21%20Vi%20o%20site%20da%20Practiq%20e%20quero%20saber%20mais%20sobre%20automação%20para%20minha%20empresa.";
const WA_SITE =
  "https://wa.me/5511976287171?text=Olá%2C%20Rafael%21%20Vi%20o%20site%20da%20Practiq%20e%20quero%20um%20site%20profissional%20para%20meu%20negócio.";

export default function Home() {
  return (
    <>
      <ClientEffects />

      {/* NAV */}
      <nav id="navbar">
        <a href="#" className="nav-logo">
          Practiq<span className="nav-logo-dot">.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#dor">O problema</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#prova">Resultados</a></li>
          <li><a href="#como">Como funciona</a></li>
        </ul>
        <a href={WA} className="nav-cta" target="_blank" rel="noopener">
          Começar agora
        </a>
      </nav>

      {/* HERO */}
      <div id="hero">
        <span className="hero-badge"><span className="hero-badge-pulse"></span>Tecnologia prática para negócios reais</span>
        <h1>Presença digital e automação<br/>pra seu negócio rodar <em>melhor</em>.</h1>
        <p className="hero-sub">
          Construo o site que ainda falta e automatizo o que trava seu processo. Tudo sob medida, sem enrolação.
        </p>
        <div className="hero-actions">
          <a href={WA} className="btn-primary" target="_blank" rel="noopener">
            Quero conversar →
          </a>
        </div>

        <div className="pilares-grid reveal" data-stagger>
          <a href="#automacao" className="pilar-card">
            <div className="pilar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
              </svg>
            </div>
            <h3>Automatizar meu negócio</h3>
            <p>Já tenho clientes, mas perco tempo com WhatsApp, agenda e follow-up manual.</p>
            <span className="pilar-link">Ver soluções →</span>
          </a>
          <a href="#sites" className="pilar-card">
            <div className="pilar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h3>Ter um site profissional</h3>
            <p>Ainda não tenho presença online, ou meu site não passa credibilidade.</p>
            <span className="pilar-link">Ver soluções →</span>
          </a>
        </div>
      </div>

      {/* DOR */}
        <div id="dor" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="section-wrap" style={{ border: "none", paddingTop: 100, paddingBottom: 100 }}>
            <p className="eyebrow reveal-left">O problema, nos dois lados</p>
            <h2 className="reveal" data-delay="120">Cada negócio trava<br/>num ponto diferente.</h2>
            <p className="sec-sub reveal" data-delay="220">Uns perdem tempo no processo manual. Outros nem têm onde o cliente bater o olho. Os dois custam dinheiro todo mês.</p>

            <div className="dores-grid">
              <div className="dores-col">
                <div className="dores-col-head">
                  <div className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
                    </svg>
                  </div>
                  <h3>Quem já tem negócio rodando</h3>
                </div>
                <div className="dor-item">
                  <h4>Horas perdidas em tarefa repetitiva</h4>
                  <p>Responder a mesma dúvida no WhatsApp, confirmar compromisso manualmente, lembrar cliente um por um.</p>
                  <span className="dor-stat">↑ 3–5h por dia em operação manual</span>
                </div>
                <div className="dor-item">
                  <h4>Cliente sumindo por falta de seguimento</h4>
                  <p>Sem follow-up automático, o cliente não volta — e você fica sempre dependendo de gente nova pra fechar o mês.</p>
                  <span className="dor-stat">↑ 80% não retornam sem um toque ativo</span>
                </div>
                <div className="dor-item">
                  <h4>Agenda com falhas e sem previsão</h4>
                  <p>Compromisso confirmado que não acontece. Horário vazio de última hora.</p>
                  <span className="dor-stat">↑ até 30% de faltas sem confirmação ativa</span>
                </div>
              </div>

              <div className="dores-col">
                <div className="dores-col-head">
                  <div className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <h3>Quem ainda não tem presença digital</h3>
                </div>
                <div className="dor-item">
                  <h4>Cliente pesquisa e não te encontra</h4>
                  <p>Sem site, o primeiro contato é só boca a boca ou rede social — e quem busca no Google não acha nada.</p>
                  <span className="dor-stat">↑ 81% pesquisa online antes de comprar</span>
                </div>
                <div className="dor-item">
                  <h4>Perfil de Instagram não fecha venda</h4>
                  <p>Bio com link torto, sem horário, sem preço claro. O cliente desiste de entender antes de te chamar.</p>
                  <span className="dor-stat">↑ site converte 3x mais que perfil social</span>
                </div>
                <div className="dor-item">
                  <h4>Sem credibilidade pra cobrar mais</h4>
                  <p>Concorrente com site bem feito parece mais profissional — mesmo prestando o mesmo serviço que você.</p>
                  <span className="dor-stat">↑ presença digital pesa na decisão de preço</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVIÇOS */}
        <div id="servicos" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="section-wrap" style={{ border: "none", paddingTop: 100, paddingBottom: 100 }}>
            <p className="eyebrow reveal-left">O que eu construo</p>
            <h2 className="reveal" data-delay="120">Dois caminhos.<br/><em>Mesmo cuidado</em> em cada entrega.</h2>
            <p className="sec-sub reveal" data-delay="220">Tudo sob medida — não é template, não é plataforma de terceiro. Escolha o que faz sentido pro seu momento agora.</p>

            <div className="servicos-bloco" id="automacao">
              <p className="eyebrow" style={{ marginBottom: 22 }}>Pilar 01 · Automação</p>
              <div className="services-grid" data-stagger>
                <div className="svc-card featured">
                  <span className="svc-badge">Mais contratado</span>
                  <div className="svc-name">Agente de atendimento no WhatsApp</div>
                  <div className="svc-desc">Responde, agenda e confirma horários 24h por dia, sem recepcionista.</div>
                  <div className="svc-tags">
                    <span className="tag">WhatsApp</span><span className="tag">Google Agenda</span><span className="tag">IA</span>
                  </div>
                  <div className="svc-price">Consulte valores</div>
                </div>

                <div className="svc-card">
                  <div className="svc-name">Confirmação e lembrete automático</div>
                  <div className="svc-desc">Mensagem automática antes do compromisso, com link de confirmação ou reagendamento.</div>
                  <div className="svc-tags">
                    <span className="tag">WhatsApp</span><span className="tag">Telegram</span><span className="tag">Automático</span>
                  </div>
                  <div className="svc-price">Consulte valores</div>
                </div>

                <div className="svc-card">
                  <div className="svc-name">Régua de relacionamento pós-atendimento</div>
                  <div className="svc-desc">Follow-up automático: satisfação, lembrete de retorno e reativação de clientes inativos.</div>
                  <div className="svc-tags">
                    <span className="tag">Retenção</span><span className="tag">WhatsApp</span><span className="tag">Personalizado</span>
                  </div>
                  <div className="svc-price">Consulte valores</div>
                </div>
              </div>
            </div>

            <div className="servicos-bloco" id="sites" style={{ marginBottom: 0 }}>
              <p className="eyebrow" style={{ marginBottom: 22 }}>Pilar 02 · Sites e Sistemas</p>
              <div className="services-grid" data-stagger>
                <div className="svc-card">
                  <span className="svc-badge">Mais pedido</span>
                  <div className="svc-name">Site institucional profissional</div>
                  <div className="svc-desc">Página rápida, mobile-first, com identidade visual própria que converte visitante em cliente.</div>
                  <div className="svc-tags">
                    <span className="tag">Mobile-first</span><span className="tag">SEO básico</span><span className="tag">Design único</span>
                  </div>
                  <div className="svc-price">Consulte valores</div>
                </div>

                <div className="svc-card">
                  <div className="svc-name">Landing page de conversão</div>
                  <div className="svc-desc">Página única pra vender um produto, serviço ou captar leads de forma direta.</div>
                  <div className="svc-tags">
                    <span className="tag">Conversão</span><span className="tag">Copywriting</span><span className="tag">Analytics</span>
                  </div>
                  <div className="svc-price">Consulte valores</div>
                </div>

                <div className="svc-card">
                  <div className="svc-name">Portal ou sistema sob medida</div>
                  <div className="svc-desc">Login, painel administrativo e integração com banco de dados para quem precisa de mais.</div>
                  <div className="svc-tags">
                    <span className="tag">Sob medida</span><span className="tag">Login</span><span className="tag">Escalável</span>
                  </div>
                  <div className="svc-price">Consulte valores</div>
                </div>

                <div className="svc-card combo">
                  <span className="svc-badge combo-badge">Mais completo</span>
                  <div className="svc-name">Site + Automação integrados</div>
                  <div className="svc-desc">Site com agendamento e atendimento via WhatsApp já conectados, entregue e mantido por mim.</div>
                  <div className="svc-tags">
                    <span className="tag">Tudo incluído</span><span className="tag">Prioridade</span><span className="tag">Suporte dedicado</span>
                  </div>
                  <div className="svc-price">Consulte valores</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROVA */}
        <div id="prova" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="section-wrap" style={{ border: "none", paddingTop: 100, paddingBottom: 100 }}>
            <p className="eyebrow reveal-left">Resultados</p>
            <h2 className="reveal" data-delay="120">O que muda quando<br/>o processo roda sozinho.</h2>
            <p className="sec-sub reveal" data-delay="220">Ganhos reais de tempo e previsibilidade pra negócios que automatizam ou ganham presença digital.</p>

            <div className="stats-row" data-stagger>
              {[
                { num: "−70%", count: 70, prefix: "−", suffix: "%", label: "de faltas com confirmação automática" },
                { num: "3h",   count: 3,  prefix: "",  suffix: "h",  label: "economizadas por dia na operação" },
                { num: "24h",  count: 24, prefix: "",  suffix: "h",  label: "o agente atende sem parar" },
                { num: "7d",   count: 7,  prefix: "",  suffix: "d",  label: "até o projeto estar no ar" },
              ].map((s) => (
                <div key={s.num} className="stat-box">
                  <div className="stat-num" data-count={s.count} data-prefix={s.prefix} data-suffix={s.suffix}>{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* COMO CONTRATAR */}
      <div id="como" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="section-wrap" style={{ border: "none", paddingTop: 100, paddingBottom: 100 }}>
          <p className="eyebrow reveal-left">Como contratar</p>
          <h2 className="reveal" data-delay="120">Simples, direto,<br/>sem burocracia.</h2>
          <p className="sec-sub reveal" data-delay="220">O processo é o mesmo pros dois caminhos — automação ou site.</p>

          <div className="timeline" id="comoTimeline">
            <div className="timeline-rail"><div className="timeline-rail-fill" id="comoTimelineFill"></div></div>

            {[
              { n: "01", title: "Conversa rápida", desc: "Me conta o que você precisa hoje. 30 minutos pelo WhatsApp ou videochamada. Sem formulário, sem reunião longa.", time: "→ Hoje mesmo" },
              { n: "02", title: "Proposta sob medida", desc: "Envio proposta clara com escopo, prazo e valor. Sem surpresa no meio do projeto. Você decide com calma.", time: "→ Em até 24h" },
              { n: "03", title: "Entrega funcionando", desc: "Desenvolvo, testo e coloco no ar. Você aprova antes de ativar. Suporte e manutenção conforme o plano.", time: "→ Em até 7 dias úteis" },
            ].map((s, i) => (
              <div key={s.n} className="timeline-step" data-step={i}>
                <div className="timeline-dot">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <span className="timeline-time">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div id="contato" style={{ borderTop: "1px solid var(--border)", padding: "120px 48px", textAlign: "center" }}>
        <div className="cta-inner reveal-scale">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Vamos conversar?</p>
          <h2>Qual é o seu momento agora?</h2>
          <p>Sem formulário longo, sem proposta genérica. Uma conversa direta sobre o que faz sentido construir.</p>
          <div className="cta-actions">
            <div className="cta-buttons">
              <a href={WA} className="btn-primary" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
                </svg>
                Quero automatizar meu negócio
              </a>
              <a href={WA_SITE} className="btn-outline" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Quero um site profissional
              </a>
            </div>
            <span className="cta-note">Resposta em até 2h em horário comercial</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">Practiq<span>.</span></div>
        <ul className="footer-links">
          <li><a href="#automacao">Automação</a></li>
          <li><a href="#sites">Sites</a></li>
          <li><a href="#prova">Resultados</a></li>
        </ul>
        <div className="footer-copy">Tecnologia prática para negócios reais</div>
      </footer>

    </>
  );
}
