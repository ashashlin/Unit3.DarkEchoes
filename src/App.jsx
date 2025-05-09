import { useState } from "react";
import Episodes from "./components/Episodes/Episodes";
import EpisodeDetails from "./components/EpisodeDetails/EpisodeDetails";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>

      <main>
        <Episodes episodes={episodes} setSelectedEpisode={setSelectedEpisode} />
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
