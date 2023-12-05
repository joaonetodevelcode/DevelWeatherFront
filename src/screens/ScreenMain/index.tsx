import React, {useEffect, useState, useContext} from 'react';
import { Text, Modal, TouchableOpacity, Image, BackHandler, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import {useBackHandler} from '@react-native-community/hooks'

import CityModal from '../../components/CityModal';
import ScreenLoading from '../ScreenLoading';
import CardInformation from '../../components/CardInformation';
import LottieView from "lottie-react-native";
import CardTomorrow from '../../components/CardTomorrow';
import iconLocation from '../../assets/icons/location.png';
import iconSetaBaixo from '../../assets/icons/downArrow.png';
import { getCurrentClimateData, getTomorrowClimateData } from '../../api/apiClimate';
import { climates } from '../../api/climates';
import { requestLocation } from '../../service/locationService';
import { temperatureConversion } from '../../service/temperatureService';
import { getCityName } from '../../api/apiGoogleMaps';
import { insertInCitys } from '../../mocks/citys';
import { AuthContext } from '../../context/authContext';

export default function ScreenMain({navigation}: any) {
    const [visibleModal, setVisibleModal] = useState<boolean>(false) 
    const [cidade, setCidade] = useState<string>('')
    const [icone, setIcone] = useState<string | null>(null)
    const [temperatura, setTemperatura] = useState<string>('')
    const [humidade, setHumidade] = useState<string>('')
    const [chanceChuva, setChanceChuva] = useState<string>('')
    const [vento, setVento] = useState<string>('')
    const [temperaturaMax, setTemperaturaMax] = useState<string>('')
    const [temperaturaMin, setTemperaturaMin] = useState<string>('')
    const [climateDataTomorrow, setClimateDataTomorrow] = useState<any[]>([])
    let userLocation: number[] | undefined = []
    let cityName: string;

    const {logout}: any = useContext(AuthContext) 

    async function getUserLocation() {
        userLocation = await requestLocation();
        if(userLocation) {
            cityName = await getCityName(userLocation[0], userLocation[1])
            dadosClima(cityName, cityName)
            insertInCitys(cityName, "Localização atual")
        }
    }


    async function dadosClima(dataCity: string, cityName: string) {
        setIcone(null)
        if(dataCity){
            let newName = dataCity.replace(/,.*?,/, ',');
            const resultado = await getCurrentClimateData(newName)
            const climateTomorrow = await getTomorrowClimateData(newName)
            setIcone(resultado[0])
            setTemperatura(resultado[1])
            setTemperaturaMax(resultado[2])
            setTemperaturaMin(resultado[3])
            setHumidade(resultado[4])
            setVento(resultado[5])
            setChanceChuva(resultado[6])
            setCidade(cityName)
            setClimateDataTomorrow(climateTomorrow)
        }
    }

    function handleLogout(){
        logout()
        navigation.navigate('Login')
    }
    
    useEffect(() => {
        getUserLocation();  
    }, []);

    useBackHandler(() => {
        BackHandler.exitApp()
        return true
    })

    if (!icone) return <ScreenLoading />
    
    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
        <LinearGradient
        // Background Linear Gradient
        colors={climates[`${icone}`].cor}
        start={{ x: 0, y: 0 }} // Ponto de início (canto superior esquerdo)
        end={{ x: 1, y: 1 }}   // Ponto de fim (canto superior direito)
        style={styles.linearGradient}
        >   
            
                <View style={styles.contentModal}>
                    <TouchableOpacity
                        style={styles.botaoModal}
                        onPress={() => setVisibleModal(true)}
                    >
                        <Image source={iconLocation} style={styles.iconLocalizacao}/>
                        <Text style={styles.localizacao}> {cidade} </Text>
                        <Image source={iconSetaBaixo} style={styles.iconSeta}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleLogout()}
                    >
                        <Text style={styles.localizacao}> Sair </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contentInfos}>

                    <View style={{width: 250, height: 200}}>
                        <LottieView source={climates[`${icone}`].dinamico}
                            autoPlay={true}
                            loop={true}
                        />
                    </View>
                    
                    

                    <Text style={styles.texto}>{temperatureConversion(temperatura)}°C</Text>

                    <Text style={styles.textoPrevisao}>{icone}</Text>

                    <Text style={styles.textoMeio}>Max.: {temperatureConversion(temperaturaMax)}°C   Min.: {temperatureConversion(temperaturaMin)}°C</Text>

                    <Modal
                        visible={visibleModal}
                        transparent={true}
                        onRequestClose={() => setVisibleModal(false)}
                    >
                        <CityModal 
                            climateData={(dataCity: string ,cityName: string) => dadosClima(dataCity, cityName)}
                            handleClose={() => setVisibleModal(false)}
                            />
                    </Modal>
                
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
                </View>
            
        </LinearGradient> 
        </GestureHandlerRootView>        
    )
}