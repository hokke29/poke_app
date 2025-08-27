export interface PokemonListResponse {
  count: number; // 全ポケモン数
  next: string | null; // 次のページのURL（なければnull）
  previous: string | null; // 前のページのURL（なければnull）
  results: Array<{
    name: string; // ポケモン名
    url: string; // 詳細APIのURL
  }>;
}

export interface PokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
    back_default: string | null;
    versions: {
      'generation-i': {
        'red-blue': {
          front_default: string | null;
        };
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
