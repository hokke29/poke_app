'use client';

import { useEffect, useState } from 'react';
import PokemonGrid from './ui/pokemon-grid';
import { PokemonResponse } from '@/lib/api/pokeApi/types';
import Pagination from './ui/pagination';
import { useRouter } from 'next/navigation';
import Spinner from './ui/spinner';

export default function PokemonListClient({
  initPokemons,
  initPage,
  totalPage,
}: {
  initPokemons: PokemonResponse[];
  initPage: number;
  totalPage: number;
}) {
  const [pokemons, setPokemons] = useState(initPokemons);
  const [page, setPage] = useState(initPage);
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (page == initPage) return;
    const fetchData = async (page: number) => {
      setIsloading(true);
      const res = await fetch(`/api/pokemonList?page=${page}`);
      const newPokemons: PokemonResponse[] = await res.json();
      setPokemons(newPokemons);
      router.replace(`/pokemon/page/${page}`, { scroll: false });
      setIsloading(false);
    };
    fetchData(page);
  }, [page, initPage]);

  /** ページ切り替え */
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <PokemonGrid pokemons={pokemons} />
      <Pagination
        currentPage={page}
        totalPages={totalPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
