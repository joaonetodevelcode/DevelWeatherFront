
//Import dos dinamicos
import clearskyDinamico from '../assets/icons/dynamic/clearsky.json';
import fewcloudsDinamico from '../assets/icons/dynamic/fewclouds.json';
import scatteredcloudsDinamico from '../assets/icons/dynamic/scatteredclouds.json';
import brokencloudsDinamico from '../assets/icons/dynamic/brokenclouds.json';
import showerrainDinamico from '../assets/icons/dynamic/showerrain.json';
import rainDinamico from '../assets/icons/dynamic/rain.json';
import thunderstormDinamico from '../assets/icons/dynamic/thunderstorm.json';
import snowDinamico from '../assets/icons/dynamic/snow.json';

//Imports estatico
import clearsky from '../assets/icons/static/clearsky.png';
import fewclouds from '../assets/icons/static/fewclouds.png';
import scatteredclouds from '../assets/icons/static/scatteredclouds.png';
import brokenclouds from '../assets/icons/static/brokenclouds.png';
import showerrain from '../assets/icons/static/showerrain.png';
import rain from '../assets/icons/static/rain.png';
import thunderstorm from '../assets/icons/static/thunderstrom.png';
import snow from '../assets/icons/static/snow.png';
import mist from '../assets/icons/static/mist.png';

type ClimateType = {
    [key: string]: {
      dinamico: any;
      estatico: any;
      cor: string[];
      background: string;
    };
  };
  

export const climates: ClimateType = {
    //Clear
    "clear sky": {
        dinamico: clearskyDinamico,
        estatico: clearsky,
        cor: ['#29B2DD','#33AADD','#2DC8EA'],
        background: 'rgba(51, 170, 221, 1)'
    },

    //clouds
    "few clouds": {
        dinamico: fewcloudsDinamico,
        estatico: fewclouds,
        cor: ['#F0F8FF', '#87CEEB', '#ADD8E6'],
        background: 'rgba(176, 196, 222, 0.4)'
    },

    "scattered clouds": {
        dinamico: scatteredcloudsDinamico,
        estatico: scatteredclouds,
        cor: ['#87CEFA', '#AED6F1', '#B0C4DE'],
        background: 'rgba(135, 206, 250, 1)'
    },
    
    "broken clouds": {
        dinamico: fewcloudsDinamico,
        estatico: brokenclouds,
        cor: ['#778899', '#708090', '#696969'],
        background: 'rgba(119, 136, 153, 1)'
    },

    "overcast clouds": {
        dinamico: fewcloudsDinamico,
        estatico: brokenclouds,
        cor: ['#778899', '#708090', '#696969'],
        background: 'rgba(119, 136, 153, 1)'
    },

    //Rain
    "rain": {
        dinamico: rainDinamico,
        estatico: rain,
        cor: ['#4682B4', '#778899', '#1E90FF'],
        background: 'rgba(70, 130, 180, 1)'
    },

    "light rain": {
        dinamico: rainDinamico,
        estatico: rain,
        cor: ['#4682B4', '#778899', '#1E90FF'],
        background: 'rgba(70, 130, 180, 1)'
    },

    "moderate rain": {
        dinamico: rainDinamico,
        estatico: rain,
        cor: ['#4682B4', '#778899', '#1E90FF'],
        background: 'rgba(70, 130, 180, 1)'
    },

    "heavy intensity rain": {
        dinamico: rainDinamico,
        estatico: rain,
        cor: ['#4682B4', '#778899', '#1E90FF'],
        background: 'rgba(70, 130, 180, 1)'
    },

    "very heavy rain": {
        dinamico: rainDinamico,
        estatico: rain,
        cor: ['#4682B4', '#778899', '#1E90FF'],
        background: 'rgba(70, 130, 180, 1)'
    },

    "extreme rain": {
        dinamico: rainDinamico,
        estatico: rain,
        cor: ['#4682B4', '#778899', '#1E90FF'],
        background: 'rgba(70, 130, 180, 1)'
    },

    "freezing rain": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    "light intensity shower rain": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    "shower rain": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    "heavy intensity shower rain": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    "ragged shower rain": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },
    
    //Thunderstorm    
    "thunderstorm with light rain": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB'],
        background: 'rgba(8, 36, 79, 0.6)'
    },

    "thunderstorm with rain": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB'],
        background: 'rgba(8, 36, 79, 0.6)'
    },

    "thunderstorm with heavy rain": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB'],
        background: 'rgba(8, 36, 79, 0.6)'
    },

    "light thunderstorm": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB'],
        background: 'rgba(8, 36, 79, 0.6)'
    },

    "thunderstorm": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB'],
        background: 'rgba(8, 36, 79, 0.6)'
    },

    "heavy thunderstorm": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB'],
        background: 'rgba(8, 36, 79, 0.6)'
    },

    "ragged thunderstorm": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB'],
        background: 'rgba(8, 36, 79, 0.6)'
    },

    "thunderstorm with light drizzle": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB'],
        background: 'rgba(8, 36, 79, 0.6)'
    },

    "thunderstorm with drizzle": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB'],
        background: 'rgba(8, 36, 79, 0.6)'
    },

    "thunderstorm with heavy drizzle": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB'],
        background: 'rgba(8, 36, 79, 0.6)'
    },

    //Drizzle
    "light intensity drizzle": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    "drizzle": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    "heavy intensity drizzle": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    "light intensity drizzle rain": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    "drizzle rain": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    "heavy intensity drizzle rain": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    "shower rain and drizzle": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    "heavy shower rain and drizzle": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    "shower drizzle": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },

    //Snow    
    "light snow": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    "snow": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    "heavy snow": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    "sleet": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    "light shower sleet": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    "shower sleet": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    "snolight rain and snoww": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    "rain and snow": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    "light shower snow": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    "shower snow": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    "heavy shower snow": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },

    //Atmosphere
    "mist": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
        background: 'rgba(211, 211, 211, 0.4)'
    },

    "smoke": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
        background: 'rgba(211, 211, 211, 0.4)'
    },

    "sand/dust whirls": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
        background: 'rgba(211, 211, 211, 0.4)'
    },

    "fog": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
        background: 'rgba(211, 211, 211, 0.4)'
    },

    "sand": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
        background: 'rgba(211, 211, 211, 0.4)'
    },

    "dust": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
        background: 'rgba(211, 211, 211, 0.4)'
    },

    "volcanic ash": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
        background: 'rgba(211, 211, 211, 0.4)'
    },

    "squalls": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
        background: 'rgba(211, 211, 211, 0.4)'
    },

    "tornado": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
        background: 'rgba(211, 211, 211, 0.4)'
    },

    "haze": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
        background: 'rgba(211, 211, 211, 0.4)'
    },
}
