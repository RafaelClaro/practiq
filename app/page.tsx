import ClientEffects from "@/components/ClientEffects";

const WA =
  "https://wa.me/5511976287171?text=Olá%2C%20Rafael%21%20Vi%20o%20site%20da%20Practiq%20e%20quero%20saber%20mais%20sobre%20automação%20para%20minha%20empresa.";

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
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Começar agora
        </a>
      </nav>

      {/* HERO */}
      <div id="hero">
        <p className="eyebrow">Automação inteligente</p>
        <h1>Menos processo manual.<br /><em>Mais tempo para o que importa.</em></h1>
        <p className="hero-sub">
          Automatizo WhatsApp, agendamento e atendimento para pequenas empresas e profissionais que não têm tempo a perder com tarefas repetitivas.
        </p>
        <div className="hero-actions">
          <a href={WA} className="btn-primary" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Quero automatizar meu negócio
          </a>
        </div>

        <div className="flow-wrap reveal">
          <div className="flow-nodes">
            {[
              { label: "Mensagem", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/> },
              { label: "Agente IA", icon: <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></> },
              { label: "Agenda",   icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/></> },
              { label: "Notificação", icon: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M2 8c0-2.2.7-4.3 2-6M22 8a10 10 0 0 0-2-6"/></> },
              { label: "Atendido", icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></> },
            ].map((node, i, arr) => (
              <div key={node.label} style={{ display: "contents" }}>
                <div className="flow-node">
                  <div className="flow-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {node.icon}
                    </svg>
                  </div>
                  <span className="flow-label">{node.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="flow-arrow"><div className="flow-line"></div></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE WRAP */}
      <div id="timeline-wrap">
        <div id="timeline-rail">
          <div id="tl-track"></div>
          <div id="tl-fill"></div>
        </div>

        {/* DOR */}
        <div id="dor" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="section-wrap" style={{ border: "none", paddingTop: 100, paddingBottom: 100 }}>
            <p className="eyebrow reveal-left">O problema</p>
            <h2 className="reveal" data-delay="120">Processo manual trava<br/>qualquer negócio.</h2>
            <p className="sec-sub reveal" data-delay="220">Não importa o setor. Quem depende de processo manual perde tempo, comete erros e deixa de crescer.</p>
            <div className="dor-grid" data-stagger>
              <div className="dor-card">
                <div className="dor-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M9 2h6M12 2v3"/>
                  </svg>
                </div>
                <div className="dor-title">Horas perdidas em tarefas repetitivas</div>
                <div className="dor-desc">Responder a mesma dúvida por WhatsApp, confirmar compromissos manualmente, lembrar clientes individualmente. Trabalho que não gera valor.</div>
                <div className="dor-stat">↑ 3–5h por dia em operação manual</div>
              </div>
              <div className="dor-card">
                <div className="dor-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>
                  </svg>
                </div>
                <div className="dor-title">Cliente sumindo por falta de seguimento</div>
                <div className="dor-desc">Sem follow-up automático após o atendimento, o cliente simplesmente não volta. E você fica dependendo sempre de novos para fechar o mês.</div>
                <div className="dor-stat">↑ 80% não retornam sem um toque ativo</div>
              </div>
              <div className="dor-card">
                <div className="dor-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <div className="dor-title">Agenda com falhas e sem previsão</div>
                <div className="dor-desc">Compromissos confirmados que não acontecem. Horários vazios de última hora. Sem automação, imprevisibilidade vira rotina.</div>
                <div className="dor-stat">↑ até 30% de faltas sem confirmação ativa</div>
              </div>
            </div>
          </div>
        </div>

        {/* SOLUÇÃO */}
        <div id="solucao" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="section-wrap" style={{ border: "none", paddingTop: 100, paddingBottom: 100 }}>
            <p className="eyebrow reveal-left">A solução</p>
            <h2 className="reveal" data-delay="120">Automação construída<br/>pra rodar sem você.</h2>
            <p className="sec-sub reveal" data-delay="220">Desenvolvo o sistema uma vez. Ele trabalha todos os dias — sem erro, sem esquecimento, sem custo de hora extra.</p>
            <div className="steps-grid" data-stagger>
              <div className="step-card">
                <div className="step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </div>
                <div className="step-title">Diagnóstico do gargalo</div>
                <div className="step-desc">Identificamos exatamente onde você perde mais tempo e dinheiro hoje. Uma conversa direta, sem consultoria longa.</div>
              </div>
              <div className="step-card">
                <div className="step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
                  </svg>
                </div>
                <div className="step-title">Desenvolvimento sob medida</div>
                <div className="step-desc">Construo o fluxo completo: agente no WhatsApp, integração com agenda, notificações, follow-up e relatórios. Código real, não plugin genérico.</div>
              </div>
              <div className="step-card">
                <div className="step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M22 12A10 10 0 1 1 2 12"/><path d="M7 12h.01M12 7h.01M17 12h.01M12 17h.01"/>
                  </svg>
                </div>
                <div className="step-title">Entrega e manutenção contínua</div>
                <div className="step-desc">Você aprova antes de ativar. Depois disso, o sistema roda e eu mantenho. Se algo mudar no seu processo, atualizo.</div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVIÇOS */}
        <div id="servicos" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="section-wrap" style={{ border: "none", paddingTop: 100, paddingBottom: 100 }}>
            <p className="eyebrow reveal-left">Serviços</p>
            <h2 className="reveal" data-delay="120">O que posso<br/>automatizar pra você.</h2>
            <p className="sec-sub reveal" data-delay="220">Cada entrega é desenvolvida sob medida. Não é template, não é plataforma de terceiro.</p>
            <div className="services-grid" data-stagger>

              <div className="svc-card featured">
                <span className="svc-badge">Mais contratado</span>
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
                  </svg>
                </div>
                <div className="svc-name">Agente de atendimento no WhatsApp</div>
                <div className="svc-desc">Agente inteligente que responde dúvidas, agenda compromissos, confirma horários e encaminha casos complexos para você — 24h por dia, sem recepcionista.</div>
                <div className="svc-tags">
                  <span className="tag">WhatsApp</span>
                  <span className="tag">Google Agenda</span>
                  <span className="tag">IA</span>
                </div>
                <div className="svc-price">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5c0 3-6 3-6 6 0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5"/>
                  </svg>
                  A partir de R$ 2.500 + mensalidade
                </div>
              </div>

              <div className="svc-card">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M2 8c0-2.2.7-4.3 2-6M22 8a10 10 0 0 0-2-6"/>
                  </svg>
                </div>
                <div className="svc-name">Confirmação e lembrete automático</div>
                <div className="svc-desc">Mensagem automática antes do compromisso com link de confirmação ou reagendamento. Elimina faltas sem esforço da equipe.</div>
                <div className="svc-tags">
                  <span className="tag">WhatsApp</span>
                  <span className="tag">Telegram</span>
                  <span className="tag">Automático</span>
                </div>
                <div className="svc-price">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5c0 3-6 3-6 6 0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5"/>
                  </svg>
                  A partir de R$ 1.500 + mensalidade
                </div>
              </div>

              <div className="svc-card">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </div>
                <div className="svc-name">Régua de relacionamento pós-atendimento</div>
                <div className="svc-desc">Follow-up automático após cada atendimento: pesquisa de satisfação, lembrete de retorno e reativação de clientes inativos.</div>
                <div className="svc-tags">
                  <span className="tag">Retenção</span>
                  <span className="tag">WhatsApp</span>
                  <span className="tag">Personalizado</span>
                </div>
                <div className="svc-price">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5c0 3-6 3-6 6 0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5"/>
                  </svg>
                  A partir de R$ 2.000 + mensalidade
                </div>
              </div>

              <div className="svc-card">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div className="svc-name">Site profissional com agendamento</div>
                <div className="svc-desc">Página rápida, mobile e integrada ao WhatsApp ou Google Agenda. Passa credibilidade e converte visitante em cliente.</div>
                <div className="svc-tags">
                  <span className="tag">Site</span>
                  <span className="tag">Mobile-first</span>
                  <span className="tag">Integrado</span>
                </div>
                <div className="svc-price">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5c0 3-6 3-6 6 0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5"/>
                  </svg>
                  A partir de R$ 2.000 valor único
                </div>
              </div>

              <div className="svc-card">
                <div className="svc-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
                  </svg>
                </div>
                <div className="svc-name">Pacote completo</div>
                <div className="svc-desc">Agente no WhatsApp + confirmações automáticas + régua pós-atendimento + site. Tudo integrado, entregue e mantido por mim.</div>
                <div className="svc-tags">
                  <span className="tag">Tudo incluído</span>
                  <span className="tag">Prioridade</span>
                  <span className="tag">Suporte dedicado</span>
                </div>
                <div className="svc-price">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5C9 8.1 10.3 7 12 7s3 1.1 3 2.5c0 3-6 3-6 6 0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5"/>
                  </svg>
                  A partir de R$ 6.500 + mensalidade
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
            <p className="sec-sub reveal" data-delay="220">Exemplos reais do que a automação resolve no dia a dia de diferentes negócios.</p>

            <div className="stats-row" data-stagger>
              {[
                { num: "−70%", count: 70, prefix: "−", suffix: "%", label: "de faltas com confirmação automática" },
                { num: "3h",   count: 3,  prefix: "",  suffix: "h",  label: "economizadas por dia na operação" },
                { num: "24h",  count: 24, prefix: "",  suffix: "h",  label: "o agente atende sem parar" },
                { num: "7d",   count: 7,  prefix: "",  suffix: "d",  label: "até a automação estar no ar" },
              ].map((s) => (
                <div key={s.num} className="stat-box">
                  <div className="stat-num" data-count={s.count} data-prefix={s.prefix} data-suffix={s.suffix}>{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="cases-grid" data-stagger>
              {[
                {
                  icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>,
                  who: "Profissional de saúde", type: "Consultório próprio · Interior SP",
                  before: "Perdia 1h por dia respondendo horários disponíveis e lembrando clientes de retorno manualmente.",
                  after:  "WhatsApp conectado ao Google Agenda. Cliente agenda sozinho. Follow-up sai automático em 30 dias.",
                },
                {
                  icon: <><rect x="3" y="3" width="7" height="18"/><rect x="14" y="9" width="7" height="12"/><path d="M3 21h18"/></>,
                  who: "Escritório de contabilidade", type: "8 colaboradores · São Paulo",
                  before: "Clientes enviavam documentos pelo WhatsApp sem organização. A equipe gastava horas triando e cobrando pendências.",
                  after:  "Agente recebe, categoriza e notifica o responsável. Cobrança de pendências sai automática com prazo.",
                },
                {
                  icon: <><path d="M3 9l1-5h16l1 5"/><path d="M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"/><path d="M5 21V9M19 9v12"/><rect x="9" y="14" width="6" height="7"/><path d="M3 21h18"/></>,
                  who: "Pequeno comércio", type: "Loja física + delivery · ABC Paulista",
                  before: "Pedidos chegavam por WhatsApp, anotados à mão. Erros de pedido, fila no atendimento e cliente sem resposta no pico.",
                  after:  "Agente recebe pedido, confirma, registra e notifica a produção. Zero erro manual. Atendimento em segundos.",
                },
                {
                  icon: <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></>,
                  who: "Profissional de educação", type: "Aulas particulares · Online",
                  before: "Agenda gerenciada por mensagem. Aluno desmarcava em cima da hora sem aviso. Horário vazio, receita perdida.",
                  after:  "Agendamento online com confirmação automática e política de cancelamento integrada. Faltas caíram 60%.",
                },
              ].map((c) => (
                <div key={c.who} className="case-card">
                  <div className="case-header">
                    <div className="case-avatar">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {c.icon}
                      </svg>
                    </div>
                    <div>
                      <div className="case-who">{c.who}</div>
                      <div className="case-type">{c.type}</div>
                    </div>
                  </div>
                  <div className="case-before">{c.before}</div>
                  <div className="case-after">{c.after}</div>
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
            <p className="sec-sub reveal" data-delay="220">Três etapas para o seu negócio rodar no automático.</p>
            <div className="process-row" data-stagger>
              {[
                { n: "01", title: "Conversa rápida", desc: "Me conta o maior problema do seu processo hoje. 30 minutos pelo WhatsApp ou videochamada. Sem formulário, sem reunião longa.", time: "→ Hoje mesmo" },
                { n: "02", title: "Proposta sob medida", desc: "Envio uma proposta clara com escopo, prazo e valor. Sem surpresa no meio do projeto. Você decide com calma.", time: "→ Em até 24h" },
                { n: "03", title: "Entrega funcionando", desc: "Desenvolvo, testo e coloco no ar. Você aprova antes de ativar. Suporte e manutenção inclusos no plano mensal.", time: "→ Em até 7 dias úteis" },
              ].map((s) => (
                <div key={s.n} className="proc-step">
                  <div className="proc-num">{s.n}</div>
                  <div className="proc-title">{s.title}</div>
                  <div className="proc-desc">{s.desc}</div>
                  <div className="proc-time">{s.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{/* /timeline-wrap */}

      {/* CTA FINAL */}
      <div id="contato" style={{ borderTop: "1px solid var(--border)", padding: "120px 48px", textAlign: "center" }}>
        <div className="cta-inner reveal-scale">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Vamos conversar?</p>
          <h2>Seu negócio pode parar de operar no manual.</h2>
          <p>Sem formulário longo. Sem proposta genérica. Uma conversa direta sobre o que você precisa — e o que faz sentido construir.</p>
          <div className="cta-actions">
            <a href={WA} className="btn-primary" style={{ fontSize: 16, padding: "16px 32px" }} target="_blank" rel="noopener">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Quero automatizar meu negócio
            </a>
            <span className="cta-note">Resposta em até 2h em horário comercial</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">Practiq<span>.</span></div>
        <div className="footer-copy">Automação que funciona no seu dia a dia · São Paulo, BR</div>
      </footer>

      {/* WA FLOAT */}
      <a href={WA} className="wa-float" target="_blank" rel="noopener" aria-label="WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
