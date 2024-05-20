import React, { useMemo } from "react";
import { FlatList, View } from "react-native";

import products from "../../../assets/data/products";
import ProductList from "../../components/Products/ProductList";
import { Product } from "../../types/types";
import Header from "../../components/Header/Header";
import ImageCarousel from "../../components/Products/ImageCarousel";
import { styles } from "./styles";

export {
  React,
  useMemo,
  FlatList,
  View,
  products,
  ProductList,
  Product,
  Header,
  ImageCarousel,
  styles,
};
