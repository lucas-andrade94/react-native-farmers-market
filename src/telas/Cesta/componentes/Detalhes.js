import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto';
import BotaoComprar from './Botao';

export default function Detalhes({
  nome,
  logoFazenda,
  fazenda,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={estilos.nome}>{nome}</Texto>
      <View style={estilos.fazenda}>
        <Image source={logoFazenda} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>{fazenda}</Texto>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>

      <BotaoComprar botao={botao} />
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },

  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },

  imagemFazenda: {
    width: 32,
    height: 32,
  },

  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
