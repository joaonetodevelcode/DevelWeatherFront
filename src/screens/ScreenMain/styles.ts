
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1 ,
        alignItems: 'center',
    },
    icone: {
        top: '-20%',
        
    },
    texto: {
        marginTop: '90%',
        fontSize: 72,
        color: '#fff',
        fontWeight: 'bold'
    },
    textoMeio: {
        color: '#fff',
        fontSize: 18,
        marginBottom: '5%'
    },
    textoPrevisao: {
        color: '#fff',
        fontSize: 18,
        marginTop: '5%'
    },
    botaoModal: {
        top: '12%',
        flexDirection: 'row',
        height: '4%',
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '5%',
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
    buttonLogout: {
        top: '4%',
        flexDirection: 'row',
        height: '4%',
        alignSelf: 'flex-end',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: '5%'
    },
})
