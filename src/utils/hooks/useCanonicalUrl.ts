import { BASE_PATH } from '@constants';
import { useRouter } from 'next/router';

const useCanonicalUrl = (defaultPath?: string): string => {
  const { asPath } = useRouter();
  const path = defaultPath || asPath.split('?')[0];

  return `${BASE_PATH}${path}`;
};

export default useCanonicalUrl;
