// Static planet data.
// Units are in the field names:
// distanceFromSunKm - average orbital distance (semi-major axis), km
// temperatureC - degrees Celsius
// min/max are null where there is no meaningful range: the gas giants have
// no surface (average is at the 1 bar pressure level) and Venus's surface is almost the same temperature everywhere.
export const planets = [
    {
        id: "mercury",
        name: "Mercury",
        symbol: "☿",
        distanceFromSunKm: 57_909_050,
        temperatureC: { min: -180, max: 430, average: 167 },
        atmosphere: "Almost none: a very thin exosphere of oxygen, sodium and hydrogen.",
        description: "The smallest planet and the closest to the Sun, with extreme swings between day and night.",
    },
    {
        id: "venus",
        name: "Venus",
        symbol: "♀",
        distanceFromSunKm: 108_208_475,
        temperatureC: { min: null, max: null, average: 464 },
        atmosphere: "Very thick, about 96% carbon dioxide.",
        description: "The hottest planet, wrapped in clouds and heated by a runaway greenhouse effect.",
    },
    {
        id: "earth",
        name: "Earth",
        symbol: "♁",
        distanceFromSunKm: 149_598_023,
        temperatureC: { min: -89, max: 57, average: 15 },
        atmosphere: "About 78% nitrogen and 21% oxygen.",
        description: "The only known planet with liquid surface water and life.",
    },
    {
        id: "mars",
        name: "Mars",
        symbol: "♂",
        distanceFromSunKm: 227_939_200,
        temperatureC: { min: -153, max: 20, average: -63 },
        atmosphere: "Thin, about 95% carbon dioxide.",
        description: "A cold desert world with the largest volcano in the solar system, Olympus Mons.",
    },
    {
        id: "jupiter",
        name: "Jupiter",
        symbol: "♃",
        distanceFromSunKm: 778_340_821,
        temperatureC: { min: null, max: null, average: -108 },
        atmosphere: "About 90% hydrogen and 10% helium.",
        description: "The largest planet, a gas giant with a storm, the Great Red Spot, bigger than Earth.",
    },
    {
        id: "saturn",
        name: "Saturn",
        symbol: "♄",
        distanceFromSunKm: 1_426_666_422,
        temperatureC: { min: null, max: null, average: -139 },
        atmosphere: "Mostly hydrogen and helium.",
        description: "A gas giant known for its bright rings, and light enough to float on water.",
    },
    {
        id: "uranus",
        name: "Uranus",
        symbol: "♅",
        distanceFromSunKm: 2_870_658_186,
        temperatureC: { min: null, max: null, average: -197 },
        atmosphere: "Hydrogen and helium with methane, which gives it a blue-green colour.",
        description: "An ice giant that spins on its side, tilted about 98 degrees.",
    },
    {
        id: "neptune",
        name: "Neptune",
        symbol: "♆",
        distanceFromSunKm: 4_498_396_441,
        temperatureC: { min: null, max: null, average: -218 },
        atmosphere: "Hydrogen and helium with methane.",
        description: "The farthest planet, a cold ice giant with the fastest winds in the solar system.",
    },
];
