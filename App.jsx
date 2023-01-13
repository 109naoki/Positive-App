import { StyleSheet, View } from "react-native";
import React from "react";
import AppBar from "./src/components/AppBar";
import MemoList from "./src/components/MemoList";
import CircleButton from "./src/components/CircleButton";
export default function App() {
  return (
    <View style={styles.container}>
      {/*  ヘッダー*/}
      <AppBar />
      {/*  */}
      {/* mainエリア */}
      <MemoList />
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