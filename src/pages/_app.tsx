import '@/styles/globals.css'
import sideBarMenuDataJSON from "../../data/data-sideBar.json";
import MainLayout from '@/layouts'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <MainLayout sideBarMenuData={sideBarMenuDataJSON?.dataSideBar}><Component {...pageProps} /></MainLayout>
}
