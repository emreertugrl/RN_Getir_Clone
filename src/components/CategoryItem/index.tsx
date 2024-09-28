import { TouchableOpacity, Image, Text, Dimensions } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

type categoryItemProps = {
  item: Category;
};

const index = ({ item }: categoryItemProps) => {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.25,
        height: width * 0.24,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        marginTop: 10,
      }}
    >
      <Image
        source={{
          uri: item.src,
        }}
        style={{
          width: width * 0.18,
          height: width * 0.18,
          borderRadius: 8,
          marginHorizontal: 10,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: "#616161",
          fontWeight: "500",
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default index;

// subCategories: ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"];
