import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    linearGradient: {
        flex:1 ,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: Platform.OS === 'android'? 44 : getStatusBarHeight() + 16
    },
    contentModal: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    botaoModal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentInfos: {
        height: "75%",
        width: '100%',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 72,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10
    },
    textoPrevisao: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 5,
       
    },
    textoMeio: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 30
    },
    iconLocalizacao: {
      width: 25,
      height: 25 
    },
    iconSeta: {
        width: 15,
        height: 15 
      },
    localizacao: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    
})
