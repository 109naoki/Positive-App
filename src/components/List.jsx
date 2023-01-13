import { Feather } from "@expo/vector-icons";
import React from "react";

import { View, Text, StyleSheet } from "react-native";

export default function List() {
  return (
    <View>
      <View style={styles.ListItem}>
        <View>
          {/* main左側 */}
          <Text style={styles.ListItemTitle}>ランニング</Text>
          <Text style={styles.ListItemDate}>2023年1月10日</Text>
          {/*  */}
        </View>
        <View>
          {/* main右側 */}
          <Feather name="x" size={16} color="#B0B0B0" />
          {/*  */}
        </View>
      </View>
      <View style={styles.ListItem}>
        <View>
          {/* main左側 */}
          <Text style={styles.ListItemTitle}>ランニング</Text>
          <Text style={styles.ListItemDate}>2023年1月10日</Text>
          {/*  */}
        </View>
        <View>
          {/* main右側 */}
          <Feather name="x" size={16} color="#B0B0B0" />
          {/*  */}
        </View>
      </View>
      <View style={styles.ListItem}>
        <View>
          {/* main左側 */}
          <Text style={styles.ListItemTitle}>ランニング</Text>
          <Text style={styles.ListItemDate}>2023年1月10日</Text>
          {/*  */}
        </View>
        <View>
          {/* main右側 */}
          <Feather name="x" size={16} color="#B0B0B0" />
          {/*  */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  ListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  ListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#B48484",
  },
});
