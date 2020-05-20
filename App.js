import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Keyboard, Text } from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&cnt=10&q=";
  const apiKey = "548c66dc15e6742b23aa17f7ccbdba91";

  const [cidade, setCidade] = useState('');
  const [previsao, setPrevisao] = useState(null);

  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }

  const obtemPrevisoes = () => {
    setPrevisao(null);

    const target = endPoint + cidade + "&appid=" + apiKey;

    fetch(target)
      .then((dados) => dados.json())
      .then((dados) => {
        setPrevisao(dados)
      });

    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>

      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma Cidade"
          onChangeText={capturarCidade}
          value={cidade}
        />

        <Button
          title="Ok"
          onPress={obtemPrevisoes}
        />
      </View>

      <View>
        {previsao && previsao.cod === "200" ? <PrevisaoItem previsao={previsao} /> : <Text></Text>}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  nomeCidade: {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  }
});
