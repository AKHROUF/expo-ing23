import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const send = () => {
    if (!nom || !email || !message) {
      Alert.alert('Erreur', 'Tous les champs sont obligatoires.');
      return;
    }
    Alert.alert('Formulaire envoyé', `Nom : ${nom}\nEmail : ${email}\nMessage : ${message}`);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text >Formulaire de contact</Text>
      <TextInput  placeholder="Nom"     value={nom}     onChangeText={setNom}  />
      <TextInput  placeholder="Email"   value={email}   onChangeText={setEmail} keyboardType="email-address" />
      <TextInput  placeholder="Message" value={message} onChangeText={setMessage} multiline />
      <Button title="Envoyer" onPress={send} />
      <Link href="/page2" >PAGE 2</Link>
    </View>
  );
}
