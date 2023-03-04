import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    image: {
      height: 100,
      width: 100,
      borderRadius: 10, // 50 will make it a circular image
    },

  });

export default function RestaurantCard({
    // these properties will be coming from the backend:
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    long,
    lat,
}) {
  return (
    <TouchableOpacity>
        <Image
            source={{
                uri: imgUrl,
            }}
            style={styles.image}
        />
    </TouchableOpacity>
  )
}