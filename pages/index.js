import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";

function Home() {
  return (
    <>  
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  )
}

export default Home;