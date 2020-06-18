export const genres = [
  { _id: "comedyGenre", name: "Comedy" },
  { _id: "actionGenre", name: "Action" },
  { _id: "crimeGenre", name: "Crime" },
  { _id: "romanticGenre", name: "Romantic" },
  { _id: "adventureGenre", name: "Adventure" },
  { _id: "horrorGenre", name: "Horror" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
