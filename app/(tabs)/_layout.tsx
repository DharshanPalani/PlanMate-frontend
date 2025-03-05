import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="Login" options={{ title: "Welcome back!" }} />
      <Stack.Screen name="Register" options={{ title: "Get started!" }} />
      <Stack.Screen name="Dashboard" options={{ title: "Dashboard" }} />
    </Stack>
  );
}
