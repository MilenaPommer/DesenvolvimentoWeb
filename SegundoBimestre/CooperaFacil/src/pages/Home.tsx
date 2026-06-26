import { useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCards";
import PricingCards from "../components/PricingCards";
import ReCAPTCHA from 'react-google-recaptcha';
import LogoLonga from "../assets/LogoLonga.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import DocumentScanner from "../assets/document_scanner.svg";
import SmartIcon from "../assets/smart.svg";
import MobileChat from "../assets/mobile_chat.svg";
import Instagram from "../assets/instagram.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [statusText, setStatusText] = useState("");

    const [isChallengeCompleted, setChallengeCompleted] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    async function sendContactEmail() {
        if (!email || !message) {
            setStatusText("Por favor, preencha todos os campos.");
            return;
        }

        if (!isChallengeCompleted) {
            setStatusText("Confirme que você não é um robô.");
            return;
        }

        setStatusText("Enviando sua mensagem...");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            if (!response.ok) {
                const body = await response.json().catch(() => ({}));
                throw new Error(body.error ?? "Erro ao enviar mensagem.");
            }

            setStatusText("Mensagem enviada! Agradecemos por entrar em contato!");
            setEmail("");
            setMessage("");
            setChallengeCompleted(false);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Falha ao enviar. Tente novamente.";
            setStatusText(errorMessage);

            recaptchaRef.current?.reset();
            setChallengeCompleted(false);
        }
    }

    function handleCompleteChallenge(token: string | null) {
        setChallengeCompleted(!!token);
    }

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={LogoLonga} alt="Logo Coopera Fácil" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Home</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#pricing">Preços</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#contact">Contato</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={close} alt="Ícone fechar" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={menu} alt="Ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <div className="container content">
                    <p className="desktop-only">Coopera Fácil</p>
                    <h1>Transforme o compliance ambiental em previsibilidade operacional</h1>
                    <p>
                        O <strong>Coopera Fácil</strong> automatiza o gerenciamento de licenças ambientais na piscicultura, ajudando cooperativas e produtores a evitar multas, irregularidades e interrupções na produção.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Começar" /></span>
                        <span className="desktop-only">
                            <Button text="Entenda mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>Para cooperativas e piscicultores</h2>
                        </span>
                    </span>
                    <p>
                        O <strong>Coopera Fácil</strong> transforma processos burocráticos em um acompanhamento simples, automatizado e preventivo.
                    </p>
                </header>

                <section className="even-columns">
                    <Card
                        icon={DocumentScanner}
                        iconAlt="Ícone de Documento"
                        title="Monitoramento de Licenças"
                        text="Acompanhe automaticamente vencimentos, pendências e irregularidades ambientais dos produtores."
                    />
                    <Card
                        icon={SmartIcon}
                        iconAlt="Ícone de Robô"
                        title="Inteligência Artificial"
                        text="Nossa IA analisa documentos, identifica informações importantes e reduz o trabalho manual."
                    />
                    <Card
                        icon={MobileChat}
                        iconAlt="Ícone de Telefone Celular"
                        title="Integração com WhatsApp"
                        text="Os produtores enviam documentos de forma simples pelo WhatsApp, sem necessidade de treinamento. Números brutos da NASA viram visualizações claras e acessíveis, pra qualquer curioso entender a ciência por trás de Marte."
                    />
                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <h2>Quem conhece o problema entende o valor da solução</h2>
                    </span>
                    <p>
                        Profissionais do setor reconhecem a importância de tornar o compliance ambiental mais simples e previsível.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard image="https://ui-avatars.com/api/?name=Alice+Bohrer&background=random" text="Hoje acompanhamos dezenas de produtores e qualquer documento vencido pode impactar toda a operação. Uma ferramenta como essa traria muito mais segurança." name="Alice Bohrer" role="Gerente de Piscicultura" rating={5} />
                        <TestimonialCard image="https://ui-avatars.com/api/?name=Antonio+Carlos&background=random" text="Grande parte do trabalho é organizar documentos e acompanhar prazos. Automatizar isso economizaria muito tempo." name="Antonio Carlos Rocha" role="Consultor Ambiental" rating={5} />
                        <TestimonialCard image="https://ui-avatars.com/api/?name=Sandro+Ramos&background=random" text="A facilidade de usar o WhatsApp é um diferencial enorme para os produtores." name="Sandro Ramos" role="Piscicultor Integrado" rating={5} />
                        <TestimonialCard image="https://ui-avatars.com/api/?name=Endrews+Ross&background=random" text="Antes, acompanhar a situação ambiental dos produtores exigia consultas constantes e muito controle manual. Com uma solução centralizada, conseguimos identificar riscos antes que eles afetem a produção." name="Endrews Ross" role="Coordenador de Cooperativa" rating={4} />
                        <TestimonialCard image="https://ui-avatars.com/api/?name=Gabrielli+Vieira&background=random" text="A renovação de licenças sempre foi uma preocupação porque qualquer atraso pode gerar prejuízos. Receber alertas antecipados e ter tudo organizado em um só lugar faz toda a diferença." name="Gabrielli Vieira" role="Piscicultora Cooperada" rating={5} />
                    </div>

                    <div className="carousel-content">
                        <TestimonialCard image="https://ui-avatars.com/api/?name=Alice+Bohrer&background=random" text="Hoje acompanhamos dezenas de produtores e qualquer documento vencido pode impactar toda a operação. Uma ferramenta como essa traria muito mais segurança." name="Alice Bohrer" role="Gerente de Piscicultura" rating={5} />
                        <TestimonialCard image="https://ui-avatars.com/api/?name=Antonio+Carlos&background=random" text="Grande parte do trabalho é organizar documentos e acompanhar prazos. Automatizar isso economizaria muito tempo." name="Antonio Carlos Rocha" role="Consultor Ambiental" rating={5} />
                        <TestimonialCard image="https://ui-avatars.com/api/?name=Sandro+Ramos&background=random" text="A facilidade de usar o WhatsApp é um diferencial enorme para os produtores." name="Sandro Ramos" role="Piscicultor Integrado" rating={5} />
                        <TestimonialCard image="https://ui-avatars.com/api/?name=Endrews+Ross&background=random" text="Antes, acompanhar a situação ambiental dos produtores exigia consultas constantes e muito controle manual. Com uma solução centralizada, conseguimos identificar riscos antes que eles afetem a produção." name="Endrews Ross" role="Coordenador de Cooperativa" rating={4} />
                        <TestimonialCard image="https://ui-avatars.com/api/?name=Gabrielli+Vieira&background=random" text="A renovação de licenças sempre foi uma preocupação porque qualquer atraso pode gerar prejuízos. Receber alertas antecipados e ter tudo organizado em um só lugar faz toda a diferença." name="Gabrielli Vieira" role="Piscicultora Cooperada" rating={5} />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos</p>
                    <h2>Escolha o plano ideal para sua cooperativa</h2>
                </header>

                <section className="even-columns gap-1.5">
                    <PricingCards
                        name="Essencial"
                        price="R$ 499"
                        period="/mês"
                        features={[
                            "✔ Até 50 produtores",
                            "✔ Monitoramento de licenças",
                            "✔ IA para leitura documental",
                            "✔ Alertas automáticos",
                            "✔ Integração WhatsApp",
                            "✔ Painel básico"
                        ]}
                    />
                    <PricingCards
                        name="Profissional"
                        price="R$ 999"
                        period="/mês"
                        premium
                        badge="MAIS POPULAR"
                        features={[
                            "✔ Até 200 produtores",
                            "✔ Monitoramento de licenças",
                            "✔ IA para leitura documental",
                            "✔ Alertas automáticos",
                            "✔ Integração WhatsApp",
                            "✔ Relatórios avançados",
                            "✔ Dashboard completo"
                        ]}
                    />
                    <PricingCards
                        name="Enterprise"
                        price="Sob consulta"
                        features={[
                            "✔ Cooperativas de grande porte",
                            "✔ Todas as funcionalidades",
                            "✔ Usuários ilimitados",
                            "✔ Suporte prioritário",
                            "✔ Treinamentos exclusivos"
                        ]}
                    />
                </section>
            </section>
            <section id="contact" className="container">
                <header>
                    <h2>Fale com nossa equipe</h2>
                    <p>
                        Quer entender como a Coopera Fácil pode ajudar sua cooperativa a reduzir riscos e aumentar a previsibilidade operacional? Entre em contato conosco.
                    </p>
                </header>

                <div className="contact-form">
                    <input
                        type="email"
                        placeholder="Seu melhor email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Informe o motivo do contato."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={handleCompleteChallenge}
                        theme="dark"
                    />
                    <span>
                        <button
                            className="btn-primary"
                            onClick={sendContactEmail}
                        >
                            Enviar
                        </button>
                    </span>
                    {statusText && (
                        <p style={{ textAlign: "center", color: "var(--primary-color)", marginTop: "1rem", fontWeight: "bold" }}>
                            {statusText}
                        </p>
                    )}
                </div>
            </section>
            <footer>
                <div className="container footer-content">
                    <div className="footer-brand">
                        <img src={LogoLonga} alt="Logo Coopera Fácil" width={160} height={60} />
                        <div className="footer-social">
                            <a href="#">
                                <img src={Instagram} alt="Instagram" width={24} height={24} />
                            </a>
                            <a href="#">
                                <img src={Github} alt="GitHub" width={24} height={24} />
                            </a>
                            <a href="#">
                                <img src={Linkedin} alt="LinkedIn" width={24} height={24} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h3>Produto</h3>
                            <ul>
                                <li><a href="#">Sobre o Coopera Fácil</a></li>
                                <li><a href="#">Como funciona</a></li>
                                <li><a href="#">Planos</a></li>
                                <li><a href="#">Atualizações</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Soluções</h3>
                            <ul>
                                <li><a href="#">Piscicultores</a></li>
                                <li><a href="#">Cooperativas</a></li>
                                <li><a href="#">Consultores</a></li>
                                <li><a href="#">Parceiros</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>Recursos</h3>
                            <ul>
                                <li><a href="#">Site de Dúvidas</a></li>
                                <li><a href="#">Documentação</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Suporte</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Feito com ❤️ na aula de Desenvolvimento Web 🚀 ©2026 Coopera Fácil</p>
                </div>
            </footer>
        </>
    )
}