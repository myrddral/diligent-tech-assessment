import HeroesListItem from './heroes-list-item';
import { useHeroes } from './use-heroes';

function HeroesList() {
  const { data: heroes, loading, error, setAvailable } = useHeroes();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: Failed to fetch heroes</p>;
  }

  return (
    <>
      <h2>Heroes</h2>
      <ul className='heroes-list'>
        {heroes.map((hero) => (
          <HeroesListItem key={hero.id} hero={hero} setAvailable={setAvailable} />
        ))}
      </ul>
    </>
  );
}

export default HeroesList;
