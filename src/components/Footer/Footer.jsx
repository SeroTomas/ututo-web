import {
  FooterContainer,
  FooterHeader,
  FooterLinks,
  FooterLinksContainer,
  FooterLinksGroup,
  FooterLinksTitle,
  FooterSocialLinks,
  FooterSocialLinksContainer,
  FooterText,
  SocialLinks,
  UtutoLogoMono,
} from "./Footer.styles";
import ututoLogoMono from "../../assets/ututo-logo-black.png";
import { Container } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (

    <FooterContainer>
      {/* FOOTER HEADER */}
      <FooterHeader>
        <Container maxW="6xl">
          <UtutoLogoMono src={ututoLogoMono} alt="ututo-logo-mono-rf456" />
        </Container>
      </FooterHeader>

      {/* FOOTER LINKS CONTAINER */}
      <Container maxW="6xl">
        <FooterLinksContainer>
          <FooterLinksGroup>
            <FooterLinksTitle>Sobre Nosotros</FooterLinksTitle>
            <FooterLinks href="#">Historia</FooterLinks>
            <FooterLinks href="#">Proyecto</FooterLinks>
            <FooterLinks href="#">Ututo 11</FooterLinks>
            <FooterLinks href="#">Roadmap 2024</FooterLinks>
          </FooterLinksGroup>

          <FooterLinksGroup>
            <FooterLinksTitle>Comunidad</FooterLinksTitle>
            <FooterLinks href="#">Tienda</FooterLinks>
            <FooterLinks href="#">Discord</FooterLinks>
            <FooterLinks href="#">Twitter</FooterLinks>
          </FooterLinksGroup>

          <FooterLinksGroup>
            <FooterLinksTitle>Ayuda</FooterLinksTitle>
            <FooterLinks href="#">Preguntas Frecuentes</FooterLinks>
            <FooterLinks href="#">Guia de uso</FooterLinks>
            <FooterLinks href="#">Contacto</FooterLinks>
          </FooterLinksGroup>

          <FooterLinksGroup>
            <FooterLinksTitle>Blog</FooterLinksTitle>
            <FooterLinks href="#">Ultimas entradas</FooterLinks>
            <FooterLinks href="#">Noticias importantes</FooterLinks>
          </FooterLinksGroup>

          <FooterLinksGroup>
            <FooterLinksTitle>Contacto</FooterLinksTitle>
            <FooterLinks href="#">contacto@ututo.com.ar</FooterLinks>
          </FooterLinksGroup>
        </FooterLinksContainer>
      </Container>

      {/* FOOTER SOCIAL LINKS */}
      <FooterSocialLinks>
        <FooterSocialLinksContainer>
          <SocialLinks href="#">LINK</SocialLinks>
          <SocialLinks href="#">LINK</SocialLinks>
          <SocialLinks href="#">LINK</SocialLinks>
          <SocialLinks href="#">LINK</SocialLinks>
        </FooterSocialLinksContainer>
        <FooterText>
          Ututo {currentYear}. Todos los derechos reservados.
        </FooterText>
      </FooterSocialLinks>
    </FooterContainer>
  );
};

export default Footer;
