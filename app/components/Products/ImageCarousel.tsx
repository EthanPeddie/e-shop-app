import React, { memo } from "react";
import { View } from "react-native";
import { Image } from "expo-image";

import Swiper from "react-native-swiper";

import { styles } from "./imageCarouselStyle";

interface SlideProps {
  uri: string;
}

const images = [
  "https://shorturl.at/SbtbQ",
  "https://shorturl.at/YY4jU",
  "https://rb.gy/gq5qq5",
];

const Slide = memo(({ uri }: SlideProps) => (
  <View style={styles.slide}>
    <Image source={{ uri }} style={styles.image} contentFit="fill" />
  </View>
));

const ImageCarousel = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination
        bounces={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {images.map((image, index) => (
          <Slide key={index} uri={image} />
        ))}
      </Swiper>
    </View>
  );
};

export default memo(ImageCarousel);
