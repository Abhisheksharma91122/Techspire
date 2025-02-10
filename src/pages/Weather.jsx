import { useState } from "react";
import { Sun, Moon, Cloud, Droplet, Wind, Thermometer, Sunrise, Sunset } from "lucide-react";
import Navbar from "../components/Navbar";

const WeatherPage = () => {
  const [unit, setUnit] = useState("C");
  const weatherData = {
    city: "Timisoara",
    date: "Thursday 12 May 2022 17:30",
    temp: 20,
    feelsLike: 21,
    condition: "Few clouds",
    humidity: "50%",
    pressure: "1018hPa",
    wind: "2 m/s",
    rainChance: "0.00%",
    clouds: "20%",
    sunrise: "08:36",
    sunset: "23:26",
    hourlyForecast: [
      { hour: "12:00", temp: 21, icon: <Sun /> },
      { hour: "13:00", temp: 21, icon: <Sun /> },
      { hour: "14:00", temp: 22, icon: <Sun /> },
      { hour: "15:00", temp: 23, icon: <Sun /> },
      { hour: "16:00", temp: 24, icon: <Sun /> },
      { hour: "17:00", temp: 26, icon: <Sun /> },
      { hour: "18:00", temp: 26, icon: <Sun /> },
      { hour: "19:00", temp: 27, icon: <Sun /> },
      { hour: "20:00", temp: 27, icon: <Sun /> },
      { hour: "21:00", temp: 26, icon: <Sun /> },
      { hour: "22:00", temp: 23, icon: <Sun /> },
      { hour: "23:00", temp: 20, icon: <Moon /> },
    ],
    dailyForecast: [
      { day: "Friday", condition: "Moderate rain", low: 15, high: 28, icon: <Cloud /> },
      { day: "Saturday", condition: "Sunny", low: 13, high: 24, icon: <Sun /> },
      { day: "Sunday", condition: "Cloudy", low: 11, high: 21, icon: <Cloud /> },
    ],
  };

  return (

    <div>
      <Navbar />
      <div className="min-h-screen mt-14 bg-white p-6 bg-whitetext-green ">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* City & Date */}
          <div>
            <h1 className="text-gray-800 text-3xl font-bold">{weatherData.city}</h1>
            <p className="text-gray-800">{weatherData.date}</p>
          </div>

          {/* Current Weather */}
          <div className="bg-gray-100 text-green-600 p-6 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-6xl font-light">{weatherData.temp}°{unit}</h2>
              <p>Feels like {weatherData.feelsLike}°{unit}</p>
              <p className="mt-2 text-lg">{weatherData.condition}</p>
            </div>
            <Sun className="h-16 w-16 text-yellow-500" />
          </div>

          {/* Weather Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ label: "Rain", value: weatherData.rainChance, icon: Droplet },
            { label: "Wind", value: weatherData.wind, icon: Wind },
            { label: "Humidity", value: weatherData.humidity, icon: Thermometer },
            { label: "Pressure", value: weatherData.pressure, icon: Cloud },
            { label: "Clouds", value: weatherData.clouds, icon: Cloud },
            { label: "Sunrise", value: weatherData.sunrise, icon: Sunrise },
            { label: "Sunset", value: weatherData.sunset, icon: Sunset }].map(({ label, value, icon: Icon }, i) => (
              <div key={i} className="text-green-600 bg-gray-100 p-4 rounded-lg flex items-center gap-3">
                <Icon className="h-6 w-6 text-green-500"/>
                <div>
                  <p className="text-sm text-gray-600">{label}</p>
                  <p className="text-lg font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hourly Forecast */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Hourly Forecast</h2>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
              {weatherData.hourlyForecast.map((hour, i) => (
                <div key={i} className="text-green-600 bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                  <p className="text-sm text-gray-800">{hour.hour}</p>
                  {hour.icon}
                  <p className="font-medium text-gray-600">{hour.temp}°{unit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Forecast */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Daily Forecast</h2>
            <div className="space-y-2">
              {weatherData.dailyForecast.map((day, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded-lg flex justify-between">
                  <div className="flex items-center gap-4 text-green-600">
                    {day.icon}
                    <p className="font-medium text-green-600">{day.day}</p>
                    <p className="text-gray-600  hidden sm:block">{day.condition}</p>
                  </div>
                  <p className="text-gray-800">{day.low}° - {day.high}°{unit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeatherPage;
