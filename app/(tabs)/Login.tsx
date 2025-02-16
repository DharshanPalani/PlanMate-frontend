import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';

import formStyles from '@/css/FormStyle';

export default function LoginScreen() {
    return (
        <View style={formStyles.container}>
            <Text style={formStyles.title}>Login</Text>
            <TextInput style={formStyles.input} placeholder="Email" />
            <TextInput style={formStyles.input} placeholder="Password" secureTextEntry />
            <Button title="Login" />
        </View>
    );
}