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

export default function TelaPrincipal() {
    const [cidade, setCidade] = useState('Ipatinga')
    const clima = "clear sky"
    const [icone, setIcone] = useState(null)
    const [temperatura, setTemperatura] = useState('')
    const [humidade, setHumidade] = useState('')
    const [chanceChuva, setChanceChuva] = useState('')
    const [vento, setVento] = useState('')
    const [temperaturaMax, setTemperaturaMax] = useState('')
    const [temperaturaMin, setTemperaturaMin] = useState('')

    async function dadosClima(cidade: string) {
        const resultado = await pegarDadosClima(cidade)
        setIcone(resultado.weather[0].description)
        setTemperatura(resultado.main.temp)
        setHumidade(resultado.main.humidity)
        setVento(resultado.wind.speed)
        setChanceChuva(resultado.clouds.all)
        setTemperaturaMax(resultado.main.temp_max)
        setTemperaturaMin(resultado.main.temp_min)
    }
    
    useEffect(() => {
            dadosClima(cidade)
    }, []);

    if (!icone) return <ScreenLoading />
    
    return(
        <LinearGradient
        // Background Linear Gradient
        // climates[`${icone}`].cor
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
            >
                <Image source={iconLocation} style={styles.iconLocalizacao}/>
                <Text style={styles.localizacao}> {cidade} </Text>
                <Image source={iconSetaBaixo} style={styles.iconSeta}/>
            </TouchableOpacity>


            <Text style={styles.texto}>{temperatura}°</Text>

            <Text style={styles.textoPrevisao}>{icone}</Text>

            <Text style={styles.textoMeio}>Max.: {temperaturaMax}°C   Min.: {temperaturaMin}°C</Text>
           
            <CardInformation 
                chanceChuva={chanceChuva}
                humidade={humidade}
                vento={vento}
                color='rgba(8, 36, 79, 0.6)'
            />

            <CardTomorrow 
                chanceChuva='6'
                humidade='90'
                vento='19'
                color='rgba(8, 36, 79, 0.6)'
            />
            
        </LinearGradient> 

        
    )
}

//openmap

//snow, broken clouds