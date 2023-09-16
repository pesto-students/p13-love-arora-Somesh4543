function createTemperatureFetcher() {
    const temperatureData = {
      'New York': 20,
      'London': 18,
      'Paris': 22,
      'Tokyo': 25,
      'Sydney': 28,
    };
  
    const cache = {};
  
    return function getTemperatureForCity(city) {
      if (cache[city] !== undefined) {
        console.log(`Fetching temperature for ${city} from cache`);
        return cache[city];
      } else {
        if (temperatureData[city] !== undefined) {
          console.log(`Fetching temperature for ${city} from API`);
          cache[city] = temperatureData[city];
          return cache[city];
        } else {
          console.log(`City ${city} not found`);
          return null; 
        }
      }
    };
  }
  
  const getTemperatureForCity = createTemperatureFetcher();
  
  const temperature1 = getTemperatureForCity('New York');
  console.log(temperature1); 
  
  const temperature2 = getTemperatureForCity('New York');
  console.log(temperature2); 
  
  const temperature3 = getTemperatureForCity('London');
  console.log(temperature3); 
  
  const temperature4 = getTemperatureForCity('London');
  console.log(temperature4); 
  