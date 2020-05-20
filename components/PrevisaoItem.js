import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Cartao from './Cartao'

const PrevisaoItem = (props) => {
    var sunriseInfo = props.previsao.list.find((value) => new Date(value.dt * 1000).getHours() === 3);
    var sunsetInfo = props.previsao.list.find((value) => new Date(value.dt * 1000).getHours() === 15);

    return (
        <>
            <Cartao estilos={estilos.cartao}>
                <View style={estilos.tela}>
                    <Image
                        style={estilos.imagem}
                        source={{
                            uri: "https://openweathermap.org/img/wn/" + sunriseInfo.weather[0].icon + ".png"
                        }}
                    />
                    <View>
                        <View style={estilos.primeiraLinha}>
                            <Text>{new Date(props.previsao.city.sunrise * 1000).toLocaleTimeString()} - Nascer do Sol</Text>
                        </View>

                        <View style={estilos.segundaLinha}>
                            <Text style={estilos.valor}>
                                Sensação Térmica: {sunriseInfo.main.feels_like + "\u00B0"}
                            </Text>
                        </View>
                    </View>
                </View>
            </Cartao>
            <Cartao estilos={estilos.cartao}>
                <View style={estilos.tela}>
                    <Image
                        style={estilos.imagem}
                        source={{
                            uri: "https://openweathermap.org/img/wn/" + sunsetInfo.weather[0].icon + ".png"
                        }}
                    />
                    <View>
                        <View style={estilos.primeiraLinha}>
                            <Text>{new Date(props.previsao.city.sunset * 1000).toLocaleTimeString()} - Pôr do Sol</Text>
                        </View>

                        <View style={estilos.segundaLinha}>
                            <Text style={estilos.valor}>
                                Sensação Térmica: {sunsetInfo.main.feels_like + "\u00B0"}
                            </Text>
                        </View>
                    </View>
                </View>
            </Cartao>
        </>
    );
}

const estilos = StyleSheet.create({
    cartao: {
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    }
});

export default PrevisaoItem;
