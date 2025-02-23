import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { registerUser } from '../api/api';
import formStyles from '@/css/FormStyle';

const RegisterScreen = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async () => {
        try {
            const data = await registerUser(username, password);
            alert(data.message);
        } catch (e: any) {
            alert(e.response?.data?.error || "Registration failed");
        }
    };

    return (
        <View style={formStyles.container}>
            <Text style={formStyles.title}>Register</Text>
            <TextInput
                style={formStyles.input}
                placeholder="Username"
                onChangeText={setUserName}
                value={username}
            />
            <TextInput
                style={formStyles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />
            <Button title="Register" onPress={handleRegistration} />
        </View>
    );
};

export default RegisterScreen;
