import { Link } from "expo-router";
import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [visible, setVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>AAAAAAAA</Text>
      <Link href="/page2" >PAGE 2</Link>
      <Button title="OK" onPress={() => setVisible(true)} />

      <Modal visible={visible} //transparent={true} 
            onRequestClose={() => setVisible(false)} >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>GeeksforGeeks</Text>
            <Text style={styles.modalText}>How are you!</Text>
            <View style={styles.buttonRow}>
              <Button title="Cancel" onPress={() => setVisible(false)} />
              <Button title="OK" onPress={() => setVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-between",
    width: "100%",
  },
});
