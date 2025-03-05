import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import homeStyle from '@/css/HomeStyle';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.card}>
        <Text style={homeStyle.title}>Welcome</Text>

        <Link href="/Login" asChild>
          <TouchableOpacity style={homeStyle.button}>
            <Text style={homeStyle.buttonText}>Login</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/Register" asChild>
          <TouchableOpacity style={homeStyle.button}>
            <Text style={homeStyle.buttonText}>Register</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default HomeScreen;
