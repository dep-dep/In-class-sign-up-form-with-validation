import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { z } from "zod";

// First name
// Required, 2–30 characters, cannot be only whitespace
// .
// Last name
// Required, 2–30 characters, cannot be only whitespace
// Email
// Required, valid email format, trim whitespace
// Password	Required and must contain at least 8 characters
// Confirm password	Required and must exactly match the password

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 character long")
  .max(50, "Password cannot exceed 50 characters")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/[a-z]/, "Must contain at least one lowercase letter")
  .regex(/[0-9]/, "Must contain at least one lowercase number")
  .regex(/[^A-Za-z0-9]/, "Must contain at least one special character");

const schema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .min(2, "Min length is 2")
      .max(30, "Max character length")
      .regex(/^\S+$/, "First Name cannot contain a space"),
    lastName: z
      .string()
      .min(1, "First name is required")
      .min(2, "Min length is 2")
      .max(30, "Max character length")
      .regex(/^\S+$/, "First Name cannot contain a space"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .regex(/^\S+@\S+\.\S+$/, "Invalid email"),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    const { firstName, lastName, email } = data;
    console.log("Form submitted:", { firstName, lastName, email });
    router.push({
      pathname: "/confirmation",
      params: { firstName },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.fieldGroup}>
        <Text style={styles.label}>First Name</Text>
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName.message}</Text>
        )}
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Last Name</Text>
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName.message}</Text>
        )}
      </View>

      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
      </View>
      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
      </View>
      <View style={styles.fieldGroup}>
        <Text style={styles.label}>Confirm Password</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
        />
        {errors.confirmPassword && (
          <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
        )}
      </View>
      <View style={styles.actions}>
        <Pressable
          style={styles.primaryButton}
          onPress={() => void handleSubmit(onSubmit)()}
        >
          <Text style={styles.primaryButtonText}>Sign Up</Text>
        </Pressable>
        <Pressable style={styles.secondaryButton} onPress={() => reset()}>
          <Text style={styles.secondaryButtonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
    padding: 24,
    marginVertical: 20,
  },
  title: {
    marginBottom: 24,
    color: "#E76814",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 7,
    color: "#714236",
    fontSize: 15,
    fontWeight: "600",
  },
  input: {
    minHeight: 48,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#DC8236",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    color: "#714236",
    fontSize: 16,
  },
  errorText: {
    color: "#891A10",
    marginTop: 6,
    fontSize: 13,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  primaryButton: {
    flex: 1,
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#891A10",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  secondaryButton: {
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderColor: "#B8210F",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },
  secondaryButtonText: {
    color: "#B8210F",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },
});
