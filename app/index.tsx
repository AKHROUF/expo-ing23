import { Link } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [x, setX] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Vous avez cliqué { x } fois</Text>
      <Button title="+" onPress={()=>setX(x+1)} />
      <Link href="/page2" >PAGE 2</Link>
    </View>
  );
}
