import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

function useForm(propsform) {
  const [values, setValues] = useState(propsform.initialValues);
  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value
      });
    },
    clearForm() {
      setValues({})
    }
  }
}

function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

const PROJECT_URL = "https://cwbjdyzzukjuaqmhqmuh.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3YmpkeXp6dWtqdWFxbWhxbXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NDY1NDAsImV4cCI6MjA2NTQyMjU0MH0.bUcQH0lY6yDVfZkO6w831g1nwbXyekx7fp-CZtGoswU"

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = useState(false);
  const formCadastro = useForm({
    initialValues: { titulo: '', url: '' }
  });
  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel && (
        <form onSubmit={(e) => {
          e.preventDefault();
          setFormVisivel(false);
          formCadastro.clearForm();

          supabase.from("video").insert({
            title: formCadastro.values.titulo,
            url: formCadastro.values.url,
            thumb: getThumbnail(formCadastro.values.url),
            playlist: "jogos",
          })
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
          })
        }}>
          <div>
            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
              X
            </button>
            <input
              placeholder="Titulo do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  )
}