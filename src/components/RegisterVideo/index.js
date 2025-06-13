import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

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