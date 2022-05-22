import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { UseProject } from '../MainUtils';
import { Container, Wrapper } from './CanvasStyle';
import Element from './Element';
import Scaled from './Scaled';
import { SizeType } from './Scaled/ScaledTypes';

interface Props {
  project: UseProject;
}

const Canvas: React.FC<Props> = ({ project }) => {
  const { width, height, items } = project.data;
  const wrapperRef = useRef<HTMLDivElement>();
  const [requestedSize, setRequestedSize] = useState<SizeType>({
    width: 1,
    height: 1,
  });

  const handleResize = () => {
    setRequestedSize({
      width: wrapperRef?.current?.clientWidth,
      height: wrapperRef?.current?.clientHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(handleResize, [project.data.id]);

  return (
    <Wrapper style={{ width: '100vw' }} ref={wrapperRef}>
      <Scaled requestedSize={requestedSize} baseSize={{ width, height }}>
        <Container style={{ width, height, background: '#fff' }}>
          {items.map((item) => (
            <Element key={item.id} data={item} />
          ))}
        </Container>
      </Scaled>
    </Wrapper>
  );
};

export default Canvas;
