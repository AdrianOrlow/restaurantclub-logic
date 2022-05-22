import { ProjectItem } from '@typeDefs/api';
import * as React from 'react';
import {
  BoundingBox,
  Box,
  Indicator,
  IndicatorBall,
  IndicatorText,
  Wrapper,
} from './ElementStyle';

interface Props {
  data: ProjectItem;
}

const Element: React.FC<Props> = ({ data }) => {
  const { rotation } = data;

  return (
    <Wrapper data={data}>
      <Indicator data={data}>
        <IndicatorBall />
        <IndicatorText>{rotation}°</IndicatorText>
      </Indicator>
      <Box data={data} />
      <BoundingBox data={data} />
    </Wrapper>
  );
};

export default Element;
