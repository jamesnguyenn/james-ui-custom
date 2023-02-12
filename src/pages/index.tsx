
import styles from '@/styles/Home.module.css'
import InstallationComponent from '@/screen/Installation'

export default function Home({ sideBarMenuData }: any) {

  return (
    <main className={styles.main}>
      <InstallationComponent />
    </main>
  )
}