"use client";

import { useEffect, useRef, useState } from "react";

const TYPEBOT_ID = "practiq-demo-bot-pfjbqej";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowLabel(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Label tooltip */}
      {showLabel && !open && (
        <div className="chat-label" onClick={() => setOpen(true)}>
          Teste o assistente com IA 🤖
        </div>
      )}

      {/* Bubble button */}
      <button
        className="chat-bubble"
        onClick={() => { setOpen((o) => !o); setShowLabel(false); }}
        aria-label="Abrir chat"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="chat-panel">
          <iframe
            ref={iframeRef}
            src={`https://typebot.co/${TYPEBOT_ID}`}
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="camera; microphone"
          />
        </div>
      )}

      <style>{`
        .chat-bubble {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #00c9a7;
          color: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,201,167,0.45);
          z-index: 9999;
          transition: transform .2s, box-shadow .2s;
        }
        .chat-bubble:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 28px rgba(0,201,167,0.55);
        }
        .chat-bubble svg { width: 26px; height: 26px; }

        .chat-label {
          position: fixed;
          bottom: 32px;
          right: 88px;
          background: #fff;
          color: #111;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 20px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
          cursor: pointer;
          z-index: 9998;
          white-space: nowrap;
          animation: fadeSlide .3s ease;
        }
        .chat-label::after {
          content: '';
          position: absolute;
          right: -7px;
          top: 50%;
          transform: translateY(-50%);
          border: 7px solid transparent;
          border-right: none;
          border-left-color: #fff;
        }

        .chat-panel {
          position: fixed;
          bottom: 90px;
          right: 24px;
          width: 380px;
          height: 560px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.25);
          z-index: 9998;
          background: #fff;
          animation: panelIn .25s ease;
        }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes panelIn {
          from { opacity: 0; transform: translateY(12px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 480px) {
          .chat-panel {
            bottom: 0;
            right: 0;
            width: 100vw;
            height: 75vh;
            border-radius: 16px 16px 0 0;
          }
          .chat-bubble { bottom: 16px; right: 16px; }
          .chat-label  { bottom: 24px; right: 80px; }
        }
      `}</style>
    </>
  );
}
