import React from 'react';
import Section from 'components/structure/section';
import * as S from './footer.styles';
import * as MoreInfo from 'components/core/MoreInfo/MoreInfo.styles';
import LogoHotmart from 'assets/images/logoHotmart.png';
import Container from 'components/structure/container';
import Content from 'components/structure/content';
import Text from 'components/core/Text';

const Footer = () => (
  <Section bg="grayDark">
    <S.Background>
      <Container>
        <Content>
          <MoreInfo.Content>
            <MoreInfo.Left>
              <S.NormalizeContent>
                <Text
                  size="bigger"
                  color="white"
                  weight="bold"
                  fontStyle="italic"
                >
                  Idealización y realización
                </Text>
              </S.NormalizeContent>
            </MoreInfo.Left>
            <MoreInfo.Right>
              <Text size="small" weight="light" color="white">
                <p>
                  <Text
                    size="small"
                    weight="bold"
                    color="white"
                    fontStyle="italic"
                  >
                    Hotmart{' '}
                  </Text>{' '}
                  es líder en la venta y distribución de infoproductos en toda
                  Latinoamérica y ha permitido que miles de personas trabajen
                  con lo que más aman, vendiendo y divulgando productos
                  digitales en todo el mundo.
                </p>
                <br></br>
                <p>
                  Debido al interés del mercado europeo por el segmento de
                  productos digitales, Hotmart posee una sede en Madri y actúa
                  también en Holanda y Francia. Ahora, la empresa sintió que
                  tiene mucho para compartir con los profesionales locales y
                  decidió promover un encuentro entre ellos:{' '}
                  <Text size="small" weight="semibold" color="white">
                    especialistas y personas de diferentes áreas que, al igual
                    que tú, están interesadas en aprender y compartir sus
                    experiencias para darle un nuevo sentido a sus trayectorias
                    profesionales.
                  </Text>
                </p>
              </Text>
            </MoreInfo.Right>
          </MoreInfo.Content>
        </Content>
      </Container>
    </S.Background>
    <S.FooterLogoContent>
      <div>
        <S.LogoFooter src={LogoHotmart}></S.LogoFooter>
      </div>
    </S.FooterLogoContent>
  </Section>
);

export default Footer;
