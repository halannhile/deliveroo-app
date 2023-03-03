import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState, useRef, useLayoutEffect } from 'react';

// import heroicons: 
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentIcon,
} from "react-native-heroicons/outline";

export default function HomeScreen() {
  
  // create a navigation hook to give access to the navigation object: 
  const navigation = useNavigation();

  // as soon as the screen appears, do something: 
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "Testing",
      headerShown: false,
    })
  }, [])

  return (
    // <SafeAreaView className="bg-white pt-2">
    <SafeAreaView>
      
      {/* tailwind css working inside react native through className */}
      <Text className="text-red-500">
        
        {/* Header */}
        {/* padding on the bottom is 3, items centrally aligned, margin 4 on the x axis, space between x components is 2 */}
        <View className ="flex-row pb-3 items-center mx-4 space-x-2">
          
          {/* 1st view: create a View for the icon */}
          <Image
              source={{
                uri: 'https://links.papareact.com/wru'
              }}
              // height, width, background color, padding and shape of image
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          {/* 2nd view: create another view inside this view */}
          {/* "flex-1" means this view will take up all the space, pushing the user icon to the right */}
          <View className="flex-1">
            {/* text-xs and text-xl means extra-small and extra-large texts */}
            <Text className="font=bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="#00ccbb"/>
            </Text>
          </View>

          {/*adding user icon*/}
          <UserIcon size={35} color="#00ccbb"/>  

        </View>       
      </Text>
    </SafeAreaView>
  )
}