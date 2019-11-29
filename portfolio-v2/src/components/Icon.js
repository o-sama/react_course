import styled, { css } from "styled-components";

const Icon = styled.img`
  height: 100px;
  width: 100px;
  padding: 0 35px;

  ${props => {
    if (props.work === "r1") {
      return css`
        cursor: pointer;
        height: 150px;
        width: 250px;
      `;
    } else if (props.work === "r2") {
      return css`
        cursor: pointer;
        height: 100px;
        width: 250px;
      `;
    } else if (props.school) {
      return css`
        height: 250px;
        width: 250px;
      `;
    } else if (props.navTop) {
      return css`
        position: fixed;
        top: 47%;
        right: 1%;
        padding: 0;
        height: 50px;
        width: 50px;
        transform: translateY(-50%);
      `;
    } else if (props.navBot) {
      return css`
        position: fixed;
        top: 53%;
        right: 1%;
        padding: 0;
        height: 50px;
        width: 50px;
        transform: translateY(-50%);
      `;
    }
  }};
`;

export default Icon;
