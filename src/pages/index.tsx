import BemVindo from '@/components/Bem_vindo';
import Biografia from "@/components/Biografia";
import Head from 'next/head';
import Teoria from '@/components/Teoria';

export default function Home() {
  return (
    <>
      <Head>
        <title>Universo - Página principal</title>
        <meta name='keywords' content='universo, planetas, sistema solar, espaço sideral' />
        <meta name='description' content='Encontre tudo sobre o desconhecido universo que moramos.' />
      </Head>
      <BemVindo/>
      <Biografia />
      <Teoria />
    </>
  )
}