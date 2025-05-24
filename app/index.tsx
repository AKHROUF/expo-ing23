import { Image } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import { LOGO_URI, Logo } from "./images";

export default function Index() {
  const [x, setX] = useState(0);
  const alert = () => {
    Alert.alert("Gestion RH", "Supprimer cet utilisateur ?", 
      [{ text: "Cancel", }, { text: "OK", onPress:supprimer}]);
  }
  const supprimer = (a?: string)=> {console.log(a);}

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
      <Image source={Logo} style={{width:180, height:60}} />
      <Image source={{uri: LOGO_URI}} style={{width:180, height:60}} />
      <Text>Vous avez cliqué { x } fois sur le bouton</Text>
      <Button title="+" onPress={()=>setX(x+1)} />
      <Button title="message" onPress={alert} />
      <Link href="/page2" >PAGE 2</Link>
      <Link href="/(tab)" >PAGE 3</Link>
    </View>
  );
}
