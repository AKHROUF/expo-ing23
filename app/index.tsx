import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from "expo-image";
import { Link } from "expo-router";
import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import { LOGO_URI, Logo } from "./images";

export default function Index() {
  const [x, setX] = useState(0);
  const [nom, setNom] = useState('visiteur')
  const alert = () => {
    Alert.alert("Gestion RH", "Supprimer cet utilisateur ?", 
      [{ text: "Cancel", }, { text: "OK", onPress:supprimer}]);
  }
  const supprimer = (a?: string)=> {console.log(a);}
  const maj = async() =>{
    const value = await AsyncStorage.getItem('nom_utilisateur');
    setNom(value ?? "visiteur");
    const db = await SQLite.openDatabaseAsync('monapp.db');
    console.log(db);
    const allRows :any = await db.getAllAsync('SELECT * FROM utilisateurs');
    for (const row of allRows) {
      console.log(row);
    }
  }
  useEffect(()=>{ 
    maj();
  },[]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
      <Text>Bienvenue, {nom}</Text>
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
