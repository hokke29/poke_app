// lib/api/pokeapi/types.ts

export interface PokemonListResponse {
  count: number; // 全ポケモン数
  next: string | null; // 次のページのURL（なければnull）
  previous: string | null; // 前のページのURL（なければnull）
  results: Array<{
    name: string; // ポケモン名
    url: string; // 詳細APIのURL
  }>;
}
