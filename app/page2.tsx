import { Link } from "expo-router";
import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";

export default function Page2() {
  type User = { id: number; name: string; };
  const [liste, setListe] = useState([])
  const recupererListe = async()=> {
    const l = await fetch('https://jsonplaceholder.typicode.com/users')
    setListe(await l.json())
    const db = await SQLite.openDatabaseAsync('monapp.db');
    db.execSync('CREATE TABLE IF NOT EXISTS utilisateurs (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT);');
    liste.forEach((u:any)=> db.runAsync('INSERT INTO utilisateurs (nom) VALUES (?)', u.name));
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
