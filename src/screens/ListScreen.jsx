import React from "react";

import { View, Text, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import List from "../components/List";

export default function ListScreen() {
  return (
    <View style={styles.container}>
      {/*  ヘッダー*/}
      <AppBar />
      {/*  */}
      {/* mainエリア */}
      <List />
      {/*  */}
      {/* 新規作成ボタン */}
      <CircleButton>＋</CircleButton>
      {/*  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
});
