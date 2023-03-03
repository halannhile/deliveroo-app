import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    // Horizontal Scroll View for Category Cards Tab
    <ScrollView 
      contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>

    {/* Category Cards */}
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"/>
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"/>
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"/>

    </ScrollView>
    
  )
}

