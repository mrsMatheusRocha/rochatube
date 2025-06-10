import config from "../../../config.json";
import styled from "styled-components";

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .userInfo {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`

function Header() {
  return (
    <StyledHeader>
      <img />
      <section className="userInfo">
        <img src={`https://github.com/${config.github}.png`} alt="Banner"/>
        <div>
          <h2>
            {config.nome}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

export default Header;