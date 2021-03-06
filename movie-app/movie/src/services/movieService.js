const movieList = [
  {
    _id: "f5d2bfb4-1b4c-11eb-9853-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "kan",
    liked: false,
    name: "Fantastic Beasts The Crimes of Grindelwald (2018).mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Fantastic Beasts The Crimes of Grindelwald (2018).mkv",
    year: 2001,
  },
  {
    _id: "f5d2e6c6-1b4c-11eb-8811-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "Life of Pi 2012 x264 720p Esub BluRay Dual Audio English Hindi Telugu Tamil GOPISAHI.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Life of Pi 2012 x264 720p Esub BluRay Dual Audio English Hindi Telugu Tamil GOPISAHI.mkv",
    year: 2007,
  },
  {
    _id: "f5d2e6c7-1b4c-11eb-b6ae-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "hin",
    liked: false,
    name: "My Hero Academia Island Movie.mp4",
    path: "H:\\MEDIA\\MOVIES\\My Hero Academia Island Movie.mp4",
    year: 2013,
  },
  {
    _id: "f5d2e6c8-1b4c-11eb-b63a-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "Ralph.Breaks.the.Internet.2018.2160p.UHD.HDR.BluRay.(x265 10bit DD5.1)..mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Ralph.Breaks.the.Internet.2018.2160p.UHD.HDR.BluRay.(x265 10bit DD5.1)..mkv",
    year: 2009,
  },
  {
    _id: "f5d2e6c9-1b4c-11eb-8abb-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "kan",
    liked: false,
    name: "1917.2019.DVDSCR.x264-TOPKEK.mp4",
    path: "H:\\MEDIA\\MOVIES\\1917\\1917.2019.DVDSCR.x264-TOPKEK.mp4",
    year: 2000,
  },
  {
    _id: "f5d30dd4-1b4c-11eb-a721-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "eng",
    liked: false,
    name: "2-states.mp4",
    path: "H:\\MEDIA\\MOVIES\\2 States 2014 Hindi 1080p\\2-states.mp4",
    year: 2012,
  },
  {
    _id: "f60a2434-1b4c-11eb-861a-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "hin",
    liked: false,
    name: "6.Underground.2019.1080p.WEBRip.x264-[YTS.LT].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\6 Underground (2019)\\6.Underground.2019.1080p.WEBRip.x264-[YTS.LT].mp4",
    year: 2010,
  },
  {
    _id: "f60c471c-1b4c-11eb-a7a8-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "hin",
    liked: false,
    name: "A.Family.Man.2016.1080p.BluRay.x264-[YTS.AG].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\A Family Man (2016) [1080p] [YTS.AG]\\A.Family.Man.2016.1080p.BluRay.x264-[YTS.AG].mp4",
    year: 2019,
  },
  {
    _id: "f60c6e2c-1b4c-11eb-a2ed-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "tel",
    liked: false,
    name: "Abominable.2019.1080p.WEBRip.x264-[YTS.LT].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Abominable (2019) [WEBRip] [1080p] [YTS.LT]\\Abominable.2019.1080p.WEBRip.x264-[YTS.LT].mp4",
    year: 2004,
  },
  {
    _id: "f60c953a-1b4c-11eb-9148-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tam",
    liked: false,
    name: "Aquaman.2018.1080p.KORSUB.HDRip.x264.AAC2.0-STUTTERSHIT.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Aquaman.2018.1080p.KORSUB.HDRip.x264.AAC2.0-STUTTERSHIT\\Aquaman.2018.1080p.KORSUB.HDRip.x264.AAC2.0-STUTTERSHIT.mkv",
    year: 2009,
  },
  {
    _id: "f60ce35c-1b4c-11eb-9768-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "eng",
    liked: false,
    name: "Argo.2012.720p.BluRay.x264.YIFY.mp4",
    path: "H:\\MEDIA\\MOVIES\\Argo (2012)\\Argo.2012.720p.BluRay.x264.YIFY.mp4",
    year: 2017,
  },
  {
    _id: "f60d317e-1b4c-11eb-946d-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "jap",
    liked: false,
    name: "Banglore Days (2014) 720p.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Banglore Days (2014)\\Banglore Days (2014) 720p.mkv",
    year: 2013,
  },
  {
    _id: "f60d5890-1b4c-11eb-815a-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tam",
    liked: false,
    name: "Before.We.Go.2014.720p.BRRip.x264.AAC-ETRG.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Before.We.Go.2014.720p.BRRip.x264.AAC-ETRG\\Before.We.Go.2014.720p.BRRip.x264.AAC-ETRG.mp4",
    year: 2001,
  },
  {
    _id: "f60d7f9e-1b4c-11eb-9b71-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "hin",
    liked: false,
    name: "Bloodshot.2020.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Bloodshot (2020) [1080p] [WEBRip] [5.1] [YTS.MX]\\Bloodshot.2020.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4",
    year: 2007,
  },
  {
    _id: "f60d7f9f-1b4c-11eb-8970-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tam",
    liked: false,
    name: "Bohemian.Rhapsody.2018.1080p.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Bohemian Rhapsody [1080p]\\Bohemian.Rhapsody.2018.1080p.mp4",
    year: 2019,
  },
  {
    _id: "f60da6b0-1b4c-11eb-a176-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "eng",
    liked: false,
    name: "Bumblebee.2018.1080p.WEB-DL.H264.AC3-EVO.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Bumblebee.2018.1080p.WEB-DL.H264.AC3-EVO[TGx]\\Bumblebee.2018.1080p.WEB-DL.H264.AC3-EVO.mkv",
    year: 2003,
  },
  {
    _id: "f60df4d2-1b4c-11eb-81a5-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "tel",
    liked: false,
    name: "Christopher.Robin.2018.1080p.BluRay.x264-[YTS.AM].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Christopher Robin (2018) [BluRay] [1080p] [YTS.AM]\\Christopher.Robin.2018.1080p.BluRay.x264-[YTS.AM].mp4",
    year: 2010,
  },
  {
    _id: "f60e1be2-1b4c-11eb-87d0-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "hin",
    liked: false,
    name: "Coco.2017.1080p.BluRay.x264-[YTS.AG].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Coco (2017) [1080p] [YTS.AG]\\Coco.2017.1080p.BluRay.x264-[YTS.AG].mp4",
    year: 2014,
  },
  {
    _id: "f60e42f4-1b4c-11eb-9e73-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "tel",
    liked: false,
    name: "Contagion.2011.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Contagion (2011) [1080p] [BluRay] [5.1] [YTS.MX]\\Contagion.2011.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4",
    year: 2010,
  },
  {
    _id: "f60e42f5-1b4c-11eb-91be-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "kan",
    liked: false,
    name: "Deadpool.2.2018.1080p.BluRay.x264-[YTS.AM].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Deadpool 2 (2018) [BluRay] [1080p] [YTS.AM]\\Deadpool.2.2018.1080p.BluRay.x264-[YTS.AM].mp4",
    year: 2017,
  },
  {
    _id: "f60e6a02-1b4c-11eb-a498-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tam",
    liked: false,
    name: "Dear.Zindagi.2016.1080p.BluRay.x264-[YTS.AM].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Dear Zindagi\\Dear.Zindagi.2016.1080p.BluRay.x264-[YTS.AM].mp4",
    year: 2014,
  },
  {
    _id: "f60e6a03-1b4c-11eb-b2d0-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tel",
    liked: false,
    name: "Destination.Wedding.2018.720p.WEBRip.x264-[YTS.AM].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Destination Wedding (2018) [WEBRip] [720p] [YTS.AM]\\Destination.Wedding.2018.720p.WEBRip.x264-[YTS.AM].mp4",
    year: 2018,
  },
  {
    _id: "f611c56e-1b4c-11eb-a3f4-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "eng",
    liked: false,
    name: "1928 - Mickey Mouse -  Steamboat Willie.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1928 - Mickey Mouse -  Steamboat Willie.mp4",
    year: 2007,
  },
  {
    _id: "f611c56f-1b4c-11eb-81cd-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "eng",
    liked: false,
    name: "1929 - Mickey Mouse - Plane Crazy.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1929 - Mickey Mouse - Plane Crazy.avi",
    year: 2003,
  },
  {
    _id: "f611c570-1b4c-11eb-889e-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tel",
    liked: false,
    name: "1937 - Snow White and the Seven Dwarves.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1937 - Snow White and the Seven Dwarves.avi",
    year: 2009,
  },
  {
    _id: "f611c571-1b4c-11eb-b70d-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "jap",
    liked: false,
    name: "1940 - Fantasia.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1940 - Fantasia.avi",
    year: 2005,
  },
  {
    _id: "f611c572-1b4c-11eb-b6c6-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "kan",
    liked: false,
    name: "1940 - Pinocchio.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1940 - Pinocchio.avi",
    year: 2002,
  },
  {
    _id: "f611ec80-1b4c-11eb-8a13-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "kan",
    liked: false,
    name: "1941 - Dumbo.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1941 - Dumbo.avi",
    year: 2018,
  },
  {
    _id: "f611ec81-1b4c-11eb-8023-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "jap",
    liked: false,
    name: "1941 - The Reluctant Dragon.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1941 - The Reluctant Dragon.avi",
    year: 2013,
  },
  {
    _id: "f611ec82-1b4c-11eb-94db-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "hin",
    liked: false,
    name: "1942 - Bambi.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1942 - Bambi.avi",
    year: 2011,
  },
  {
    _id: "f611ec83-1b4c-11eb-b109-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "kan",
    liked: false,
    name: "1942 - Saludos Amigos.m4v",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1942 - Saludos Amigos.m4v",
    year: 2006,
  },
  {
    _id: "f611ec84-1b4c-11eb-8164-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "jap",
    liked: false,
    name: "1943 - Victory Through Air Power.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1943 - Victory Through Air Power.avi",
    year: 2003,
  },
  {
    _id: "f6121392-1b4c-11eb-bf97-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tel",
    liked: false,
    name: "1945 - The Three Caballeros.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1945 - The Three Caballeros.avi",
    year: 2007,
  },
  {
    _id: "f6121393-1b4c-11eb-b88b-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "eng",
    liked: false,
    name: "1946 - Make Mine Music.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1946 - Make Mine Music.avi",
    year: 2010,
  },
  {
    _id: "f6121394-1b4c-11eb-8e3b-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "jap",
    liked: false,
    name: "1946 - Song of the South.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1946 - Song of the South.avi",
    year: 2008,
  },
  {
    _id: "f6121395-1b4c-11eb-93b1-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tel",
    liked: false,
    name: "1947 - Fun and Fancy Free.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1947 - Fun and Fancy Free.avi",
    year: 2011,
  },
  {
    _id: "f6121396-1b4c-11eb-bf3d-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "jap",
    liked: false,
    name: "1948 - Melody Time.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1948 - Melody Time.avi",
    year: 2014,
  },
  {
    _id: "f6123aa2-1b4c-11eb-aca1-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tam",
    liked: false,
    name: "1948 - So Dear to My Heart.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1948 - So Dear to My Heart.mp4",
    year: 2004,
  },
  {
    _id: "f6123aa3-1b4c-11eb-acb3-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "hin",
    liked: false,
    name: "1949 - The Adventures Of Ichabod And Mr. Toad.m4v",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1928-1949\\1949 - The Adventures Of Ichabod And Mr. Toad.m4v",
    year: 2011,
  },
  {
    _id: "f6163250-1b4c-11eb-ace7-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "tam",
    liked: false,
    name: "1950 - Cinderella.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1950s\\1950 - Cinderella.avi",
    year: 2016,
  },
  {
    _id: "f6163251-1b4c-11eb-be45-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "hin",
    liked: false,
    name: "1951 - Alice in Wonderland.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1950s\\1951 - Alice in Wonderland.mp4",
    year: 2017,
  },
  {
    _id: "f6163252-1b4c-11eb-819f-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "kan",
    liked: false,
    name: "1953 - Peter Pan.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1950s\\1953 - Peter Pan.avi",
    year: 2019,
  },
  {
    _id: "f6163253-1b4c-11eb-834c-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "kan",
    liked: false,
    name: "1953 - The Living Desert.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1950s\\1953 - The Living Desert.mp4",
    year: 2020,
  },
  {
    _id: "f6163254-1b4c-11eb-96a1-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tam",
    liked: false,
    name: "1954 - 20,000 Leagues Under the Sea.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1950s\\1954 - 20,000 Leagues Under the Sea.avi",
    year: 2005,
  },
  {
    _id: "f6163255-1b4c-11eb-b8f8-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "jap",
    liked: false,
    name: "1955 - Lady and the Tramp.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1950s\\1955 - Lady and the Tramp.avi",
    year: 2020,
  },
  {
    _id: "f6163256-1b4c-11eb-b682-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "hin",
    liked: false,
    name: "1957 - Old Yeller.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1950s\\1957 - Old Yeller.avi",
    year: 2009,
  },
  {
    _id: "f6165962-1b4c-11eb-8c69-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "eng",
    liked: false,
    name: "1959 - Darby O'Gill and the Little People.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1950s\\1959 - Darby O'Gill and the Little People.avi",
    year: 2008,
  },
  {
    _id: "f6165963-1b4c-11eb-af54-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tam",
    liked: false,
    name: "1959 - Sleeping Beauty.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1950s\\1959 - Sleeping Beauty.mp4",
    year: 2009,
  },
  {
    _id: "f6180718-1b4c-11eb-8152-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "jap",
    liked: false,
    name: "1960 - Swiss Family Robinson.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1960s\\1960 - Swiss Family Robinson.avi",
    year: 2017,
  },
  {
    _id: "f6180719-1b4c-11eb-9964-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "kan",
    liked: false,
    name: "1961 - 101 Dalmatians.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1960s\\1961 - 101 Dalmatians.avi",
    year: 2020,
  },
  {
    _id: "f618071a-1b4c-11eb-b3d8-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "jap",
    liked: false,
    name: "1963 - The Sword in the Stone.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1960s\\1963 - The Sword in the Stone.avi",
    year: 2011,
  },
  {
    _id: "f618071b-1b4c-11eb-806c-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "jap",
    liked: false,
    name: "1964 - Mary Poppins.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1960s\\1964 - Mary Poppins.avi",
    year: 2007,
  },
  {
    _id: "f6182e26-1b4c-11eb-9ba5-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "hin",
    liked: false,
    name: "1965 - That Darn Cat.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1960s\\1965 - That Darn Cat.avi",
    year: 2001,
  },
  {
    _id: "f6182e27-1b4c-11eb-b2af-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "jap",
    liked: false,
    name: "1967 - The Jungle Book.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1960s\\1967 - The Jungle Book.avi",
    year: 2009,
  },
  {
    _id: "f6182e28-1b4c-11eb-94e8-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "kan",
    liked: false,
    name: "1968 - The Love Bug.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1960s\\1968 - The Love Bug.avi",
    year: 2011,
  },
  {
    _id: "f61a02ee-1b4c-11eb-ad38-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tel",
    liked: false,
    name: "1970 - The Aristocats.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1970s\\1970 - The Aristocats.avi",
    year: 2004,
  },
  {
    _id: "f61a02ef-1b4c-11eb-90a0-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "hin",
    liked: false,
    name: "1971 - Bedknobs and Broomsticks.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1970s\\1971 - Bedknobs and Broomsticks.avi",
    year: 2009,
  },
  {
    _id: "f61a02f0-1b4c-11eb-a4ba-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "eng",
    liked: false,
    name: "1971 - The Million Dollar Duck.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1970s\\1971 - The Million Dollar Duck.avi",
    year: 2006,
  },
  {
    _id: "f61a2a00-1b4c-11eb-ad25-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tel",
    liked: false,
    name: "1973 - Robin Hood.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1970s\\1973 - Robin Hood.avi",
    year: 2011,
  },
  {
    _id: "f61a2a01-1b4c-11eb-bc42-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "jap",
    liked: false,
    name: "1974 - Herbie Rides Again.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1970s\\1974 - Herbie Rides Again.avi",
    year: 2016,
  },
  {
    _id: "f61a2a02-1b4c-11eb-9ea0-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "hin",
    liked: false,
    name: "1977 - Pete's Dragon.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1970s\\1977 - Pete's Dragon.avi",
    year: 2007,
  },
  {
    _id: "f61a5110-1b4c-11eb-bdde-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "tam",
    liked: false,
    name: "1977 - The Many Adventures of Winnie the Pooh.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1970s\\1977 - The Many Adventures of Winnie the Pooh.avi",
    year: 2013,
  },
  {
    _id: "f61a5111-1b4c-11eb-9e82-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "kan",
    liked: false,
    name: "1977 - The Rescuers.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1970s\\1977 - The Rescuers.avi",
    year: 2017,
  },
  {
    _id: "f61cc21a-1b4c-11eb-aeda-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tel",
    liked: false,
    name: "1981 - The Fox and the Hound.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1980s\\1981 - The Fox and the Hound.avi",
    year: 2009,
  },
  {
    _id: "f61cc21b-1b4c-11eb-8ec6-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "kan",
    liked: false,
    name: "1982 - A Disney Christmas Gift.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1980s\\1982 - A Disney Christmas Gift.avi",
    year: 2015,
  },
  {
    _id: "f61cc21c-1b4c-11eb-be73-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "tel",
    liked: false,
    name: "1985 - The Black Cauldron.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1980s\\1985 - The Black Cauldron.avi",
    year: 2012,
  },
  {
    _id: "f61cc21d-1b4c-11eb-8fd5-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tam",
    liked: false,
    name: "1986 - The Great Mouse Detective.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1980s\\1986 - The Great Mouse Detective.avi",
    year: 2001,
  },
  {
    _id: "f61ce928-1b4c-11eb-8af8-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "jap",
    liked: false,
    name: "1987 - The Brave Little Toaster.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1980s\\1987 - The Brave Little Toaster.mp4",
    year: 2008,
  },
  {
    _id: "f61ce929-1b4c-11eb-9ba8-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "tel",
    liked: false,
    name: "1988 - Oliver & Company.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1980s\\1988 - Oliver & Company.avi",
    year: 2003,
  },
  {
    _id: "f61ce92a-1b4c-11eb-965f-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "eng",
    liked: false,
    name: "1988 - Who Framed Roger Rabbit.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1980s\\1988 - Who Framed Roger Rabbit.avi",
    year: 2016,
  },
  {
    _id: "f61ce92b-1b4c-11eb-94c8-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tam",
    liked: false,
    name: "1989 - The Little Mermaid.m4v",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1980s\\1989 - The Little Mermaid.m4v",
    year: 2005,
  },
  {
    _id: "f6204498-1b4c-11eb-85bc-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "hin",
    liked: false,
    name: "1990 - Ducktales The Movie - Treasure of the Lost Lamp.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1990 - Ducktales The Movie - Treasure of the Lost Lamp.avi",
    year: 2013,
  },
  {
    _id: "f6206ba6-1b4c-11eb-a228-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "eng",
    liked: false,
    name: "1990 - The Rescuers Down Under.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1990 - The Rescuers Down Under.avi",
    year: 2019,
  },
  {
    _id: "f62092b6-1b4c-11eb-9682-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "kan",
    liked: false,
    name: "1991 - Beauty and the Beast.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1991 - Beauty and the Beast.avi",
    year: 2009,
  },
  {
    _id: "f62092b7-1b4c-11eb-bc50-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "eng",
    liked: false,
    name: "1992 - Aladdin.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1992 - Aladdin.avi",
    year: 2020,
  },
  {
    _id: "f62092b8-1b4c-11eb-909d-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "eng",
    liked: false,
    name: "1993 - The Nightmare Before Christmas.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1993 - The Nightmare Before Christmas.avi",
    year: 2008,
  },
  {
    _id: "f620b9c8-1b4c-11eb-91b0-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tel",
    liked: false,
    name: "1994 - Aladdin - The Return of Jafar.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1994 - Aladdin - The Return of Jafar.avi",
    year: 2008,
  },
  {
    _id: "f620b9c9-1b4c-11eb-aee4-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "eng",
    liked: false,
    name: "1994 - The Lion King.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1994 - The Lion King.avi",
    year: 2003,
  },
  {
    _id: "f620e0d8-1b4c-11eb-907b-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "jap",
    liked: false,
    name: "1995 - A Goofy Movie.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1995 - A Goofy Movie.avi",
    year: 2011,
  },
  {
    _id: "f620e0d9-1b4c-11eb-a653-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "eng",
    liked: false,
    name: "1995 - Pocahontas.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1995 - Pocahontas.avi",
    year: 2016,
  },
  {
    _id: "f620e0da-1b4c-11eb-9246-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "tel",
    liked: false,
    name: "1996 - Aladdin and the King of Thieves.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1996 - Aladdin and the King of Thieves.avi",
    year: 2015,
  },
  {
    _id: "f620e0db-1b4c-11eb-87e1-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "kan",
    liked: false,
    name: "1996 - James and the Giant Peach.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1996 - James and the Giant Peach.avi",
    year: 2015,
  },
  {
    _id: "f62107e8-1b4c-11eb-aaec-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tel",
    liked: false,
    name: "1996 - The Hunchback of Notre Dame.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1996 - The Hunchback of Notre Dame.avi",
    year: 2013,
  },
  {
    _id: "f62107e9-1b4c-11eb-85e3-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "hin",
    liked: false,
    name: "1997 - Anastasia.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1997 - Anastasia.mp4",
    year: 2014,
  },
  {
    _id: "f62107ea-1b4c-11eb-ab82-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "jap",
    liked: false,
    name: "1997 - Beauty and the Beast - The Enchanted Christmas.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1997 - Beauty and the Beast - The Enchanted Christmas.avi",
    year: 2003,
  },
  {
    _id: "f62107eb-1b4c-11eb-8638-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tam",
    liked: false,
    name: "1997 - Hercules.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1997 - Hercules.avi",
    year: 2012,
  },
  {
    _id: "f6212ef8-1b4c-11eb-84de-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tam",
    liked: false,
    name: "1997 - Winnie The Pooh's Most Grand Adventure.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1997 - Winnie The Pooh's Most Grand Adventure.avi",
    year: 2004,
  },
  {
    _id: "f6212ef9-1b4c-11eb-8d8b-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "tel",
    liked: false,
    name: "1998 - Belle's Magical World.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1998 - Belle's Magical World.avi",
    year: 2010,
  },
  {
    _id: "f6212efa-1b4c-11eb-a423-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "hin",
    liked: false,
    name: "1998 - Mulan.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1998 - Mulan.avi",
    year: 2009,
  },
  {
    _id: "f621560a-1b4c-11eb-b060-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "eng",
    liked: false,
    name: "1998 - Pocahontas II - Journey to a New World.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1998 - Pocahontas II - Journey to a New World.avi",
    year: 2004,
  },
  {
    _id: "f621560b-1b4c-11eb-a08f-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "hin",
    liked: false,
    name: "1998 - The Lion King 2 - Simba's Pride.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1998 - The Lion King 2 - Simba's Pride.avi",
    year: 2016,
  },
  {
    _id: "f621560c-1b4c-11eb-853a-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "tel",
    liked: false,
    name: "1999 - Doug's 1st Movie.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1999 - Doug's 1st Movie.mp4",
    year: 2013,
  },
  {
    _id: "f6217d1a-1b4c-11eb-8c94-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "eng",
    liked: false,
    name: "1999 - Fantasia 2000.AVI",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1999 - Fantasia 2000.AVI",
    year: 2016,
  },
  {
    _id: "f6217d1b-1b4c-11eb-bb1d-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tam",
    liked: false,
    name: "1999 - Mickey's Once Upon A Christmas.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1999 - Mickey's Once Upon A Christmas.avi",
    year: 2018,
  },
  {
    _id: "f6217d1c-1b4c-11eb-aba2-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "hin",
    liked: false,
    name: "1999 - Tarzan.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1999 - Tarzan.avi",
    year: 2019,
  },
  {
    _id: "f6217d1d-1b4c-11eb-a20c-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "jap",
    liked: false,
    name: "1999 - Winnie The Pooh - Seasons of Giving.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 1990s\\1999 - Winnie The Pooh - Seasons of Giving.avi",
    year: 2002,
  },
  {
    _id: "f6291e58-1b4c-11eb-8581-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "kan",
    liked: false,
    name: "2000 - An Extremely Goofy Movie.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2000 - An Extremely Goofy Movie.avi",
    year: 2000,
  },
  {
    _id: "f6291e59-1b4c-11eb-be1a-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "jap",
    liked: false,
    name: "2000 - Buzz Lightyear Of Star Command, The Adventure Begins.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2000 - Buzz Lightyear Of Star Command, The Adventure Begins.avi",
    year: 2003,
  },
  {
    _id: "f6294568-1b4c-11eb-b178-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tel",
    liked: false,
    name: "2000 - Dinosaur.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2000 - Dinosaur.avi",
    year: 2006,
  },
  {
    _id: "f6294569-1b4c-11eb-908d-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "jap",
    liked: false,
    name: "2000 - The Emperor's New Groove.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2000 - The Emperor's New Groove.avi",
    year: 2016,
  },
  {
    _id: "f6296c78-1b4c-11eb-95bf-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "eng",
    liked: false,
    name: "2000 - The Little Mermaid 2-Return to the Sea.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2000 - The Little Mermaid 2-Return to the Sea.avi",
    year: 2018,
  },
  {
    _id: "f6296c79-1b4c-11eb-b965-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "tam",
    liked: false,
    name: "2000 - The Tigger Movie.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2000 - The Tigger Movie.avi",
    year: 2008,
  },
  {
    _id: "f6296c7a-1b4c-11eb-a519-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "jap",
    liked: false,
    name: "2001 - Atlantis The Lost Empire.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2001 - Atlantis The Lost Empire.avi",
    year: 2019,
  },
  {
    _id: "f629938a-1b4c-11eb-8ada-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "eng",
    liked: false,
    name: "2001 - Lady And The Tramp II - Scamp's Adventure.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2001 - Lady And The Tramp II - Scamp's Adventure.avi",
    year: 2017,
  },
  {
    _id: "f629938b-1b4c-11eb-a9ea-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tam",
    liked: false,
    name:
      "2001 - Mickey's Magical Christmas-Snowed In at the House of Mouse.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2001 - Mickey's Magical Christmas-Snowed In at the House of Mouse.avi",
    year: 2013,
  },
  {
    _id: "f629ba9a-1b4c-11eb-939d-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "jap",
    liked: false,
    name: "2001 - Recess Schools Out.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2001 - Recess Schools Out.mp4",
    year: 2014,
  },
  {
    _id: "f629ba9b-1b4c-11eb-ab2f-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "hin",
    liked: false,
    name: "2001 - Spirited Away.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2001 - Spirited Away.mkv",
    year: 2005,
  },
  {
    _id: "f629e1a8-1b4c-11eb-8430-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name: "2002 - Cinderella II - Dreams Come True.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2002 - Cinderella II - Dreams Come True.avi",
    year: 2007,
  },
  {
    _id: "f629e1a9-1b4c-11eb-a803-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "jap",
    liked: false,
    name:
      "2002 - Kim Possible - The Secret Files - Attack Of The Killer Bebes, Downhill, & Partners.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2002 - Kim Possible - The Secret Files - Attack Of The Killer Bebes, Downhill, & Partners.avi",
    year: 2015,
  },
  {
    _id: "f629e1aa-1b4c-11eb-b0b1-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "jap",
    liked: false,
    name: "2002 - Lilo And Stitch.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2002 - Lilo And Stitch.avi",
    year: 2006,
  },
  {
    _id: "f62a08ba-1b4c-11eb-82f4-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "tam",
    liked: false,
    name: "2002 - Mickey's House of Mouse - The Villains.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2002 - Mickey's House of Mouse - The Villains.avi",
    year: 2003,
  },
  {
    _id: "f62a08bb-1b4c-11eb-a85d-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "kan",
    liked: false,
    name: "2002 - Peter Pan II - Return to Neverland.m4v",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2002 - Peter Pan II - Return to Neverland.m4v",
    year: 2015,
  },
  {
    _id: "f62a08bc-1b4c-11eb-acd2-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tel",
    liked: false,
    name: "2002 - Tarzan & Jane.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2002 - Tarzan & Jane.avi",
    year: 2012,
  },
  {
    _id: "f62a08bd-1b4c-11eb-8c32-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "hin",
    liked: false,
    name: "2002 - The Hunchback of Notre Dame II.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2002 - The Hunchback of Notre Dame II.avi",
    year: 2016,
  },
  {
    _id: "f62a2fca-1b4c-11eb-ac1c-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "eng",
    liked: false,
    name: "2002 - Treasure Planet.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2002 - Treasure Planet.avi",
    year: 2020,
  },
  {
    _id: "f62a2fcb-1b4c-11eb-9424-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "kan",
    liked: false,
    name: "2002 - Winnie the Pooh-A Very Merry Pooh Year.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2002 - Winnie the Pooh-A Very Merry Pooh Year.avi",
    year: 2001,
  },
  {
    _id: "f62a56dc-1b4c-11eb-9939-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "eng",
    liked: false,
    name: "2003 - 101 Dalmatians 2 - Patch's London Adventure.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2003 - 101 Dalmatians 2 - Patch's London Adventure.avi",
    year: 2014,
  },
  {
    _id: "f62a56dd-1b4c-11eb-b142-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "kan",
    liked: false,
    name: "2003 - Atlantis 2 Milo's Return.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2003 - Atlantis 2 Milo's Return.avi",
    year: 2020,
  },
  {
    _id: "f62a56de-1b4c-11eb-af93-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "jap",
    liked: false,
    name: "2003 - Brother Bear.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2003 - Brother Bear.avi",
    year: 2017,
  },
  {
    _id: "f62a7dec-1b4c-11eb-8d85-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "tel",
    liked: false,
    name: "2003 - Kim Possible - A Stitch In Time.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2003 - Kim Possible - A Stitch In Time.avi",
    year: 2004,
  },
  {
    _id: "f62a7ded-1b4c-11eb-a1c8-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tam",
    liked: false,
    name: "2003 - Piglet's Big Movie.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2003 - Piglet's Big Movie.avi",
    year: 2018,
  },
  {
    _id: "f62acc0c-1b4c-11eb-a41d-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "hin",
    liked: false,
    name: "2003 - Stitch! The Movie.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2003 - Stitch! The Movie.avi",
    year: 2013,
  },
  {
    _id: "f62acc0d-1b4c-11eb-83ac-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tel",
    liked: false,
    name: "2003 - The Jungle Book 2.m4v",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2003 - The Jungle Book 2.m4v",
    year: 2013,
  },
  {
    _id: "f62af31e-1b4c-11eb-b47c-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tel",
    liked: false,
    name: "2004 - Home On The Range.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2004 - Home On The Range.avi",
    year: 2019,
  },
  {
    _id: "f62af31f-1b4c-11eb-98ee-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "tam",
    liked: false,
    name: "2004 - Howl's Moving Castle.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2004 - Howl's Moving Castle.mkv",
    year: 2014,
  },
  {
    _id: "f62af320-1b4c-11eb-a0dd-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tam",
    liked: false,
    name: "2004 - Kim Possible - The Villain Files.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2004 - Kim Possible - The Villain Files.avi",
    year: 2009,
  },
  {
    _id: "f62b1a2e-1b4c-11eb-a2c7-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "kan",
    liked: false,
    name: "2004 - Mickey Donald Goofy - The Three Musketeers.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2004 - Mickey Donald Goofy - The Three Musketeers.avi",
    year: 2003,
  },
  {
    _id: "f62b1a2f-1b4c-11eb-8d0b-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "hin",
    liked: false,
    name: "2004 - Mickeys Twice Upon a Christmas.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2004 - Mickeys Twice Upon a Christmas.avi",
    year: 2013,
  },
  {
    _id: "f62b1a30-1b4c-11eb-8d1b-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "tam",
    liked: false,
    name: "2004 - Mulan II.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2004 - Mulan II.avi",
    year: 2009,
  },
  {
    _id: "f62b4140-1b4c-11eb-aa8f-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "tam",
    liked: false,
    name: "2004 - Teachers Pet.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2004 - Teachers Pet.mp4",
    year: 2001,
  },
  {
    _id: "f62b4141-1b4c-11eb-97bf-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name: "2004 - The Lion King 1-1.5 - Hakuna Matata.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2004 - The Lion King 1-1.5 - Hakuna Matata.avi",
    year: 2008,
  },
  {
    _id: "f62b6850-1b4c-11eb-adb1-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "kan",
    liked: false,
    name: "2004 - Winnie the Pooh - Springtime With Roo.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2004 - Winnie the Pooh - Springtime With Roo.avi",
    year: 2010,
  },
  {
    _id: "f62b6851-1b4c-11eb-bc86-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "jap",
    liked: false,
    name: "2005 - Chicken Little.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2005 - Chicken Little.avi",
    year: 2006,
  },
  {
    _id: "f62b6852-1b4c-11eb-ab8d-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "eng",
    liked: false,
    name: "2005 - Disney's Christmas Favourites.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2005 - Disney's Christmas Favourites.avi",
    year: 2009,
  },
  {
    _id: "f62b8f62-1b4c-11eb-ac7e-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "hin",
    liked: false,
    name: "2005 - Kim Possible - So The Drama.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2005 - Kim Possible - So The Drama.avi",
    year: 2002,
  },
  {
    _id: "f62b8f63-1b4c-11eb-ab6c-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "hin",
    liked: false,
    name: "2005 - Kronk's New Groove.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2005 - Kronk's New Groove.avi",
    year: 2017,
  },
  {
    _id: "f62b8f64-1b4c-11eb-9bad-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "hin",
    liked: false,
    name: "2005 - Lilo and Stitch 2 - Stitch has a Glitch.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2005 - Lilo and Stitch 2 - Stitch has a Glitch.avi",
    year: 2002,
  },
  {
    _id: "f62b8f65-1b4c-11eb-b4c4-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "hin",
    liked: false,
    name: "2005 - Pooh's Heffalump Movie.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2005 - Pooh's Heffalump Movie.avi",
    year: 2015,
  },
  {
    _id: "f62bb670-1b4c-11eb-a5d3-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tel",
    liked: false,
    name: "2005 - Tarzan II.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2005 - Tarzan II.avi",
    year: 2005,
  },
  {
    _id: "f62bb671-1b4c-11eb-8fb6-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tel",
    liked: false,
    name: "2005 - Valiant.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2005 - Valiant.mp4",
    year: 2018,
  },
  {
    _id: "f62bb672-1b4c-11eb-a9f2-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "tel",
    liked: false,
    name: "2006 - Bambi II.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2006 - Bambi II.avi",
    year: 2018,
  },
  {
    _id: "f62bdd80-1b4c-11eb-943f-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "tam",
    liked: false,
    name: "2006 - Brother Bear 2.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2006 - Brother Bear 2.avi",
    year: 2014,
  },
  {
    _id: "f62bdd81-1b4c-11eb-b893-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tam",
    liked: false,
    name: "2006 - Leroy & Stitch.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2006 - Leroy & Stitch.avi",
    year: 2009,
  },
  {
    _id: "f62bdd82-1b4c-11eb-b6dd-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "jap",
    liked: false,
    name: "2006 - The Fox and the Hound 2.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2006 - The Fox and the Hound 2.avi",
    year: 2020,
  },
  {
    _id: "f62c0492-1b4c-11eb-9f58-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "kan",
    liked: false,
    name: "2006 - The Wild.m4v",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2006 - The Wild.m4v",
    year: 2014,
  },
  {
    _id: "f62c0493-1b4c-11eb-bfde-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tam",
    liked: false,
    name: "2007 - Cinderella III - A Twist in Time.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2007 - Cinderella III - A Twist in Time.avi",
    year: 2006,
  },
  {
    _id: "f62c2ba2-1b4c-11eb-a6b3-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "eng",
    liked: false,
    name: "2007 - Disney Princess Enchanted Tales - Follow Your Dreams.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2007 - Disney Princess Enchanted Tales - Follow Your Dreams.avi",
    year: 2007,
  },
  {
    _id: "f62c2ba3-1b4c-11eb-b117-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tam",
    liked: false,
    name: "2007 - Enchanted.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2007 - Enchanted.avi",
    year: 2013,
  },
  {
    _id: "f62c2ba4-1b4c-11eb-a61a-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "tel",
    liked: false,
    name: "2007 - Meet The Robinsons.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2007 - Meet The Robinsons.avi",
    year: 2011,
  },
  {
    _id: "f62c52b4-1b4c-11eb-9016-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "eng",
    liked: false,
    name: "2007 - My Friends Tigger and Pooh Super Sleuth Christmas Movie.AVI",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2007 - My Friends Tigger and Pooh Super Sleuth Christmas Movie.AVI",
    year: 2000,
  },
  {
    _id: "f62c52b5-1b4c-11eb-b1f9-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "tel",
    liked: false,
    name: "2008 - Bolt.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2008 - Bolt.avi",
    year: 2020,
  },
  {
    _id: "f62c52b6-1b4c-11eb-bcfd-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "tel",
    liked: false,
    name: "2008 - Ponyo.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2008 - Ponyo.mkv",
    year: 2011,
  },
  {
    _id: "f62c52b7-1b4c-11eb-9cd1-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "jap",
    liked: false,
    name: "2008 - The Little Mermaid - Ariel's Beginning.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2008 - The Little Mermaid - Ariel's Beginning.avi",
    year: 2019,
  },
  {
    _id: "f62c79c6-1b4c-11eb-aec2-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "eng",
    liked: false,
    name: "2008 - Tinker Bell.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2008 - Tinker Bell.avi",
    year: 2007,
  },
  {
    _id: "f62c79c7-1b4c-11eb-8dc8-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name: "2009 - A Christmas Carol.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2009 - A Christmas Carol.mp4",
    year: 2002,
  },
  {
    _id: "f62c79c8-1b4c-11eb-bb03-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "kan",
    liked: false,
    name: "2009 - The Princess and the Frog.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2009 - The Princess and the Frog.mp4",
    year: 2011,
  },
  {
    _id: "f62ca0d4-1b4c-11eb-a7c5-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "hin",
    liked: false,
    name: "2009 - Tinker Bell and The Lost Treasure.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2000s\\2009 - Tinker Bell and The Lost Treasure.mp4",
    year: 2001,
  },
  {
    _id: "f6349034-1b4c-11eb-a29f-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tam",
    liked: false,
    name: "2010 - Tangled.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2010 - Tangled.avi",
    year: 2016,
  },
  {
    _id: "f634b742-1b4c-11eb-90d4-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "hin",
    liked: false,
    name: "2010 - Tinker Bell and The Great Fairy Rescue.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2010 - Tinker Bell and The Great Fairy Rescue.mp4",
    year: 2009,
  },
  {
    _id: "f634b743-1b4c-11eb-9653-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "hin",
    liked: false,
    name: "2011 - Gnomeo and Juliet.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2011 - Gnomeo and Juliet.mkv",
    year: 2000,
  },
  {
    _id: "f634b744-1b4c-11eb-9061-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tam",
    liked: false,
    name: "2011 - Mars Needs Moms.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2011 - Mars Needs Moms.mp4",
    year: 2007,
  },
  {
    _id: "f634de52-1b4c-11eb-ba3c-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "kan",
    liked: false,
    name: "2011 - Phineas and Ferb - The Movie Across The 2nd Dimension.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2011 - Phineas and Ferb - The Movie Across The 2nd Dimension.mp4",
    year: 2001,
  },
  {
    _id: "f634de53-1b4c-11eb-869a-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "hin",
    liked: false,
    name: "2011 - Recess Schools Out.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2011 - Recess Schools Out.mp4",
    year: 2005,
  },
  {
    _id: "f634de54-1b4c-11eb-919f-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tam",
    liked: false,
    name: "2011 - Winnie the Pooh.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2011 - Winnie the Pooh.mp4",
    year: 2010,
  },
  {
    _id: "f6350564-1b4c-11eb-b3f0-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "eng",
    liked: false,
    name: "2012 - Frankenweenie.m4v",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2012 - Frankenweenie.m4v",
    year: 2000,
  },
  {
    _id: "f6350565-1b4c-11eb-87ff-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "jap",
    liked: false,
    name: "2012 - Sofia The First Once Upon a Princess.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2012 - Sofia The First Once Upon a Princess.avi",
    year: 2005,
  },
  {
    _id: "f6350566-1b4c-11eb-83e5-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name: "2012 - Tangled Ever After.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2012 - Tangled Ever After.mp4",
    year: 2019,
  },
  {
    _id: "f6352c74-1b4c-11eb-bc36-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "hin",
    liked: false,
    name: "2012 - The Secret World Of Arrietty.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2012 - The Secret World Of Arrietty.mp4",
    year: 2014,
  },
  {
    _id: "f6352c75-1b4c-11eb-9889-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "kan",
    liked: false,
    name: "2012 - Tinker Bell Secret of the Wings.m4v",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2012 - Tinker Bell Secret of the Wings.m4v",
    year: 2012,
  },
  {
    _id: "f6352c76-1b4c-11eb-89c6-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "hin",
    liked: false,
    name: "2012 - Wreck-It Ralph.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2012 - Wreck-It Ralph.mp4",
    year: 2017,
  },
  {
    _id: "f6352c77-1b4c-11eb-9271-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "jap",
    liked: false,
    name: "2013 - Frozen.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2013 - Frozen.mp4",
    year: 2010,
  },
  {
    _id: "f6355386-1b4c-11eb-a3ed-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "hin",
    liked: false,
    name: "2013 - Planes.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2013 - Planes.mp4",
    year: 2001,
  },
  {
    _id: "f6355387-1b4c-11eb-bce2-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "tel",
    liked: false,
    name: "2013 - The Lone Ranger.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2013 - The Lone Ranger.mp4",
    year: 2006,
  },
  {
    _id: "f6355388-1b4c-11eb-91bf-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "eng",
    liked: false,
    name: "2014 - Big Hero 6.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2014 - Big Hero 6.mp4",
    year: 2004,
  },
  {
    _id: "f6357a94-1b4c-11eb-8983-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "eng",
    liked: false,
    name: "2014 - Planes - Fire and Rescue.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2014 - Planes - Fire and Rescue.mp4",
    year: 2012,
  },
  {
    _id: "f6357a95-1b4c-11eb-b2d9-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tel",
    liked: false,
    name: "2014 - The Pirate Fairy.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2014 - The Pirate Fairy.mp4",
    year: 2002,
  },
  {
    _id: "f6357a96-1b4c-11eb-bdf7-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "hin",
    liked: false,
    name: "2014 - Tinker Bell and the Legend of the NeverBeast.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2014 - Tinker Bell and the Legend of the NeverBeast.mp4",
    year: 2002,
  },
  {
    _id: "f635a1a6-1b4c-11eb-9b91-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "kan",
    liked: false,
    name: "2015 - Strange Magic.avi",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2015 - Strange Magic.avi",
    year: 2002,
  },
  {
    _id: "f635a1a7-1b4c-11eb-b826-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "tam",
    liked: false,
    name: "2016 - Moana.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2016 - Moana.mp4",
    year: 2006,
  },
  {
    _id: "f635a1a8-1b4c-11eb-88e9-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tel",
    liked: false,
    name: "2016 - Zootopia.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2016 - Zootopia.mp4",
    year: 2012,
  },
  {
    _id: "f635a1a9-1b4c-11eb-81ec-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tel",
    liked: false,
    name: "2017 - Tangled Before Ever After.m4v",
    path:
      "H:\\MEDIA\\MOVIES\\Disney Movie Collection (160)\\Disney 2010s\\2017 - Tangled Before Ever After.m4v",
    year: 2019,
  },
  {
    _id: "f635c8b6-1b4c-11eb-ac28-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tam",
    liked: false,
    name: "Hercules.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney's Hercules 1997 1080p BDRip H264 AAC - KiNGDOM\\Hercules.mp4",
    year: 2017,
  },
  {
    _id: "f63a0e86-1b4c-11eb-a442-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "kan",
    liked: false,
    name: "Hercules Sample.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Disney's Hercules 1997 1080p BDRip H264 AAC - KiNGDOM\\Sample\\Hercules Sample.mp4",
    year: 2001,
  },
  {
    _id: "f63a3598-1b4c-11eb-97a0-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "hin",
    liked: false,
    name: "Dolittle.2020.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Dolittle (2020) [1080p] [WEBRip] [5.1] [YTS.MX]\\Dolittle.2020.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4",
    year: 2019,
  },
  {
    _id: "f63a5ca8-1b4c-11eb-aaf4-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "DuckTales.The.Movie.Treasure.Of.The.Lost.Lamp.1990.1080p.WEBRip.x264.AAC-[YTS.LT].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\DuckTales The Movie Treasure Of The Lost Lamp (1990) [1080p] [WEBRip] [YTS.LT]\\DuckTales.The.Movie.Treasure.Of.The.Lost.Lamp.1990.1080p.WEBRip.x264.AAC-[YTS.LT].mp4",
    year: 2014,
  },
  {
    _id: "f63a83b8-1b4c-11eb-a13d-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "eng",
    liked: false,
    name: "Epic.2013.1080p.BluRay.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Epic (2013) [1080p]\\Epic.2013.1080p.BluRay.x264.YIFY.mp4",
    year: 2000,
  },
  {
    _id: "f63aaaca-1b4c-11eb-9588-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "eng",
    liked: false,
    name: "Escape.Plan.The.Extractors.2019.1080p.BluRay.H264.AAC-RARBG.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Escape.Plan.The.Extractors.2019.1080p.BluRay.H264.AAC-RARBG\\Escape.Plan.The.Extractors.2019.1080p.BluRay.H264.AAC-RARBG.mp4",
    year: 2020,
  },
  {
    _id: "f63c5880-1b4c-11eb-a913-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "kan",
    liked: false,
    name: "Fidaa (2017) Telugu HDRip - 720p - x264 - 1.4GB - MLSBD.COM.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Fidaa\\Fidaa (2017) Telugu HDRip - 720p - x264 - 1.4GB - MLSBD.COM.mkv",
    year: 2001,
  },
  {
    _id: "f63c7f90-1b4c-11eb-9ae9-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "jap",
    liked: false,
    name: "Frozen.2013.1080p.BluRay.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Frozen (2013) [1080p]\\Frozen.2013.1080p.BluRay.x264.YIFY.mp4",
    year: 2010,
  },
  {
    _id: "f63ca69e-1b4c-11eb-a84e-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "tel",
    liked: false,
    name: "Frozen.2.2019.720p.HDCAM.900MB.getb8.x264-BONSAI.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Frozen.2.2019.720p.HDCAM.900MB.getb8.x264-BONSAI[TGx]\\Frozen.2.2019.720p.HDCAM.900MB.getb8.x264-BONSAI.mkv",
    year: 2019,
  },
  {
    _id: "f63ccdb0-1b4c-11eb-abc0-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "jap",
    liked: false,
    name: "Game.Night.2018.720p.BluRay.x264-[YTS.AM].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Game Night (2018) [BluRay] [720p] [YTS.AM]\\Game.Night.2018.720p.BluRay.x264-[YTS.AM].mp4",
    year: 2002,
  },
  {
    _id: "f63cf4c0-1b4c-11eb-9094-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "hin",
    liked: false,
    name: "Get.Smart.2008.1080p.BRrip.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Get Smart (2008) [1080p]\\Get.Smart.2008.1080p.BRrip.x264.YIFY.mp4",
    year: 2012,
  },
  {
    _id: "f63f17a8-1b4c-11eb-9162-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "1.Harry Potter and the Sorcerer's Stone (2001) Ult Ext Ed 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Harry Potter All Movies Collection (2001-2011) 720p\\1.Harry Potter and the Sorcerer's Stone (2001) Ult Ext Ed 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    year: 2007,
  },
  {
    _id: "f63f17a9-1b4c-11eb-bd9b-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "hin",
    liked: false,
    name:
      "2.Harry Potter and the Chamber of Secrets (2002) Ult Ext Ed 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Harry Potter All Movies Collection (2001-2011) 720p\\2.Harry Potter and the Chamber of Secrets (2002) Ult Ext Ed 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    year: 2003,
  },
  {
    _id: "f63f3eba-1b4c-11eb-9d76-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "kan",
    liked: false,
    name:
      "3.Harry Potter and the Prisoner of Azkaban (2004) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Harry Potter All Movies Collection (2001-2011) 720p\\3.Harry Potter and the Prisoner of Azkaban (2004) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    year: 2009,
  },
  {
    _id: "f63f3ebb-1b4c-11eb-8ee6-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "kan",
    liked: false,
    name:
      "4.Harry Potter and the Goblet of Fire (2005) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Harry Potter All Movies Collection (2001-2011) 720p\\4.Harry Potter and the Goblet of Fire (2005) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    year: 2009,
  },
  {
    _id: "f63f65ca-1b4c-11eb-9390-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "kan",
    liked: false,
    name:
      "5.Harry Potter and the Order of the Phoenix (2007) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Harry Potter All Movies Collection (2001-2011) 720p\\5.Harry Potter and the Order of the Phoenix (2007) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    year: 2019,
  },
  {
    _id: "f63f65cb-1b4c-11eb-9542-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "kan",
    liked: false,
    name:
      "6.Harry Potter and the Half-Blood Prince (2009) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Harry Potter All Movies Collection (2001-2011) 720p\\6.Harry Potter and the Half-Blood Prince (2009) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    year: 2005,
  },
  {
    _id: "f63f65cc-1b4c-11eb-85b4-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "hin",
    liked: false,
    name:
      "7.Harry Potter and the Deathly Hallows- Part 1 (2010) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Harry Potter All Movies Collection (2001-2011) 720p\\7.Harry Potter and the Deathly Hallows- Part 1 (2010) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    year: 2018,
  },
  {
    _id: "f63f8cdc-1b4c-11eb-9b8c-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "hin",
    liked: false,
    name:
      "8.Harry Potter and the Deathly Hallows- Part 2 (2011) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Harry Potter All Movies Collection (2001-2011) 720p\\8.Harry Potter and the Deathly Hallows- Part 2 (2011) 720p Dual Audio BluRay - KartiKing - DMMovies.mkv",
    year: 2018,
  },
  {
    _id: "f63fb3ec-1b4c-11eb-b90e-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "How.to.Train.Your.Dragon.The.Hidden.World.2019.1080p.BluRay.H264.AAC-RARBG.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\How.to.Train.Your.Dragon.The.Hidden.World.2019.1080p\\How.to.Train.Your.Dragon.The.Hidden.World.2019.1080p.BluRay.H264.AAC-RARBG.mp4",
    year: 2016,
  },
  {
    _id: "f640020c-1b4c-11eb-be5d-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "kan",
    liked: false,
    name: "John.Wick.3.2019.HDRip.XviD.AC3-EVO.avi",
    path:
      "H:\\MEDIA\\MOVIES\\John.Wick.3.2019.HDRip.XviD.AC3-EVO\\John.Wick.3.2019.HDRip.XviD.AC3-EVO.avi",
    year: 2004,
  },
  {
    _id: "f640291c-1b4c-11eb-acc2-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "hin",
    liked: false,
    name: "Love.Aaj.Kal.2020.720p.NF.WEB-DL.DD5.1.x264-BonsaiHD.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Love Aaj Kal (2020) Hindi Original 720p NF WEBRip \u2b50800 MB\u2b50 DD-5.1 ESub x264 - Shadow (Bonsai)\\Love.Aaj.Kal.2020.720p.NF.WEB-DL.DD5.1.x264-BonsaiHD.mkv",
    year: 2004,
  },
  {
    _id: "f640502e-1b4c-11eb-9654-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "kan",
    liked: false,
    name: "Avengers.infinity.war.2018.1080p-dual-lat-cinecalidad.to.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Avengers.infinity.war.2018.1080p-dual-lat-cinecalidad.to.mp4",
    year: 2000,
  },
  {
    _id: "f640502f-1b4c-11eb-b6e3-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "tel",
    liked: false,
    name: "Captain Marvel (2019) 720p HDCAMRip x264 AAC 900MB.mkv",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Captain Marvel (2019) 720p HDCAMRip x264 AAC 900MB.mkv",
    year: 2010,
  },
  {
    _id: "f640773e-1b4c-11eb-b096-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "eng",
    liked: false,
    name:
      "Spider Man Homecoming 2017 [Worldfree4u.Wiki] 720p BRRip x264 ESub [Dual Audio] [Hindi DD 5.1 + English DD 5.1].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Spider Man Homecoming 2017 [Worldfree4u.Wiki] 720p BRRip x264 ESub [Dual Audio] [Hindi DD 5.1 + English DD 5.1].mkv",
    year: 2020,
  },
  {
    _id: "f6409e50-1b4c-11eb-8021-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "jap",
    liked: false,
    name: "Avengers.Age.of.Ultron.2015.1080p.BluRay.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Avengers Age of Ultron (2015) [1080p]\\Avengers.Age.of.Ultron.2015.1080p.BluRay.x264.YIFY.mp4",
    year: 2020,
  },
  {
    _id: "f640c562-1b4c-11eb-b334-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name: "Captain.America.The.First.Avenger.1080p.BrRip.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Captain America - The First Avenger (2011)\\Captain.America.The.First.Avenger.1080p.BrRip.x264.YIFY.mp4",
    year: 2013,
  },
  {
    _id: "f6413a92-1b4c-11eb-a593-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "hin",
    liked: false,
    name: "Captain.America.The.Winter.Soldier.2014.1080p.BluRay.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Captain America The Winter Soldier (2014) [1080p]\\Captain.America.The.Winter.Soldier.2014.1080p.BluRay.x264.YIFY.mp4",
    year: 2007,
  },
  {
    _id: "f64188b4-1b4c-11eb-bf04-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name: "Captain.America.Civil.War.2016.1080p.BluRay.H264.AAC-RARBG.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Captain.America.Civil.War.2016.1080p.BluRay.H264.AAC-RARBG\\Captain.America.Civil.War.2016.1080p.BluRay.H264.AAC-RARBG.mp4",
    year: 2015,
  },
  {
    _id: "f641fde4-1b4c-11eb-9d31-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "kan",
    liked: false,
    name: "Guardians.of.the.Galaxy.2014.1080p.BluRay.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Guardians of the Galaxy (2014) [1080p]\\Guardians.of.the.Galaxy.2014.1080p.BluRay.x264.YIFY.mp4",
    year: 2017,
  },
  {
    _id: "f6424c06-1b4c-11eb-b0a3-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "jap",
    liked: false,
    name: "Guardians.of.the.Galaxy.Vol.2.2017.1080p.BluRay.H264.AAC-RARBG.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Guardians.of.the.Galaxy.Vol.2.2017.1080p.BluRay.H264.AAC-RARBG\\Guardians.of.the.Galaxy.Vol.2.2017.1080p.BluRay.H264.AAC-RARBG.mp4",
    year: 2011,
  },
  {
    _id: "f6429a26-1b4c-11eb-90ba-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name: "Iron.Man.2.2010.1080p.BrRip.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Iron Man 2 (2010) [1080p]\\Iron.Man.2.2010.1080p.BrRip.x264.YIFY.mp4",
    year: 2000,
  },
  {
    _id: "f6430f58-1b4c-11eb-9626-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "jap",
    liked: false,
    name: "Iron.Man.3.2013.1080p.BluRay.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Iron Man 3 (2013) [1080p]\\Iron.Man.3.2013.1080p.BluRay.x264.YIFY.mp4",
    year: 2020,
  },
  {
    _id: "f6435d78-1b4c-11eb-b50e-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "kan",
    liked: false,
    name: "Iron.Man.2008.1080p.BrRip.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Iron Man [1080p]\\Iron.Man.2008.1080p.BrRip.x264.YIFY.mp4",
    year: 2005,
  },
  {
    _id: "f643848a-1b4c-11eb-a2cf-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tam",
    liked: false,
    name: "Spider-Man Far from Home.2019.HDRip.XviD.AC3-EVO.avi",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Spider-Man Far from Home.2019.HDRip.XviD.AC3-EVO\\Spider-Man Far from Home.2019.HDRip.XviD.AC3-EVO.avi",
    year: 2010,
  },
  {
    _id: "f643f9ba-1b4c-11eb-99f3-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "kan",
    liked: false,
    name:
      "Spider-Man.Into the Spider-Verse.2019.1080p.WEB-DL.H264.AC3-EVO[EtHD].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Spider-Man.Into the Spider-Verse.2019.1080p.WEB-DL.H264.AC3-EVO[EtHD]\\Spider-Man.Into the Spider-Verse.2019.1080p.WEB-DL.H264.AC3-EVO[EtHD].mkv",
    year: 2007,
  },
  {
    _id: "f64420cc-1b4c-11eb-874f-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "jap",
    liked: false,
    name: "The.Avengers.2012.1080p.BluRay.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\The Avengers (2012) [1080p]\\The.Avengers.2012.1080p.BluRay.x264.YIFY.mp4",
    year: 2013,
  },
  {
    _id: "f64447dc-1b4c-11eb-9cde-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "eng",
    liked: false,
    name: "Thor.2011.1080p.BrRip.x264.YIFY+HI.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Thor (2011) [1080p]\\Thor.2011.1080p.BrRip.x264.YIFY+HI.mp4",
    year: 2000,
  },
  {
    _id: "f6461ca4-1b4c-11eb-a55f-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "tel",
    liked: false,
    name: "Thor.The.Dark.World.2013.1080p.BluRay.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\MARVEL\\Thor The Dark World (2013) [1080p]\\Thor.The.Dark.World.2013.1080p.BluRay.x264.YIFY.mp4",
    year: 2011,
  },
  {
    _id: "f64643b4-1b4c-11eb-8aab-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "Pirates.of.the.Caribbean.Curse.of.the.Black.Pearl.2003.1080p.BrRip.x264.Deceit.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Pirates Of the Caribbean\\01 - Pirates of the Caribbean - Curse of the Black Pearl (2003) [1080p]\\Pirates.of.the.Caribbean.Curse.of.the.Black.Pearl.2003.1080p.BrRip.x264.Deceit.YIFY.mp4",
    year: 2003,
  },
  {
    _id: "f6466ac6-1b4c-11eb-8d82-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "eng",
    liked: false,
    name:
      "Pirates.of.the.Caribbean.Dead.Man's.Chest.2006.1080p.BrRip.x264.Deceit.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Pirates Of the Caribbean\\02 - Pirates of the Caribbean - Dead Man's Chest (2006) [1080p]\\Pirates.of.the.Caribbean.Dead.Man's.Chest.2006.1080p.BrRip.x264.Deceit.YIFY.mp4",
    year: 2013,
  },
  {
    _id: "f64691d4-1b4c-11eb-b71b-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "jap",
    liked: false,
    name:
      "Pirates.of.the.Caribbean.At.Worlds.End.2007.1080p.BrRip.x264.Deceit.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Pirates Of the Caribbean\\03 - Pirates of the Caribbean - At Worlds End (2007) [1080p]\\Pirates.of.the.Caribbean.At.Worlds.End.2007.1080p.BrRip.x264.Deceit.YIFY.mp4",
    year: 2012,
  },
  {
    _id: "f646b8e6-1b4c-11eb-a580-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "eng",
    liked: false,
    name:
      "Pirates.of.the.Caribbean.On.Stranger.Tides.2011.1080p.BrRip.x264.Deceit.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Pirates Of the Caribbean\\04 - Pirates of the Caribbean - On Stranger Tides (2011) [1080p]\\Pirates.of.the.Caribbean.On.Stranger.Tides.2011.1080p.BrRip.x264.Deceit.YIFY.mp4",
    year: 2018,
  },
  {
    _id: "f646dff6-1b4c-11eb-a313-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "jap",
    liked: false,
    name:
      "Pirates.Of.The.Caribbean.Dead.Men.Tell.No.Tales.2017.1080p.BluRay.x264-[YTS.AG].mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Pirates Of the Caribbean\\05 - Pirates Of The Caribbean Dead Men Tell No Tales (2017) [1080p]\\Pirates.Of.The.Caribbean.Dead.Men.Tell.No.Tales.2017.1080p.BluRay.x264-[YTS.AG].mp4",
    year: 2017,
  },
  {
    _id: "f646dff7-1b4c-11eb-acbf-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "jap",
    liked: false,
    name: "Ponyo.2008.DUBBED.1080p.BluRay.H264.AAC-RARBG.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Ponyo.2008.DUBBED.1080p.BluRay.H264.AAC-RARBG\\Ponyo.2008.DUBBED.1080p.BluRay.H264.AAC-RARBG.mp4",
    year: 2005,
  },
  {
    _id: "f6472e18-1b4c-11eb-a176-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tam",
    liked: false,
    name:
      "[AnimeRG] Arrietty (2010) The Borrower Arrietty [DUAL-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Arrietty (2010) The Borrower Arrietty [DUAL-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2017,
  },
  {
    _id: "f6472e19-1b4c-11eb-8f2f-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "[AnimeRG] Castle in the Sky (1986) Laputa Castle in the Sky [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Castle in the Sky (1986) Laputa Castle in the Sky [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2008,
  },
  {
    _id: "f6472e1a-1b4c-11eb-8854-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "kan",
    liked: false,
    name:
      "[AnimeRG] From Up on Poppy Hill (2011) From Coquelicot Hill [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] From Up on Poppy Hill (2011) From Coquelicot Hill [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2002,
  },
  {
    _id: "f6472e1b-1b4c-11eb-a403-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "jap",
    liked: false,
    name:
      "[AnimeRG] Grave of the Fireflies (1988) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Grave of the Fireflies (1988) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2013,
  },
  {
    _id: "f6472e1c-1b4c-11eb-8da0-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tam",
    liked: false,
    name:
      "[AnimeRG] Howl's Moving Castle (2004) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Howl's Moving Castle (2004) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2015,
  },
  {
    _id: "f6475528-1b4c-11eb-a91f-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "jap",
    liked: false,
    name:
      "[AnimeRG] Kiki's Delivery Service (1989) Witch's Delivery Service [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Kiki's Delivery Service (1989) Witch's Delivery Service [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2018,
  },
  {
    _id: "f6475529-1b4c-11eb-a23d-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "kan",
    liked: false,
    name:
      "[AnimeRG] My Neighbor Totoro (1988) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] My Neighbor Totoro (1988) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2020,
  },
  {
    _id: "f647552a-1b4c-11eb-8f58-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "[AnimeRG] My Neighbors the Yamadas (1999) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] My Neighbors the Yamadas (1999) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2000,
  },
  {
    _id: "f647552b-1b4c-11eb-a3df-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "jap",
    liked: false,
    name:
      "[AnimeRG] Nausicaa of the Valley of the Wind (1984) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Nausicaa of the Valley of the Wind (1984) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2007,
  },
  {
    _id: "f6477c38-1b4c-11eb-a973-f07959967e21",
    genre: "f65efc30-1b4c-11eb-b2b1-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "[AnimeRG] Ocean Waves (1993) I Can Hear the Sea [ENG-SUB] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Ocean Waves (1993) I Can Hear the Sea [ENG-SUB] [1080p] [x265] [pseudo].mkv",
    year: 2017,
  },
  {
    _id: "f6477c39-1b4c-11eb-b25c-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "eng",
    liked: false,
    name:
      "[AnimeRG] Only Yesterday (1991) Memories Come Tumbling Down [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Only Yesterday (1991) Memories Come Tumbling Down [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2016,
  },
  {
    _id: "f6477c3a-1b4c-11eb-b8b4-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "hin",
    liked: false,
    name:
      "[AnimeRG] Pom Poko (1994) Ponpoko [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Pom Poko (1994) Ponpoko [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2001,
  },
  {
    _id: "f6477c3b-1b4c-11eb-9ed3-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "eng",
    liked: false,
    name:
      "[AnimeRG] Ponyo (2008) Ponyo on the Cliff by the Sea [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Ponyo (2008) Ponyo on the Cliff by the Sea [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2002,
  },
  {
    _id: "f6477c3c-1b4c-11eb-a90e-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "[AnimeRG] Porco Rosso (1992) Crimson Pig [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Porco Rosso (1992) Crimson Pig [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2016,
  },
  {
    _id: "f6477c3d-1b4c-11eb-8c62-f07959967e21",
    genre: "f65efc33-1b4c-11eb-bbee-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "[AnimeRG] Princess Mononoke (1997) Spirit Monster Princess [DUAL-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Princess Mononoke (1997) Spirit Monster Princess [DUAL-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2005,
  },
  {
    _id: "f6477c3e-1b4c-11eb-88f7-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "jap",
    liked: false,
    name:
      "[AnimeRG] Spirited Away (2001) Sen and Chihiro's Spiriting Away [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Spirited Away (2001) Sen and Chihiro's Spiriting Away [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2004,
  },
  {
    _id: "f647a34a-1b4c-11eb-a67a-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "tam",
    liked: false,
    name:
      "[AnimeRG] Tales from Earthsea (2006) Ged's War Chronicles [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Tales from Earthsea (2006) Ged's War Chronicles [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2000,
  },
  {
    _id: "f647a34b-1b4c-11eb-971b-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "jap",
    liked: false,
    name:
      "[AnimeRG] The Cat Returns (2002) The Cat's Repayment [DUAL-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] The Cat Returns (2002) The Cat's Repayment [DUAL-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2016,
  },
  {
    _id: "f647a34c-1b4c-11eb-9ed8-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "eng",
    liked: false,
    name:
      "[AnimeRG] The Red Turtle (2016) La Tortue Rouge [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] The Red Turtle (2016) La Tortue Rouge [1080p] [x265] [pseudo].mkv",
    year: 2020,
  },
  {
    _id: "f647a34d-1b4c-11eb-933c-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name:
      "[AnimeRG] The Tale of the Princess Kaguya (2013) [DUAL-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] The Tale of the Princess Kaguya (2013) [DUAL-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2019,
  },
  {
    _id: "f647a34e-1b4c-11eb-a75f-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "jap",
    liked: false,
    name:
      "[AnimeRG] The Wind Rises (2013) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] The Wind Rises (2013) [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2003,
  },
  {
    _id: "f647a34f-1b4c-11eb-97c1-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "hin",
    liked: false,
    name:
      "[AnimeRG] When Marnie Was There (2014) Marnie of My Memories [DUAL-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] When Marnie Was There (2014) Marnie of My Memories [DUAL-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2013,
  },
  {
    _id: "f647a350-1b4c-11eb-b9d3-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tam",
    liked: false,
    name:
      "[AnimeRG] Whisper of the Heart (1995) If You Listen Closely [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    path:
      "H:\\MEDIA\\MOVIES\\Studio Ghibli Film Collection (Movies From 1984-2016) [1080p]\\[AnimeRG] Whisper of the Heart (1995) If You Listen Closely [MULTI-AUDIO] [1080p] [x265] [pseudo].mkv",
    year: 2003,
  },
  {
    _id: "f65deabe-1b4c-11eb-8717-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "tel",
    liked: false,
    name: "The Irishman.2019.HDRip.XviD.AC3-EVO.avi",
    path:
      "H:\\MEDIA\\MOVIES\\The Irishman.2019.HDRip.XviD.AC3-EVO\\The Irishman.2019.HDRip.XviD.AC3-EVO.avi",
    year: 2002,
  },
  {
    _id: "f65e11cc-1b4c-11eb-80e1-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "kan",
    liked: false,
    name: "The.Judge.2014.1080p.BluRay.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\The Judge (2014) 1080p BrRip x264\\The.Judge.2014.1080p.BluRay.x264.YIFY.mp4",
    year: 2003,
  },
  {
    _id: "f65e11cd-1b4c-11eb-ac2b-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "hin",
    liked: false,
    name: "The.Pursuit.Of.Happyness.2006.1080p.BrRip.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\The Pursuit of Happyness\\The.Pursuit.Of.Happyness.2006.1080p.BrRip.x264.YIFY.mp4",
    year: 2018,
  },
  {
    _id: "f65e38de-1b4c-11eb-966e-f07959967e21",
    genre: "f65efc36-1b4c-11eb-9299-f07959967e21",
    language: "eng",
    liked: false,
    name: "sample.avi",
    path:
      "H:\\MEDIA\\MOVIES\\The.Man.from.U.N.C.L.E.2015.HDRip.XViD-ETRG\\sample.avi",
    year: 2010,
  },
  {
    _id: "f65e38df-1b4c-11eb-bf75-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "tam",
    liked: false,
    name: "The.Man.from.U.N.C.L.E.2015.HDRip.XViD-ETRG.avi",
    path:
      "H:\\MEDIA\\MOVIES\\The.Man.from.U.N.C.L.E.2015.HDRip.XViD-ETRG\\The.Man.from.U.N.C.L.E.2015.HDRip.XViD-ETRG.avi",
    year: 2018,
  },
  {
    _id: "f65e5fee-1b4c-11eb-beb9-f07959967e21",
    genre: "f65efc34-1b4c-11eb-bb8e-f07959967e21",
    language: "jap",
    liked: false,
    name: "The.Post.2017.1080p.BluRay.x265-RARBG.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\The.Post.2017.1080p.BluRay.x265-RARBG\\The.Post.2017.1080p.BluRay.x265-RARBG.mp4",
    year: 2007,
  },
  {
    _id: "f65e8700-1b4c-11eb-b709-f07959967e21",
    genre: "f65efc31-1b4c-11eb-90f9-f07959967e21",
    language: "jap",
    liked: false,
    name: "Tomorrowland.2015.720p.BluRay.x264.YIFY.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Tomorrowland (2015)\\Tomorrowland.2015.720p.BluRay.x264.YIFY.mp4",
    year: 2005,
  },
  {
    _id: "f65e8701-1b4c-11eb-8b8c-f07959967e21",
    genre: "f65efc32-1b4c-11eb-87f7-f07959967e21",
    language: "hin",
    liked: false,
    name: "WALL-E.2008.1080p.BrRip.x264.YIFY.mp4",
    path: "H:\\MEDIA\\MOVIES\\WALL E\\WALL-E.2008.1080p.BrRip.x264.YIFY.mp4",
    year: 2020,
  },
  {
    _id: "f65ed51e-1b4c-11eb-b3d9-f07959967e21",
    genre: "f65efc35-1b4c-11eb-82ed-f07959967e21",
    language: "kan",
    liked: false,
    name: "Zootopia.2016.1080p.BluRay.H264.AAC-RARBG.mp4",
    path:
      "H:\\MEDIA\\MOVIES\\Zootopia.2016.1080p.BluRay.H264.AAC-RARBG\\Zootopia.2016.1080p.BluRay.H264.AAC-RARBG.mp4",
    year: 2004,
  },
];

const getMovies = () => movieList;
export default getMovies;
