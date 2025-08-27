import { apiFetch } from './client';
import { PokemonResponse } from './types';

type FetchOptions = {
  cache?: RequestCache;
  revalidate?: number;
};

export async function fetchPokemon({
  id,
  options = {},
}: {
  id: string;
  options?: FetchOptions;
}) {
  const endpoint = `pokemon/${id}`;

  const option: RequestInit = {
    cache: options.cache ?? 'force-cache',
    next:
      options.revalidate !== undefined
        ? { revalidate: options.revalidate }
        : undefined,
  };
  return await apiFetch<PokemonResponse>(endpoint, option);
}
