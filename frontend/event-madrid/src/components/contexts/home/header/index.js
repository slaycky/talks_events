import React from 'react';
import Section from 'components/structure/section';
import * as S from './header.styles';
import * as MoreInfo from 'components/core/MoreInfo/MoreInfo.styles';
import Text from 'components/core/Text';
import Button from 'components/core/Button';
import Container from 'components/structure/container';
import Content from 'components/structure/content';

const Header = (props) => {
  console.log('PRPS', props);
  return (
    <Section bg="orange">
      <S.Background>
        <S.ContainerLogo>
          <S.MainLogo />
        </S.ContainerLogo>
        <S.DateContainer>
          <S.TitleEvent>Jueves 30 de Noviembre de 2017</S.TitleEvent>
          <S.SubTitleEvent>Lamucca de Prado | 19:30h</S.SubTitleEvent>
        </S.DateContainer>
      </S.Background>
      <Container>
        <S.CtaContainer>
          <S.Separator>
            <S.CtaButtonContainer>
              <Button color="green">Quiero inscribirme ahora</Button>
            </S.CtaButtonContainer>
            <Content>
              <MoreInfo.Content>
                <MoreInfo.Left>
                  <Text
                    size="bigger"
                    color="white"
                    weight="bold"
                    fontStyle="italic"
                  >
                    Share knowledge, make friends, and have fun.
                  </Text>
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
                        Hotmart Talks{' '}
                      </Text>
                      es la oportunidad de participar en un Happy Hour y
                      aprovechar para conocer a personas que se dedican al
                      emprendimiento, los productos digitales y el mercado de la
                      innovación.
                    </p>
                    <br></br>
                    <p>
                      Ideado y organizado por Hotmart,
                      <Text
                        weight="bold"
                        size="small"
                        color="white"
                        fontStyle="italic"
                      >
                        {' '}
                        "Talks"{' '}
                      </Text>{' '}
                      tiene lugar en bares o sitios que amalgaman happy hour con
                      aprendizaje y cuenta siempre con la presencia de invitados
                      especiales, proporcionando una experiencia placentera para
                      todos. Es un momento dedicado a conversar, hacer amigos y
                      crecer.
                    </p>
                  </Text>
                </MoreInfo.Right>
              </MoreInfo.Content>
            </Content>
          </S.Separator>
        </S.CtaContainer>
      </Container>
    </Section>
  );
};
export default Header;
