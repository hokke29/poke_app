export const revalidate = 60;

import { notFound } from 'next/navigation';
import PokemonListClient from '@/components/pokemonListClient';
import { PAGE_LIMIT } from '@/lib/const/commonConstants';
import { fetchPokemonDetails } from '@/lib/utils/fetchPokemonDetails';

/**
 * 一覧トップ(page=1)だけ事前に生成
 */
export async function generateStaticParams() {
  return [{ page: '1' }];
}

/**
 * ポケモン一覧
 * @page ISR
 * @returns ReactNode
 */
export default async function Pokemon({
  params,
}: {
  params: { page: string };
}) {
  const page = Number(params.page);
  if (isNaN(page) || page < 1) return notFound();
  const { pokemons, totalCount } = await fetchPokemonDetails({ page: page });
  const totalPage = Math.ceil(totalCount / PAGE_LIMIT);
  return (
    <>
      <PokemonListClient
        initPokemons={pokemons}
        initPage={page}
        totalPage={totalPage}
      />
    </>
  );
}
