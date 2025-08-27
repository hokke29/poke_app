import ContentsContainer from '@/components/contentsContainer';
import Hero from '@/components/ui/hero';
import { pokeApi } from '@/lib/api/pokeApi';
import { notFound } from 'next/dist/client/components/not-found';
import Image from 'next/image';

export const revalidate = 60;

/**
 * ポケモン詳細ページ
 * @page ISR
 * @returns ReactNode
 */
export default async function Detail({ params }: { params: { id: string } }) {
  if (!params.id) return notFound();
  const pokemon = await pokeApi.fetchPokemon({ id: params.id });
  return (
    <>
      <Hero title="ポケモン詳細" subtitle="PokeAPIで取得した詳細ページ" />
      <ContentsContainer>
        <div>
          <Image
            key={pokemon.id}
            src={pokemon.sprites.front_default ?? ''}
            alt={pokemon.name}
            width={96}
            height={96}
            sizes="(min-width:1152px) 576px,50vw"
            style={{ width: '100px', height: 'auto' }}
            priority
          />
          <p>
            <strong>NAME:</strong> {pokemon.name}
          </p>
          <p>
            <strong>ID:</strong> {pokemon.id}
          </p>
          <p>
            <strong>Height:</strong> {pokemon.height}
          </p>
          <p>
            <strong>Weight:</strong> {pokemon.weight}
          </p>
          <p>
            <strong>Types:</strong>{' '}
            {pokemon.types.map((t) => t.type.name).join(', ')}
          </p>
        </div>
      </ContentsContainer>
    </>
  );
}
