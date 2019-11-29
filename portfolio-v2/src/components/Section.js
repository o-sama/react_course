import styled, { css } from "styled-components";
import hero from "../img/hero.jpg";

const Section = styled.section`
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};

  ${props => {
    const ret = [];
    if (props.offSection) {
      ret.push(css`
        background: ${props => props.theme.offSection};
      `);
    }
    if (props.hero) {
      ret.push(css`
        height: 100vh;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ),
          url(${hero});
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
      `);
    }
    return ret;
  }};
`;

export default Section;
