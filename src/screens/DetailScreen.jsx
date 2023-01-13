import React from "react";

import { View, ScrollView, Text, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.header}>
        <Text style={styles.title}>ランニング</Text>
        <Text style={styles.date}>2022年12月24日 10:00</Text>
      </View>
      {/* ScrollView画面スクロール */}
      <ScrollView style={styles.body}>
        <Text style={styles.text}>
          ランニング 今日は10km走った。 とても疲れた
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: "auto" }}>＋</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  date: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16,
  },
  body: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
