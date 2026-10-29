import { zodResolver } from "@hookform/resolvers/zod";
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
    console.log("Form submitted:", data);
  };

  return (
    <View style={styles.container}>
      <Text>Create Account</Text>
      <View>
        <Text>First Name</Text>
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              //   style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="John"
            />
          )}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName.message}</Text>
        )}
      </View>

      <View>
        <Text>Last Name</Text>
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              //   style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Doe"
            />
          )}
        />
        {errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName.message}</Text>
        )}
      </View>

      <View>
        <Text>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              // style={styles.}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="johndoe@example.ca"
            />
          )}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
      </View>
      <View>
        <Text>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              // style={styles.}
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
      <View>
        <Text>Confirm Password</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              // style={styles.}
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
      <View>
        <Pressable onPress={() => void handleSubmit(onSubmit)()}>
          <Text>Sign Up</Text>
        </Pressable>
        <Pressable onPress={() => reset()}>
          <Text>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  errorText: {
    color: "red",
  },
});
