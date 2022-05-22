const API_URL = 'https://recruitment01.vercel.app/api';

type Method = 'GET';

export const apiFetch =
  <I, O>(path: string, method: Method) =>
  async (data: I): Promise<O> => {
    const url = `${API_URL}${path}`;

    return fetch(url.toString()).then(async (response) => {
      let data;

      try {
        data = await response.json();
      } catch (e) {
        throw new Error('Cannot fetch data');
      }

      if (response.ok) {
        return data;
      }

      throw new Error(data?.message);
    });
  };
