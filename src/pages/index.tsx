
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Land = dynamic(() => import('@/components/home/land'), { ssr: false });
const Servicos = dynamic(() => import('@/components/home/servicos'), { ssr: false });
const Sobre = dynamic(() => import('@/components/home/sobre'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Despachante Beto Dheon | Documentação Veicular</title>
        <meta
          name="description"
          content="Despachante Beto Dheon - Soluções em documentação veicular no Brasil e no exterior. Atendimento ágil, digital e seguro!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/betologo.jpg" />
      </Head>
      
      <div className="min-h-screen w-full overflow-x-hidden">
        <Land />
        <Servicos />
        <Sobre />
      </div>
    </>
  );
}
