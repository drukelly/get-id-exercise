exports.seed = (knex, Promise) => {
  return knex(process.env.db_table).del()
    .then(() => {
      return knex(process.env.db_table).insert([
        { name: 'Alec Burks', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6429.png' },
        { name: 'Alfonzo McKinnie', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2530923.png' },
        { name: 'Andrew Bogut', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2747.png' },
        { name: 'Damion Lee', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2595209.png' },
        { name: 'Draymond Green', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png' },
        { name: 'Jacob Evans', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934621.png' },
        { name: 'Jonas Jerebko', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3998.png' },
        { name: 'Omari Spellman', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065836.png' },
        { name: 'Shaun Livingston', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2393.png' },
        { name: 'Stephen Curry', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png' },
        { name: 'Willie Cauley-Stein', image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991282.png' }
      ])
    })
}
