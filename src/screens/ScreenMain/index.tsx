import React, {useEffect, useState, useContext} from 'react';
import { Text, Modal, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

import CardInformation from '../../components/CardInformation';
import LottieView from "lottie-react-native";
import CardTomorrow from '../../components/CardTomorrow';
import iconLocation from '../../assets/icons/location.png';
import iconSetaBaixo from '../../assets/icons/downArrow.png';
import { getCurrentClimateData, getTomorrowClimateData } from '../../api/apiClimate';

import { climates } from '../../api/climates';
import ScreenLoading from '../ScreenLoading';
import { requestLocation } from '../../service/locationService';
import { temperatureConversion } from '../../service/temperatureService';
import { getCityName } from '../../api/apiGoogleMaps';
import CityModal from '../../components/CityModal';
import { insertInCitys } from '../../mocks/citys';
import { AuthContext } from '../../context/authContext';

export default function TelaPrincipal({navigation}: any) {
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
    const [climateDataTomorrow, setClimateDataTomorrow] = useState<any[]>([])
    let userLocation: number[] | undefined = []
    let latitude: number;
    let longitude: number;
    let cityName: string;

    const {logout, user}: any = useContext(AuthContext) 

    async function getUserLocation() {
        userLocation = await requestLocation();
        if(userLocation) {
            cityName = await getCityName(userLocation[0], userLocation[1])
            dadosClima(userLocation[0], userLocation[1], cityName)
            insertInCitys(cityName, 'TAL')
        }
    }


    async function dadosClima(lat: number, lng: number, cityName: string) {
        console.log('TA ENTRANDO')
        const resultado = await getCurrentClimateData(lat, lng)
        const climateTomorrow = await getTomorrowClimateData(lat, lng)
        console.log(resultado)
        setIcone(resultado[0])
        setTemperatura(resultado[1])
        setTemperaturaMax(resultado[2])
        setTemperaturaMin(resultado[3])
        setHumidade(resultado[4])
        setVento(resultado[5])
        setChanceChuva(resultado[6])
        setCidade(cityName)
        setClimateDataTomorrow(climateTomorrow)
        return
    }

    function handleLogout(){
        logout()
        navigation.navigate('Login')
    }
    
    useEffect(() => {
        getUserLocation()    
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

            <TouchableOpacity
                style={styles.buttonLogout}
                onPress={() => handleLogout()}
            >
                <Text style={styles.localizacao}> Sair </Text>
            </TouchableOpacity>

            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => setVisibleModal(false)}
            >
                <CityModal 
                    climateData={(lat: number, lng: number, cityName: string) => dadosClima(lat, lng, cityName)}
                    handleClose={() => setVisibleModal(false)}
                    userCity={cidade}
                    />
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
                climate={climateDataTomorrow[0]}
                temperatureMax={climateDataTomorrow[2]}
                temperatureMin={climateDataTomorrow[3]}
                humidity={climateDataTomorrow[4]}
                wind={climateDataTomorrow[5]}
                clouds={climateDataTomorrow[6]}
                color={climates[`${icone}`].background}
                icon={climates[`${icone}`].estatico}
            />
            
        </LinearGradient> 

        
    )
}

//openmap

//snow, broken clouds