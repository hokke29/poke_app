import styles from './pokemon-grid.module.scss';
import { PokemonResponse } from '@/lib/api/pokeApi/types';
import Image from 'next/image';
import Link from 'next/link';

export default function PokemonGrid({
  pokemons,
}: {
  pokemons: PokemonResponse[];
}) {
  return (
    <div className={styles.gridContainer}>
      {pokemons.map((p) => (
        <article className={styles.item} key={p.id}>
          <Link href={`/pokemon/${p.id}`}>
            <Image
              key={p.id}
              src={p.sprites.front_default ?? ''}
              alt={p.name}
              width={96}
              height={96}
              sizes="(min-width:1152px) 576px,50vw"
              style={{ width: '100px', height: 'auto' }}
              priority
            />
            {p.name}
          </Link>
        </article>
      ))}
    </div>
  );
}
