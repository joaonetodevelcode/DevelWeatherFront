import React, {useEffect, useState} from 'react';
import { Text, Modal, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

import CardInformation from '../../components/CardInformation';
import LottieView from "lottie-react-native";
import CardTomorrow from '../../components/CardTomorrow';
import iconLocation from '../../assets/icons/location.png';
import iconSetaBaixo from '../../assets/icons/downArrow.png';
import { pegarDadosClima } from '../../api/apiClimate';

import { climates } from '../../api/climates';
import ScreenLoading from '../ScreenLoading';
import { requestLocation } from '../../service/locationService';
import { temperatureConversion } from '../../service/temperatureService';
import { getCityName } from '../../api/apiGoogleMaps';
import CityModal from '../../components/CityModal';

export default function TelaPrincipal() {
    const [visibleModal, setVisibleModal] = useState(false) 
    const [cidade, setCidade] = useState('')
    const clima = "mist"
    const [icone, setIcone] = useState(null)
    const [temperatura, setTemperatura] = useState('')
    const [humidade, setHumidade] = useState('')
    const [chanceChuva, setChanceChuva] = useState('')
    const [vento, setVento] = useState('')
    const [temperaturaMax, setTemperaturaMax] = useState('')
    const [temperaturaMin, setTemperaturaMin] = useState('')
    let userLocation: number[] | undefined = []

    async function dadosClima(cidade: string) {
        userLocation = await requestLocation();
        if(userLocation){
            console.log("NOVA REQUISICAO")
            const resultado = await pegarDadosClima(userLocation[0], userLocation[1])
            const responseMapsApi = await getCityName(userLocation[0], userLocation[1])
            setIcone(resultado.weather[0].description)
            setTemperatura(resultado.main.temp)
            setHumidade(resultado.main.humidity)
            setVento(resultado.wind.speed)
            setChanceChuva(resultado.clouds.all)
            setTemperaturaMax(resultado.main.temp_max)
            setTemperaturaMin(resultado.main.temp_min)
            setCidade(responseMapsApi);
        }
    }
    
    useEffect(() => {
            dadosClima(cidade)
    }, []);

    if (!icone) return <ScreenLoading />
    
    return(
        <LinearGradient
        // Background Linear Gradient
        colors={climates[`${icone}`].cor}
        start={{ x: 0, y: 0 }} // Ponto de início (canto superior esquerdo)
        end={{ x: 1, y: 1 }}   // Ponto de fim (canto superior direito)
        style={styles.container}
        >
            <LottieView source={climates[`${icone}`].dinamico}
                autoPlay={true}
                loop={true}
                style={styles.icone}
            />
           
            <TouchableOpacity
                style={styles.botaoModal}
                onPress={() => setVisibleModal(true)}
            >
                <Image source={iconLocation} style={styles.iconLocalizacao}/>
                <Text style={styles.localizacao}> {cidade} </Text>
                <Image source={iconSetaBaixo} style={styles.iconSeta}/>
            </TouchableOpacity>

            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
            >
                <CityModal handleClose={() => setVisibleModal(false)}/>
            </Modal>


            <Text style={styles.texto}>{temperatureConversion(temperatura)}°C</Text>

            <Text style={styles.textoPrevisao}>{icone}</Text>

            <Text style={styles.textoMeio}>Max.: {temperatureConversion(temperaturaMax)}°C   Min.: {temperatureConversion(temperaturaMin)}°C</Text>
           
            <CardInformation 
                chanceChuva={chanceChuva}
                humidade={humidade}
                vento={vento}
                color={climates[`${icone}`].background}
            />

            <CardTomorrow 
                chanceChuva='6'
                humidade='90'
                vento='19'
                color={climates[`${icone}`].background}
            />
            
        </LinearGradient> 

        
    )
}

//openmap

//snow, broken clouds