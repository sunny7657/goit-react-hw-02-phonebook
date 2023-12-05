import styled from 'styled-components';

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  button {
    display: block;
    margin-top: 20px;

    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
    box-sizing: border-box;
    color: #39739d;
    cursor: pointer;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.15385;

    padding: 8px 0.8em;
  }

  button:hover,
  button:focus {
    background-color: #b3d3ea;
    color: #2c5777;
  }
`;

export const Section = ({ title, children }) => (
  <SectionStyled>
    <h2>{title}</h2>
    {children}
  </SectionStyled>
);
