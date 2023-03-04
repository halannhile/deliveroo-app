import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  text: {
    // position: 'absolute',
    top: 2,
    bottom: 2,
    left: 1,
    color: 'gray',
    // fontWeight: 'bold',
    fontSize: 13,
  },
});

export default function CategoryCard({imgUrl,title}) {
  return (
    <TouchableOpacity style={{marginRight: 10}}>
        <Image
            source={{
                uri: imgUrl,
            }}
            style={styles.image}
        />
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}