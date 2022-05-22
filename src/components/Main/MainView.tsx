import Alert from '@shared/Alert';
import Loading from '@shared/Loading';
import * as React from 'react';
import Canvas from './Canvas';
import Dashboard from './Dashboard';
import { Container, Wrapper } from './MainStyle';
import { useProject } from './MainUtils';

const Main: React.FC = () => {
  const project = useProject();
  const { errors, isLoading } = project;

  return (
    <Wrapper>
      <Container>
        <Dashboard project={project} />
        {project?.data && <Canvas project={project} />}
        {errors.map((error) => (
          <Alert key={error} type="error">
            {error}
          </Alert>
        ))}
        {isLoading && <Loading />}
      </Container>
    </Wrapper>
  );
};

export default Main;
