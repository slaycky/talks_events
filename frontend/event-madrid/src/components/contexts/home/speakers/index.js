import React, { useState, useEffect } from 'react';
import Section from 'components/structure/section';
import Text from 'components/core/Text';
import Container from 'components/structure/container';
import Content from 'components/structure/content';
import * as S from './speakers.styles';
import Card from './card';
import Button from 'components/core/Button';
import api from 'services/api';
import * as url from 'constants/endpoints';
import Loading from 'components/core/Loading';
import Centered from 'components/structure/centered';

const Speakers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(`${url.SPEAKERS}?highlighted=true`)
      .then((response) => {
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

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
          {isLoading ? (
            <Centered>
              <Loading />
            </Centered>
          ) : (
            <S.SpeakerContent>
              {data.map((speaker, index) => {
                return <Card key={index} data={speaker} />;
              })}
            </S.SpeakerContent>
          )}
          <S.ActionButtonContent>
            <Button color="orange">Conoce a todos los ponentes</Button>
          </S.ActionButtonContent>
        </Content>
      </Container>
    </Section>
  );
};

export default Speakers;
