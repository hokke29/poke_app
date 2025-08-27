import { pokeApi } from '../api/pokeApi';
import { PokemonResponse } from '../api/pokeApi/types';

/**
 * ポケモン情報リストを取得
 * @returns ポケモン情報リスト
 */
export async function fetchPokemonDetails({ page }: { page: number }) {
  // ポケモン一覧取得
  const resList = await pokeApi.fetchPokemonList({
    offset: page,
  });
  // ポケモン一覧の詳細情報を別々に取得
  const resDetails = await Promise.all(
    resList.results.map(async (p) => {
      // 詳細情報URLからIDを切り出し
      const id = p.url.split('/').filter(Boolean).pop();
      if (id) {
        // 取得できなかった場合、nullを代入
        return (await pokeApi.fetchPokemon({ id: id })) ?? null;
      }
    })
  );
  // null以外の詳細情報を取得
  const filteredDetails = resDetails.filter(
    (p): p is PokemonResponse => p !== null
  );
  return {
    pokemons: filteredDetails,
    totalCount: resList.count,
  };
}
