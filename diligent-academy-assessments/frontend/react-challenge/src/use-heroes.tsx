import { useEffect, useState } from 'react';
import { callApi } from './call-api';

export interface Hero {
  id: number;
  name: string;
  available: boolean;
}

export function useHeroes() {
  const [data, setData] = useState<Hero[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const promise = callApi<Hero[]>('heroes');
    promise
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const setAvailable = (heroId: number, available: boolean) => {
    const updatedHeroes = data.map((hero) => {
      if (hero.id === heroId) {
        return { ...hero, available };
      }
      return hero;
    });
    setData(updatedHeroes);
  };

  return {
    data,
    loading,
    error,
    setAvailable,
  };
}
