import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainerStyle>
      <div className="footerName">
        <h1>RONALD SALVADOR</h1>
      </div>
      <div className="footer">
        <p>© 2024 Ronald Salvador</p>
        <p>Privacy Policy</p>
      </div>
    </FooterContainerStyle>
  );
};

export default Footer;

const FooterContainerStyle = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2.5rem 2rem;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  font-weight: 100;
  position: sticky;
  bottom: 0;
  background-color: pink;
  color: black;
  z-index: -2;
  height: auto;
  .footer {
    display: flex;
    justify-content: space-between;
  }

  .footerName {
    h1 {
      font-size: 20rem;
    }
  }
`;
