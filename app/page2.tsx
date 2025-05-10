import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page2() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>PAGE 2</Text>
      <Link href="/" >RETOUR</Link>
    </View>
  );
}
