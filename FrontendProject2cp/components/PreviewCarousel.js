import React from "react";
import { View, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
  screenHeight,
} from "./CarouselCardItem";
import { useFonts } from "expo-font";
import Fonts from "./Fonts";

const PreviewCarousel = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  
  const data = [
    {
      title: "Full Control For Your Smart Home",
      body: "Control your smart home easier with our better features",
      imageKey: "image1",
      buttonText: "Next",
      onPressNext: () => isCarousel.current.snapToNext(),
    },
    {
      title: "Full Control For Your living room",
      body: "Control your smart home easier with our better features",
      imageKey: "image2",
      buttonText: "Next",
      onPressNext: () => isCarousel.current.snapToNext(),
    },
    {
      title: "Full Control For Your kitchen",
      body: "Control your smart home easier with our better features",
      imageKey: "image3",
      buttonText: "Start",
      onPressNext: () => navigation.navigate("Auth screen"),
    },
  ];

  return (
    <View>
      <Carousel
        layout="stack"
        layoutCardOffset={20}
        ref={isCarousel}
        data={data}
        renderItem={({ item, index }) => (
          <CarouselCardItem item={item} index={index} navigation={navigation} onPressNext={item.onPressNext}/>
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        sliderHeight={screenHeight}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={false}
        activeAnimationType="spring"
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 13,
          height: 13,
          borderRadius: 15,
          borderWidth: 1, 
          borderColor: "white", 
          backgroundColor: "white", 
          marginHorizontal: 3,
        }}
        dotContainerStyle={{
          marginHorizontal: 5, 
        }}
        containerStyle={{
          position: "absolute",
          bottom: "37%", 
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default PreviewCarousel;
