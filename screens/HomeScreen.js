import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState, useRef, useLayoutEffect } from 'react';

// import heroicons: 
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon
} from "react-native-heroicons/outline";

import Categories from '../components/Categories';

import FeaturedRow from '../components/FeaturedRow';


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
    <SafeAreaView className="bg-white pt-5">
     {/* <SafeAreaView> */}
      
      {/* tailwind css working inside react native through className */}        
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
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00ccbb"/>
            </Text>
          </View>

          {/*adding user icon*/}
          <UserIcon size={35} color="#00ccbb"/>  
        </View>      

         {/* SEARCH BAR */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20}/>
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00ccbb"/>    
        </View>


      {/* APP BODY */}
      {/* make the app body scrollable */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}>
          
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />

        {/* Offers near you! */}
        <FeaturedRow
          id="1235"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />

      </ScrollView>

    </SafeAreaView>
  )
}