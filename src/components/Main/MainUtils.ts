import { ProjectItem, ProjectWithCanvas } from '@typeDefs/api';
import { useState } from 'react';
import api from 'src/service/api';

export type UseProjectData = ProjectWithCanvas['project'];

export interface UseProject {
  fetchRandomProject(): Promise<void>;
  fetchProjectById(id: string): Promise<void>;
  isLoading: boolean;
  data?: UseProjectData;
  errors: string[];
}

export const useProject = (): UseProject => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<UseProjectData | undefined>();
  const [errors, setErrors] = useState<string[]>([]);

  const validateProject = ({
    width,
    height,
    items,
  }: UseProjectData): boolean => {
    const gt = (a, b) => a > b;
    const lte = (a, b) => a <= b;
    const allTrue = (arr) => arr.reduce((a, b) => a && b);

    const validateItem = (item: ProjectItem) => [
      gt(item.height, 0) && lte(item.y, height),
      gt(item.width, 0) && lte(item.x, width),
      !isNaN(Number(item.rotation)),
      lte(6, item.color.length),
    ];

    return allTrue([
      gt(height, 0),
      gt(width, 0),
      ...items.flatMap(validateItem),
    ]);
  };

  const fetchProjectById = async (id: string) => {
    const { project } = await api.project.getSingle(id)();
    if (!validateProject(project)) {
      throw new Error('Invalid project data');
    }

    setData(project);
  };

  const fetchRandomProject = async () => {
    const { id } = await api.project.getInit();
    await fetchProjectById(id);
  };

  const fetchWrapper =
    (func) =>
    async (...args) => {
      setIsLoading(true);
      setErrors([]);
      setData(undefined);

      return func(...args)
        .finally(() => setIsLoading(false))
        .catch((e) =>
          setErrors((currentErrors) => [...currentErrors, e.message])
        );
    };

  return {
    fetchProjectById: fetchWrapper(fetchProjectById),
    fetchRandomProject: fetchWrapper(fetchRandomProject),
    isLoading,
    errors,
    data,
  };
};
