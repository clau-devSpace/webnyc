import React from "react";
import Head from "next/head";
import styles from './seguridadFisica.module.css';
import Header from "../components/header";
import CtaSection from "../components/ctaButton";
import WhatsAppBoton from "../components/whatsappButton";

export default function Investigación(){
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SecurityService",
        "name": "Servicios de Investigación Privada",
        "description": "Investigaciones especializadas para cada caso, a cargo de personal altamente calificado. Servicios de investigación integral para empresas y asuntos privados.",
        "provider": {
            "@type": "Organization",
            "name": "NYC Seguridad",
            "areaServed": "Comodoro Rivadavia, Chubut, Argentina"
        },
        "serviceType": [
            "Investigación Empresarial",
            "Investigación Privada",
            "Investigación de Fraudes",
            "Investigación de Personas",
            "Análisis de Eventos Adversos",
            "Investigación Corporativa"
        ],
        "availableChannel": {
            "@type": "ServiceChannel",
            "availableLanguage": "es",
            "serviceLocation": {
                "@type": "Place",
                "address": "Comodoro Rivadavia, Chubut, Argentina"
            }
        }
    }

    return (
        <>
            <Head>
                <title>Investigaciones Privadas | Personal Altamente Calificado</title>
                <meta
                    name="description"
                    content="Investigaciones especializadas para cada caso, a cargo de personal altamente calificado. Servicios de investigación integral para empresas y asuntos privados en Comodoro Rivadavia."
                />
                <meta
                    name="keywords"
                    content="investigación privada, investigación empresarial, investigación de fraudes, investigación de personas, detective privado, investigación corporativa"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Investigaciones Privadas - Personal Altamente Calificado"
                />
                <meta
                    property="og:description"
                    content="Investigaciones especializadas para cada caso, a cargo de personal altamente calificado. Servicios de investigación integral para empresas y asuntos privados."
                />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/fondo-libro.jpg" />
                <link rel="canonical" href="https://nycseguridad.com.ar/investigaciones" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>

            <WhatsAppBoton />
            <Header
                title="Investigaciones"
                subtitle="Estamos aquí para ayudarte"
                description="Investigaciones especializadas para cada caso, a cargo de personal altamente calificado"
                backgroundImage="/images/fondo-libro.jpg"
            />
            {/* Service Overview Section */}
            <section className={styles.serviceOverview}>
                <div className={styles.container}>
                    <div className={styles.overviewContent}>
                        <div className={styles.overviewText}>
                            <h2>Investigaciones</h2>
                            <p>
                                En NYC contamos con un equipo especializado dedicado a
                                ejecutar investigaciones integrales, abarcando tanto el ámbito
                                empresarial como asuntos de carácter privado. Las
                                organizaciones frecuentemente enfrentan eventos adversos que
                                impactan directamente sus activos fundamentales: capital
                                humano, infraestructura física, bienes, datos confidenciales y
                                prestigio institucional, comprometiendo así el cumplimiento de
                                sus metas organizacionales y, en ocasiones, poniendo en riesgo
                                la viabilidad operativa de la empresa.
                            </p>
                            <p>
                                Una investigación tiene como propósito establecer de forma
                                exhaustiva y fidedigna los hechos relacionados con un evento
                                específico, determinando si hubo comportamientos irregulares,
                                identificando las condiciones bajo las cuales ocurrieron,
                                estableciendo la identidad de los implicados y verificando si
                                se transgredieron normativas legales o políticas internas de
                                la organización
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <CtaSection />
        </>
    );
}