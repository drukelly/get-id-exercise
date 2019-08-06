exports.seed = (knex, _Promise) => {
  return knex(process.env.db_table).del()
    .then(function () {
      return knex(process.env.db_table).insert([
        { name: 'Alec Burks', jersey_number: '13', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6429.png' },
        { name: 'Alfonzo McKinnie', jersey_number: '28', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2530923.png' },
        { name: 'Andrew Bogut', jersey_number: '12', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2747.png' },
        { name: 'Damion Lee', jersey_number: '1', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2595209.png' },
        { name: 'Draymond Green', jersey_number: '23', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png' },
        { name: 'Jacob Evans', jersey_number: '10', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934621.png' },
        { name: 'Jonas Jerebko', jersey_number: '21', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3998.png' },
        { name: 'Omari Spellman', jersey_number: '6', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065836.png' },
        { name: 'Shaun Livingston', jersey_number: '34', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2393.png' },
        { name: 'Stephen Curry', jersey_number: '30', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png' },
        { name: 'Willie Cauley-Stein', jersey_number: '00', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991282.png' }
      ])
    })
}
