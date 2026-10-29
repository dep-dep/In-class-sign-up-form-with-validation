import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ConfirmationScreen() {
  const { firstName } = useLocalSearchParams<{ firstName?: string }>();
  const displayName = typeof firstName === "string" ? firstName : "you";

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Account created for {displayName}!</Text>
        <Text style={styles.message}>
          Your form was submitted successfully.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#F3F0E4",
  },
  card: {
    width: "100%",
    maxWidth: 520,
    alignItems: "center",
    padding: 28,
    borderWidth: 1,
    borderColor: "#DC8236",
    borderRadius: 24,
    backgroundColor: "#F3F0E4",
  },
  title: {
    color: "#891A10",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  message: {
    marginTop: 12,
    color: "#714236",
    fontSize: 16,
    textAlign: "center",
  },
});
