import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

const styles = {
  container: `h-full w-full flex bg-[#000]`,
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Main />
    </div>
  )
}
