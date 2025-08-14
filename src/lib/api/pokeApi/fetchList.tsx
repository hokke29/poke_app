// lib/api/pokeapi/fetchList.ts
import { apiFetch } from './client';
import { PokemonListResponse } from './types';

type FetchOptions = {
  cache?: RequestCache;
  revalidate?: number;
};

export async function fetchPokemonList({
  limit = 20,
  offset = 0,
  options = {},
}: {
  limit?: number;
  offset?: number;
  options?: FetchOptions;
} = {}) {
  const endpoint = `pokemon?limit=${limit}&offset=${offset}`;

  const option: RequestInit = {
    cache: options.cache ?? 'force-cache',
    next:
      options.revalidate !== undefined
        ? { revalidate: options.revalidate }
        : undefined,
  };
  return await apiFetch<PokemonListResponse>(endpoint, option);
}
