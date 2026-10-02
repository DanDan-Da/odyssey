const response = await fetch("https://api.le-systeme-solaire.net/rest/bodies/", {
    headers: { Authorization: `Bearer ${process.env.SOLAR_KEY}` },
});
const data = await response.json();

data.bodies
    .filter(b => b.isPlanet)
    .forEach(planet => {
        console.log(`id: ${planet.id}  name: ${planet.englishName}`);
    });
