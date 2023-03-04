import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { MapPinIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid'

const styles = StyleSheet.create({
    touchable_view: {
        backgroundColor: 'white',
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 1,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 1.41,
        elevation: 2,
        marginRight: 20,
        paddingBottom: 4,
      },

    image: {
      height: 120,
      width: 200,
    //   borderRadius: 10, // 50 will make it a circular image
    },

    text_title: {
        fontWeight: 'bold',
        fontSize: 12,
        paddingTop: 6,
    },

    view_text: {
        paddingHorizontal: 4,
        paddingBottom: 4,
    },

    view_rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 4,
    }, 
    
    text_rating: {
        color: 'rgba(96, 165, 64, 1)',
    }, 

    text_rating_genre: {
        fontSize: 11,
        color: 'rgba(156, 163, 175, 1)',
    },

    text_address: {
        fontSize: 11,
        color: 'rgba(156, 163, 175, 1)',
    }, 

    view_address: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 1,
    }

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
    <TouchableOpacity style={styles.touchable_view}>

        <Image
            source={{
                uri: imgUrl,
            }}
            style={styles.image}
        />


        <View style={styles.view_text}>
            <Text style={styles.text_title}>{title}</Text>
        </View>


        <View style={styles.view_rating}>
            <StarIcon color="green" opacity={0.5} size={20}/>
            <Text style={styles.text_rating_genre}>
                <Text style={styles.text_rating}>{rating}</Text> . {genre} 
            </Text>    
        </View>

        <View style={styles.view_address}>
            <MapPinIcon color="gray" opacity={0.4} size={20}/>
            <Text style={styles.text_address}>Nearby . {address} </Text>
        </View>

    </TouchableOpacity>
  )
}