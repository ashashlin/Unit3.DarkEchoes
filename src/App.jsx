import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function Episodes() {
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

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="episode-details">
          <h2>Episode Details</h2>
          <p>Please select an episode for more information.</p>
        </section>
      );
    }

    return (
      <section>
        <h2>Episode {selectedEpisode.id}</h2>
        <h3 className="episode-details-episode-title">
          {selectedEpisode.title}
        </h3>
        <p className="episode-description">{selectedEpisode.description}</p>
        <button className="btn watch-now">Watch now</button>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>

      <main>
        <Episodes />
        <EpisodeDetails />
      </main>
    </>
  );
}
