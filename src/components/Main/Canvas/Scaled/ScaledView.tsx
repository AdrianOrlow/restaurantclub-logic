import * as React from 'react';
import { Container } from './ScaledStyle';
import { SizeType } from './ScaledTypes';

interface Props {
  children?: React.ReactNode;
  requestedSize: SizeType;
  baseSize: SizeType;
}

const Scaled: React.FC<Props> = ({ requestedSize, baseSize, children }) => {
  const [scale, setScale] = React.useState<number>(1);

  React.useEffect(() => {
    const scale = Math.min(
      requestedSize.width / baseSize.width,
      requestedSize.height / baseSize.height
    );

    setScale(scale);
  }, [
    requestedSize.height,
    requestedSize.width,
    baseSize.height,
    baseSize.width,
  ]);

  return (
    <Container {...requestedSize} scale={scale}>
      {children}
    </Container>
  );
};

export default Scaled;
