import type { Hero } from './use-heroes';

interface HeroesListItemProps {
  hero: Hero;
  setAvailable: (heroId: number, available: boolean) => void;
}

function HeroesListItem({ hero, setAvailable }: HeroesListItemProps) {
  const handleSetAvailable = () => {
    setAvailable(hero.id, !hero.available);
  };
  return (
    <li className='heroes-list-item' onClick={handleSetAvailable}>
      <p style={{ color: hero.available ? 'green' : 'red' }}>
        {hero.id}. {hero.name} {hero.available ? '"Available"' : null}
      </p>
    </li>
  );
}

export default HeroesListItem;
