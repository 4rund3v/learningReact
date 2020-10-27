const movieList = [
  {
    _id: "cbc7c378-1790-11eb-97a2-e5f7bf0748df",
    genre: "",
    name: "The Last - Naruto the Movie v2.mkv",
    stock: 10,
    year: 2020,
  },
  {
    _id: "cbc7c379-1790-11eb-afad-e5f7bf0748df",
    genre: "",
    name: "2 States 2014 Hindi 1080p",
    stock: 2,
    year: 2020,
  },
  {
    _id: "cbc7c37a-1790-11eb-ba79-e5f7bf0748df",
    genre: "",
    name: "Borat.2.Subsequent.Moviefilm.2020.HDRip.XviD.AC3-EVO[TGx]",
    stock: 1,
    year: 2020,
  },
  {
    _id: "cbc7c37b-1790-11eb-b022-e5f7bf0748df",
    genre: "",
    name: "Chennai Express 2013 1080p",
    stock: 7,
    year: 2020,
  },
  {
    _id: "cbc7c37c-1790-11eb-9dc5-e5f7bf0748df",
    genre: "",
    name: "Dear Zindagi",
    stock: 10,
    year: 2020,
  },
  {
    _id: "cbc7c37d-1790-11eb-ae64-e5f7bf0748df",
    genre: "",
    name: "Dolemite Is My Name (2019) [WEBRip] [1080p] [YTS.LT]",
    stock: 2,
    year: 2020,
  },
  {
    _id: "cbc7c37e-1790-11eb-80f9-e5f7bf0748df",
    genre: "",
    name: "English Medium (2020).mkv",
    stock: 5,
    year: 2020,
  },
  {
    _id: "cbc7c37f-1790-11eb-83f0-e5f7bf0748df",
    genre: "",
    name: "Fantastic Beasts The Crimes of Grindelwald (2018).mkv",
    stock: 2,
    year: 2020,
  },
  {
    _id: "cbc7c380-1790-11eb-83e9-e5f7bf0748df",
    genre: "",
    name: "Ginny Weds Sunny (2020)",
    stock: 5,
    year: 2020,
  },
  {
    _id: "cbc7c381-1790-11eb-bb50-e5f7bf0748df",
    genre: "",
    name: "Grave Of The Fireflies (1988)",
    stock: 2,
    year: 2020,
  },
  {
    _id: "cbc7c382-1790-11eb-8a3a-e5f7bf0748df",
    genre: "",
    name: "Harry Potter All Movies Collection (2001-2011) 720p",
    stock: 7,
    year: 2020,
  },
  {
    _id: "cbc7c383-1790-11eb-a544-e5f7bf0748df",
    genre: "",
    name: "Hellboy (2019)",
    stock: 10,
    year: 2020,
  },
  {
    _id: "cbc7c384-1790-11eb-8906-e5f7bf0748df",
    genre: "",
    name: "Hey Arnold - The Jungle Movie (2017) WEBDL LAT - ZeiZ",
    stock: 1,
    year: 2020,
  },
  {
    _id: "cbc7c385-1790-11eb-8ee1-e5f7bf0748df",
    genre: "",
    name: "How To Train Your Dragon (2010)",
    stock: 3,
    year: 2020,
  },
  {
    _id: "cbc7c386-1790-11eb-9732-e5f7bf0748df",
    genre: "",
    name: "How to Train Your Dragon 2 (2014)",
    stock: 10,
    year: 2020,
  },
  {
    _id: "cbc7c387-1790-11eb-bf68-e5f7bf0748df",
    genre: "",
    name: "How.to.Train.Your.Dragon.The.Hidden.World.2019.1080p",
    stock: 1,
    year: 2020,
  },
  {
    _id: "cbc7c388-1790-11eb-b619-e5f7bf0748df",
    genre: "",
    name:
      "Indiana Jones 1, 2, 3, 4 - Complete Collection 1981-2008 Eng Subs 1080p",
    stock: 5,
    year: 2020,
  },
  {
    _id: "cbc7c389-1790-11eb-ac25-e5f7bf0748df",
    genre: "",
    name: "Interstellar (2014) (2014)",
    stock: 2,
    year: 2020,
  },
  {
    _id: "cbc7c38a-1790-11eb-a861-e5f7bf0748df",
    genre: "",
    name: "Jobs",
    stock: 1,
    year: 2020,
  },
  {
    _id: "cbc7c38b-1790-11eb-9974-e5f7bf0748df",
    genre: "",
    name: "John.Wick.3.2019.HDRip.XviD.AC3-EVO",
    stock: 9,
    year: 2020,
  },
  {
    _id: "cbc7c38c-1790-11eb-bc02-e5f7bf0748df",
    genre: "",
    name: "Joker (2019)",
    stock: 4,
    year: 2020,
  },
  {
    _id: "cbc7c38d-1790-11eb-bd5f-e5f7bf0748df",
    genre: "",
    name: "Klaus (2019)",
    stock: 9,
    year: 2020,
  },
  {
    _id: "cbc886ca-1790-11eb-a2c9-e5f7bf0748df",
    genre: "",
    name: "Knives Out (2019)",
    stock: 8,
    year: 2020,
  },
  {
    _id: "cbc886cb-1790-11eb-b562-e5f7bf0748df",
    genre: "",
    name:
      "Life of Pi 2012 x264 720p Esub BluRay Dual Audio English Hindi Telugu Tamil GOPISAHI.mkv",
    stock: 9,
    year: 2020,
  },
  {
    _id: "cbc886cc-1790-11eb-b2a1-e5f7bf0748df",
    genre: "",
    name: "Logan Lucky (2017)",
    stock: 9,
    year: 2020,
  },
  {
    _id: "cbc886cd-1790-11eb-961a-e5f7bf0748df",
    genre: "",
    name:
      "Love Aaj Kal (2020) Hindi Original 720p NF WEBRip \u2b50800 MB\u2b50 DD-5.1 ESub x264 - Shadow (Bonsai)",
    stock: 10,
    year: 2020,
  },
  {
    _id: "cbc886ce-1790-11eb-b5ab-e5f7bf0748df",
    genre: "",
    name: "MARVEL",
    stock: 3,
    year: 2020,
  },
  {
    _id: "cbc886cf-1790-11eb-8adb-e5f7bf0748df",
    genre: "",
    name: "Moneyball.2011.REMASTERED.1080p.BluRay.H264.AAC-RARBG",
    stock: 6,
    year: 2020,
  },
  {
    _id: "cbc886d0-1790-11eb-9cdd-e5f7bf0748df",
    genre: "",
    name:
      "Monty Python The Movies 1, 2, 3, 4 - Comedy 1971-1983 Eng Subs 1080p",
    stock: 8,
    year: 2020,
  },
  {
    _id: "cbc886d1-1790-11eb-93d0-e5f7bf0748df",
    genre: "",
    name: "Murder On The Orient Express (2017) [1080p] [YTS.AG]",
    stock: 10,
    year: 2020,
  },
  {
    _id: "cbc886d2-1790-11eb-b32b-e5f7bf0748df",
    genre: "",
    name: "My Hero Academia Island Movie.mp4",
    stock: 7,
    year: 2020,
  },
  {
    _id: "cbc886d3-1790-11eb-af4f-e5f7bf0748df",
    genre: "",
    name: "Onward (2020)",
    stock: 3,
    year: 2020,
  },
  {
    _id: "cbc886d4-1790-11eb-b0a1-e5f7bf0748df",
    genre: "",
    name: "Piper.2016.1080p.BluRay.H264.AAC-RARBG",
    stock: 8,
    year: 2020,
  },
  {
    _id: "cbc886d5-1790-11eb-a72e-e5f7bf0748df",
    genre: "",
    name: "Pirates Of the Caribbean",
    stock: 3,
    year: 2020,
  },
  {
    _id: "cbc886d6-1790-11eb-91d6-e5f7bf0748df",
    genre: "",
    name: "Playing.It.Cool.2014.1080p.BluRay.H264.AAC-RARBG",
    stock: 5,
    year: 2020,
  },
  {
    _id: "cbc886d7-1790-11eb-88a4-e5f7bf0748df",
    genre: "",
    name: "Ponyo.2008.DUBBED.1080p.BluRay.H264.AAC-RARBG",
    stock: 9,
    year: 2020,
  },
  {
    _id: "cbc886d8-1790-11eb-a68d-e5f7bf0748df",
    genre: "",
    name: "Premam.2015",
    stock: 7,
    year: 2020,
  },
  {
    _id: "cbc886d9-1790-11eb-850d-e5f7bf0748df",
    genre: "",
    name: "Princess Mononoke (1997)",
    stock: 8,
    year: 2020,
  },
  {
    _id: "cbc886da-1790-11eb-9b84-e5f7bf0748df",
    genre: "",
    name:
      "Ralph.Breaks.the.Internet.2018.2160p.UHD.HDR.BluRay.(x265 10bit DD5.1)..mkv",
    stock: 2,
    year: 2020,
  },
  {
    _id: "cbc886db-1790-11eb-8f63-e5f7bf0748df",
    genre: "",
    name: "Shazam! (2019)",
    stock: 4,
    year: 2020,
  },
  {
    _id: "cbc886dc-1790-11eb-a213-e5f7bf0748df",
    genre: "",
    name: "Smallfoot (2018)",
    stock: 7,
    year: 2020,
  },
  {
    _id: "cbc886dd-1790-11eb-a02a-e5f7bf0748df",
    genre: "",
    name: "Spirited Away (2001)",
    stock: 2,
    year: 2020,
  },
  {
    _id: "cbc886de-1790-11eb-a036-e5f7bf0748df",
    genre: "",
    name: "srtfiles",
    stock: 5,
    year: 2020,
  },
  {
    _id: "cbc886df-1790-11eb-aafb-e5f7bf0748df",
    genre: "",
    name: "Steve Jobs The Man In The Machine (2015)",
    stock: 1,
    year: 2020,
  },
  {
    _id: "cbc886e0-1790-11eb-8f64-e5f7bf0748df",
    genre: "",
    name: "Tamil",
    stock: 8,
    year: 2020,
  },
  {
    _id: "cbc886e1-1790-11eb-9499-e5f7bf0748df",
    genre: "",
    name: "The Challenger Disaster (2019)",
    stock: 6,
    year: 2020,
  },
  {
    _id: "cbc886e2-1790-11eb-87d1-e5f7bf0748df",
    genre: "",
    name: "The Departed (2006)",
    stock: 2,
    year: 2020,
  },
  {
    _id: "cbc886e3-1790-11eb-9cb6-e5f7bf0748df",
    genre: "",
    name: "The Fifth Estate (2013)",
    stock: 2,
    year: 2020,
  },
  {
    _id: "cbc886e4-1790-11eb-a74d-e5f7bf0748df",
    genre: "",
    name: "The Gentlemen (2019)",
    stock: 6,
    year: 2020,
  },
  {
    _id: "cbc886e5-1790-11eb-a45e-e5f7bf0748df",
    genre: "",
    name: "The Grinch (2018)",
    stock: 3,
    year: 2020,
  },
  {
    _id: "cbc886e6-1790-11eb-9920-e5f7bf0748df",
    genre: "",
    name: "The Healer (2017)",
    stock: 3,
    year: 2020,
  },
  {
    _id: "cbc886e7-1790-11eb-bfed-e5f7bf0748df",
    genre: "",
    name: "The Irishman.2019.HDRip.XviD.AC3-EVO",
    stock: 3,
    year: 2020,
  },
  {
    _id: "cbc886e8-1790-11eb-a00f-e5f7bf0748df",
    genre: "",
    name: "The Judge (2014) 1080p BrRip x264",
    stock: 7,
    year: 2020,
  },
  {
    _id: "cbc886e9-1790-11eb-8378-e5f7bf0748df",
    genre: "",
    name: "The Legend Of Secret Pass (2019)",
    stock: 10,
    year: 2020,
  },
  {
    _id: "cbc886ea-1790-11eb-bc02-e5f7bf0748df",
    genre: "",
    name: "The Man Called Flintstone (1966)",
    stock: 1,
    year: 2020,
  },
  {
    _id: "cbc886eb-1790-11eb-816d-e5f7bf0748df",
    genre: "",
    name: "The Patriot Extended Cut",
    stock: 5,
    year: 2020,
  },
  {
    _id: "cbc886ec-1790-11eb-ab9c-e5f7bf0748df",
    genre: "",
    name: "The Pursuit of Happyness",
    stock: 7,
    year: 2020,
  },
  {
    _id: "cbc886ed-1790-11eb-ae63-e5f7bf0748df",
    genre: "",
    name: "The Secret Life of Walter Mitty (2013)",
    stock: 8,
    year: 2020,
  },
  {
    _id: "cbc886ee-1790-11eb-b24f-e5f7bf0748df",
    genre: "",
    name: "The Spectacular Now (2013)",
    stock: 2,
    year: 2020,
  },
  {
    _id: "cbc886ef-1790-11eb-9ff8-e5f7bf0748df",
    genre: "",
    name: "The.Man.from.U.N.C.L.E.2015.HDRip.XViD-ETRG",
    stock: 6,
    year: 2020,
  },
  {
    _id: "cbc886f0-1790-11eb-9232-e5f7bf0748df",
    genre: "",
    name: "The.Post.2017.1080p.BluRay.x265-RARBG",
    stock: 8,
    year: 2020,
  },
  {
    _id: "cbc886f1-1790-11eb-90b9-e5f7bf0748df",
    genre: "",
    name: "Three Flavours Cornetto Trilogy",
    stock: 8,
    year: 2020,
  },
  {
    _id: "cbc886f2-1790-11eb-a509-e5f7bf0748df",
    genre: "",
    name: "Tomorrowland (2015)",
    stock: 10,
    year: 2020,
  },
  {
    _id: "cbc886f3-1790-11eb-a7b9-e5f7bf0748df",
    genre: "",
    name: "Touching the Void (2003)",
    stock: 9,
    year: 2020,
  },
  {
    _id: "cbc886f4-1790-11eb-b7a0-e5f7bf0748df",
    genre: "",
    name: "Uncut Gems (2019)",
    stock: 1,
    year: 2020,
  },
  {
    _id: "cbc886f5-1790-11eb-8807-e5f7bf0748df",
    genre: "",
    name: "WALL E",
    stock: 4,
    year: 2020,
  },
  {
    _id: "cbc886f6-1790-11eb-97eb-e5f7bf0748df",
    genre: "",
    name: "We.Bought.a.Zoo.2011.1080p.BluRay.x265-RARBG",
    stock: 5,
    year: 2020,
  },
  {
    _id: "cbc886f7-1790-11eb-9c57-e5f7bf0748df",
    genre: "",
    name: "Zootopia.2016.1080p.BluRay.H264.AAC-RARBG",
    stock: 1,
    year: 2020,
  },
];

const getMovies = () => movieList;
export default getMovies;