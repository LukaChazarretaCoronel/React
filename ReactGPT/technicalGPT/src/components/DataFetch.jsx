//Crea un componente que obtenga datos de una API cuando se monta mediante el gancho useEffect.
//Puedes simular la llamada a la API mediante setTimeout. Muestra un mensaje de carga mientras
// se obtienen los datos y muestra los datos una vez que se hayan cargado.
import { useState, useEffect } from 'react';

const API_ENDPOINT_URL = 'https://swapi.dev/api/people/';

export function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(API_ENDPOINT_URL)
      .then(response => response.json())
      .then(result => {
        setData(result.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) return <div>...loading</div>
  if (error) return <div>error:{error.message}</div>
  if (!data) return null
  return(
    <>
    {data.map((person, index) => 
    (
        <div key={index}>{person.name} <span>{person.birth_year} </span></div>

    ))}
    </>
  )
}
