
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
    "clear sky": {
        dinamico: clearskyDinamico,
        estatico: clearsky,
        cor: ['#29B2DD','#33AADD','#2DC8EA'],
        background: 'rgba(51, 170, 221, 1)'
    },

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
    
    "shower rain": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB'],
        background: 'rgba(70, 130, 180, 0.4)'
    },
    
    "rain": {
        dinamico: rainDinamico,
        estatico: rain,
        cor: ['#4682B4', '#778899', '#1E90FF'],
        background: 'rgba(70, 130, 180, 1)'
    },
    
    "thunderstorm": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB'],
        background: 'rgba(8, 36, 79, 0.6)'
    },
    
    "snow": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#B0C4DE', '#F0FFFF'],
        background: 'rgba(176, 196, 222, 0.8)'
    },
    "mist": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9'],
        background: 'rgba(211, 211, 211, 0.4)'
    },
}
