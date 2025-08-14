import { pokeApi } from '@/lib/api/pokeApi';

/**
 * ポケモン一覧
 * @page ISR
 * @returns ReactNode
 */
export default async function Pokemon() {
  const res = await pokeApi.fetchPokemonList({ limit: 5 });
  return (
    <ul>
      {res.results.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
