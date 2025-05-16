import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack >
      <Stack.Screen name="index" options={{title:'ACCUEIL'}} />
      <Stack.Screen name="page2" options={{title:'AJOUTER CLIENT'}} />

      <Stack.Screen name="(tab)" options={{headerShown:false}} />

      <Stack.Screen name="+not-found" options={{title:'PAGE INTROUVABLE'}} />
    </Stack>;
}
