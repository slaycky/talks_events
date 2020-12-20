import React from 'react';
import Section from 'components/structure/section';
import Text from 'components/core/Text';
import Container from 'components/structure/container';
import Content from 'components/structure/content';
import * as S from './speakers.styles';
import Card from './card';
import Button from 'components/core/Button';

const Speakers = ({ data }) => {
  return (
    <Section>
      <Container>
        <Content>
          <S.Title>
            <Text size="bigger" color="orange" weight="bold" fontStyle="italic">
              Conoce a algunos <br />
              de los ponentes
            </Text>
          </S.Title>
          <S.SpeakerContent>
            {data
              .filter((speaker) => speaker.highlighted)
              .map((speaker, index) => {
                return <Card key={index} data={speaker} />;
              })}
          </S.SpeakerContent>
          <S.ActionButtonContent>
            <Button color="orange">Conoce a todos los ponentes</Button>
          </S.ActionButtonContent>
        </Content>
      </Container>
    </Section>
  );
};

export default Speakers;
