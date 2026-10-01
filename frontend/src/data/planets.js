export async function getWholeSolarSystem() {
    const response = await fetch("/api/solar/bodies/");
    const data = await response.json();

    // Extracting the information of all the solar planets
    const solarSystemPlanets = data.bodies.filter(b => b.isPlanet);
    // Information of planet earth.
    const planetEarth = solarSystemPlanets.find(p => p.englishName === "Earth");
    return { planets: solarSystemPlanets, earth: planetEarth };
}

// The results.
getWholeSolarSystem().then(({ planets, earth }) => {
    const temperatureCelsius = earth.avgTemp - 273.15;

    console.log(planets);
    console.log(`Name: ${earth.englishName}`);
    console.log(`Average temperature: ${temperatureCelsius.toFixed(1)} °C`);
});
