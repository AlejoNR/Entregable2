import { useState, useEffect } from 'react';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export function useCharacters({ page = 1, species = '' } = {}) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams({ page });
    if (species) params.append('species', species);

    fetch(`${BASE_URL}?${params.toString()}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            setCharacters([]);
            setInfo(null);
            setLoading(false);
            return null;
          }
          throw new Error(`Error ${res.status}: No se pudo obtener los personajes.`);
        }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        setCharacters(data.results);
        setInfo(data.info);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page, species]);

  return { characters, info, loading, error };
}

export async function fetchCharacterById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error(`Error ${res.status}: Personaje no encontrado.`);
  return res.json();
}
