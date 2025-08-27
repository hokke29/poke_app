import { pokeApi } from '@/lib/api/pokeApi';
import { fetchPokemonDetails } from '@/lib/utils/fetchPokemonDetails';
import { NextRequest, NextResponse } from 'next/server';

/**
 * ポケモン一覧取得API
 * @param offset - ページ番号
 * @returns ポケモン一覧
 */
export async function GET(req: NextRequest) {
  const page = Number(req.nextUrl.searchParams.get('page') || 1);
  const { pokemons } = await fetchPokemonDetails({ page: page });

  return NextResponse.json(pokemons);
}
