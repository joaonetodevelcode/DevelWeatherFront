
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
        cor: ['#29B2DD','#33AADD','#2DC8EA']
    },

    "scattered clouds": {
        dinamico: scatteredcloudsDinamico,
        estatico: scatteredclouds,
        cor: ['#29B2DD','#33AADD','#2DC8EA']
    },
    
    "broken clouds": {
        dinamico: fewcloudsDinamico,
        estatico: brokenclouds,
        cor: ['#29B2DD','#33AADD','#2DC8EA']
    },
    
    "shower rain": {
        dinamico: showerrainDinamico,
        estatico: showerrain,
        cor: ['#29B2DD','#33AADD','#2DC8EA']
    },
    
    "rain": {
        dinamico: rainDinamico,
        estatico: rain,
        cor: ['#29B2DD','#33AADD','#2DC8EA']
    },
    
    "thunderstorm": {
        dinamico: thunderstormDinamico,
        estatico: thunderstorm,
        cor: ['#08244F', '#134CB5', '#0B42AB']
    },
    
    "snow": {
        dinamico: snowDinamico,
        estatico: snow,
        cor: ['#29B2DD','#33AADD','#2DC8EA']
    },
    "mist": {
        dinamico: mist,
        estatico: mist,
        cor: ['#29B2DD','#33AADD','#2DC8EA']
    },
}
