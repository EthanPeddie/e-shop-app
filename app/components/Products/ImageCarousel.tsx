import React, { memo } from "react";
import { View, Image } from "react-native";
import Swiper from "react-native-swiper";

import { styles } from "./imageCarouselStyle";

interface SlideProps {
  uri: string;
}

const images = [
  "https://via.placeholder.com/600x400.png?text=Image+1",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjDjEr9nAX4uIdBDotM_WsFz6mKkYCAFPC71_5we0oBEGD8oG1g-OoYDIF4GuyIBL35Zm81gV8sFJpciQTcdIzVpgJmAfK_vM5NqcapRhSEGxS6_NppPyj3dn7M-y8K0NeKhjfJVm6BxHm/s1600/FIFA+20+ANDROID+V1+_+RILIS+0-23+screenshot.png",
  "https://static1.squarespace.com/static/5a51022ff43b55247f47ccfc/5a567854f9619a96fd6233bb/5b74446c40ec9afbc633e555/1534346950637/Husqvarna+545FR+%282%29.png?format=1500w",
];

const Slide = memo(({ uri }: SlideProps) => (
  <View style={styles.slide}>
    <Image source={{ uri }} style={styles.image} resizeMode="cover" />
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
