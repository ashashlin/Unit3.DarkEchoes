import "./EpisodeDetails.css";

/* eslint-disable react/prop-types */
export default function EpisodeDetails({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <section className="episode-details">
        <h2>Episode Details</h2>
        <p>Please select an episode for more information.</p>
      </section>
    );
  }

  return (
    <section className="episode-details">
      <h2>Episode {selectedEpisode.id}</h2>
      <h3 className="episode-details-episode-title">{selectedEpisode.title}</h3>
      <p className="episode-description">{selectedEpisode.description}</p>
      <button className="btn watch-now">Watch now</button>
    </section>
  );
}
