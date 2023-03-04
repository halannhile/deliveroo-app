import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard';

const styles = StyleSheet.create({
    text: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: "large",
    },

    icon: {
        color: "#00CCBB",
        marginRight: 10,
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
        marginBottom: 10,
        marginLeft: 10,
    },

    scrollView: {
        paddingTop: 4,
      },

    contentContainer: {
        paddingHorizontal: 15,
      },
  });

export default function FeaturedRow({ id, title, description}) {
  return (
    <View>

        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
            <ArrowRightIcon style={styles.icon}/>
        </View>

        <Text style={styles.text_description}>{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
        >

        {/* Restaurant cards */}

        <RestaurantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            shortDescription="This is a Test description"
            dishes={[]}
            long={20}
            lat={0}
        />

        </ScrollView>

    </View>
    

  )
}