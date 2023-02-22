import '@/styles/globals.css'
import sideBarMenuDataJSON from "../../data/data-sideBar.json";
import MainLayout from '@/layouts'
import type { AppProps } from 'next/app';
import Head from 'next/head'
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Front End Component Example</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <link rel="icon" href="/images/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
    <MainLayout sideBarMenuData={sideBarMenuDataJSON?.dataSideBar}><Component {...pageProps} /></MainLayout>
  </>
}
