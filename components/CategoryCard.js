import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

// adding imgUrl and title to the inputs of CategoryCard makes it reusable
export default function CategoryCard({ imgUrl, title }) {
  return (
    // create touchable button where the opacity changes (e.g. from black to gray) when we touch
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1  left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};


