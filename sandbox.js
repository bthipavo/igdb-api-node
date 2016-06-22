igdb = require('./index');

function log(res){
  for(i in res){
    game = res[i];
    game.cover = igdb.image(game.cover);
  }
  console.log(JSON.stringify(res, null, " "));
}


igdb.platforms({
  search: "Atari",
  limit: 1,
}, ["name","games"]).then(log);

igdb.games({
  search: "zelda",
  limit: 5,
  offset: 0,
  order: "release_dates.date:desc",
  filters: {
    "release_dates.date_gt": "2010"
  }
}, ["name","release_dates.date","rating","hypes","cover"]).then(log);

igdb.games({
  ids: [18472, 18228],
}, ["name", "cover"]).then(log);

igdb.companies({
  search: "rockstar",
  limit: 5,
  offset: 0,
  order: "name:desc",
}, ["name","logo"]).then(log);