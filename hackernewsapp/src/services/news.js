let item1 = {
  url:
    "https://www.reddit.com/r/FreeGameFindings/comments/hfnk3u/epic_games_game_stranger_things_3_the_game/",
  title: "StrangerThings 3 The Game",
  img: "",
  points: 733,
  comments: 47,
  id: "item01",
};
let item2 = {
  url:
    "https://www.reddit.com/r/linuxmasterrace/comments/hfmjwx/you_find_me_a_better_way_of_doing_it_then/",
  title: "Better way to get news: Rss Feed",
  img: "https://i.redd.it/wvtgws86b2751.jpg",
  points: 1900,
  comments: 167,
  id: "item02",
};
let item3 = {
  url:
    "https://www.reddit.com/r/ProgrammerHumor/comments/hftchs/either_hot_or_cold_theres_nothing_in_between/",
  title: "Either Hot or cold no inbetween",
  img:
    "https://preview.redd.it/hcop8aox64751.png?width=640&height=366&crop=smart&auto=webp&s=e14c9fdb3dd8cf0e50426bbdcafe778e436d172f",
  points: 1900,
  comments: 167,
  id: "item03",
};
const news = [item1, item2, item3];
export function getNews() {
  return news;
}
