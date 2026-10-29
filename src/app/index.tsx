import LoginForm from "@/components/login-form";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <LoginForm />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F0E4",
  },
});
