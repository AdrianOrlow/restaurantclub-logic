import { Project, ProjectWithCanvas } from '@typeDefs/api';
import { apiFetch } from '../utils';

const paths = {
  getInit: apiFetch<void, Project>('/init', 'GET'),
  getSingle: (id: string) =>
    apiFetch<void, ProjectWithCanvas>(`/project/${id}`, 'GET'),
};

export default paths;
