import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function NotFound() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Chemin introuvale</Text>
      <Link href="/" >ACCUEIL</Link>
    </View>
  );
}
