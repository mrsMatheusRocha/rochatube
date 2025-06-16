import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import config from "../config.json";
import Menu from "../src/components/Menu";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { videoService } from "../src/services/videoService";
import Head from "next/head";

const PROJECT_URL = "https://cwbjdyzzukjuaqmhqmuh.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3YmpkeXp6dWtqdWFxbWhxbXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NDY1NDAsImV4cCI6MjA2NTQyMjU0MH0.bUcQH0lY6yDVfZkO6w831g1nwbXyekx7fp-CZtGoswU"

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

function Home() {
  const service = videoService();
  const [valorFiltro, setValorFiltro] = useState();
  const [playlists, setPlaylists] = useState({ jogos: [] });

  useEffect(() => {
    service.getAllVideos()
      .then((dados) => {
        const novasPlaylists = { ...playlists }
        dados.data.forEach(video => {
          novasPlaylists[video.playlist].push(video)
        });
        setPlaylists(novasPlaylists);
      })
  }, [])


  return (
    <>
      <Head>
        <title>RochaTube</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" />
      </Head>
      <div>
        <Menu valorFiltro={valorFiltro} setValorFiltro={setValorFiltro} />
        <Header src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D" />
        <Timeline searchValue={valorFiltro} playlists={playlists} />
      </div>
    </>
  )
}

export default Home;