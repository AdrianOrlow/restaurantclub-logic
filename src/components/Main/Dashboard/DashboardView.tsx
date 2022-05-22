import Button from '@shared/Button';
import Input from '@shared/Input';
import InputLabel from '@shared/InputLabel';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { UseProject } from '../MainUtils';
import {
  Container,
  Divider,
  Properties,
  Property,
  Wrapper,
} from './DashboardStyle';

interface Props {
  project: UseProject;
}

const Dashboard: React.FC<Props> = ({ project }) => {
  const [projectId, setProjectId] = useState<string>('');
  const { isLoading, fetchRandomProject, fetchProjectById, data } = project;

  const handleFetchClick = () =>
    !!projectId ? fetchProjectById(projectId) : fetchRandomProject();

  useEffect(() => {
    if (!data) {
      return;
    }

    setProjectId(data.id);
  }, [data, data?.id]);

  return (
    <Wrapper>
      <Container>
        <InputLabel title="Project ID">
          <div style={{ display: 'flex' }}>
            <Input
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              placeholder="Empty = random"
            />
            <Button
              style={{ marginLeft: '1rem' }}
              loading={isLoading}
              onClick={handleFetchClick}
            >
              Fetch
            </Button>
          </div>
        </InputLabel>

        {data && (
          <>
            <Divider />
            <Properties>
              {Object.entries(data)
                .filter(([k]) => k !== 'items')
                .map(([k, v]) => (
                  <Property key={k}>
                    <>
                      <b>{k}:</b>&nbsp;{v}
                    </>
                  </Property>
                ))}
            </Properties>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
