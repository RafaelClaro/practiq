import type { Metadata } from "next";
import "./globals.css";
import ChatBubble from "@/components/ChatBubble";

export const metadata: Metadata = {
  title: "Practiq · Rafael Claro — Automação para negócios",
  description:
    "Automatizo WhatsApp, agendamento e atendimento para pequenas empresas e profissionais liberais. Menos processo manual. Mais tempo para o que importa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ChatBubble />
      </body>
    </html>
  );
}
