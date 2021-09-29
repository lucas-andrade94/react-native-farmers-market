import React from 'react';
import { Image, StyleSheet, View, FlatList } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({ item: { nome, imagem } }) {
  return (
    <View style={estilos.item}>
      <Image source={imagem} style={estilos.imagemItem} />
      <Texto style={estilos.nomeItem}>{nome}</Texto>
    </View>
  );
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    padding: 16,
    alignItems: 'center',
    margin: 16,
  },

  imagemItem: {
    width: 46,
    height: 46,
    marginRight: 12,
  },

  nomeItem: {
    fontSize: 16,
    lineHeight: 26,
    color: '#464646',
  },
});
