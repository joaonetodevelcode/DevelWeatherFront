
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
    };
  };
  

export const climates: ClimateType = {
    "clear sky": {
        dinamico: clearskyDinamico,
        estatico: clearsky,
        cor: ['#29B2DD','#33AADD','#2DC8EA']
    },

    "few clouds": {
        dinamico: fewcloudsDinamico,
        estatico: fewclouds,
        cor: ['#F0F8FF', '#87CEEB', '#ADD8E6']
    },

    "scattered clouds": {
        dinamico: scatteredcloudsDinamico,
        estatico: scatteredclouds,
        cor: ['#87CEFA', '#AED6F1', '#B0C4DE']
    },
    
    "broken clouds": {
        dinamico: fewcloudsDinamico,
        estatico: brokenclouds,
        cor: ['#778899', '#708090', '#696969']
    },
    
    "shower rain": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#4682B4', '#5F9EA0', '#87CEEB']
    },
    
    "rain": {
        dinamico: rainDinamico,
        estatico: rain,
        cor: ['#4682B4', '#778899', '#1E90FF']
    },
    
    "thunderstorm": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB']
    },
    
    "snow": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#F5F5F5', '#DCDCDC', '#F0F8FF']
    },
    "mist": {
        dinamico: mist,
        estatico: mist,
        cor: ['#D3D3D3', '#C0C0C0', '#A9A9A9']
    },
}
