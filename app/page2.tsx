import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";

export default function Page2() {
  type User = { id: number; name: string; };
  const [liste, setListe] = useState([])
  const recupererListe = async()=> {
    const l = await fetch('https://jsonplaceholder.typicode.com/users')
    setListe(await l.json())
  }
  useEffect(()=>{ recupererListe()}, [])
  const ligne: ListRenderItem<User> = ({ item }) => (
    <View style={{ flexDirection: 'row' }}>
      <Text>{item.id}</Text><Text>{item.name}</Text></View>);

    return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >      
      <Link href="/" >RETOUR</Link>
      <FlatList data={liste} renderItem={ligne} />
    </View>
  );
}
