import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: "large",
    },

    icon: {
        color: "#00CCBB"
    },

    // className="mt-4 flex-row items-center justify-between px-4"
    view: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 4,
      },
    
    text_description: {
        fontSize: 12,
        color: '#828282',
        paddingHorizontal: 4,
    }
  });

export default function FeaturedRow({ id, title, description}) {
  return (
    <View>

        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
            <ArrowRightIcon style={styles.icon}/>
        </View>

        <Text style={styles.text_description}>{description}</Text>

    </View>
    

  )
}