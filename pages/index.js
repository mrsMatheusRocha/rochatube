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
        <Header src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"/>
        <Timeline playlists={config.playlists} />
      </div>
    </>
  )
}

export default Home;