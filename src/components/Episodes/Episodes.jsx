import "./Episodes.css";

/* eslint-disable react/prop-types */
export default function Episodes({ episodes, setSelectedEpisode }) {
  return (
    <section className="episodes">
      <h2>Episodes</h2>

      <ul className="episodes-list">
        {episodes.map((episode) => (
          <li
            key={episode.id}
            className="episode"
            onClick={() => setSelectedEpisode(episode)}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
