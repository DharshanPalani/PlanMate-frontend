import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';

import formStyles from '@/css/FormStyle';
import { loginUser } from '../api/api';

function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const data = await loginUser(username, password);
            localStorage.setItem('token', data.token);
            alert('Login Successful!');

            router.push({ pathname: '/Dashboard', params: { username } });

        } catch (e: any) {
            alert(e.response?.data?.error || 'Login failed');
        }
    };

    return (
        <View style={formStyles.container}>
            <Text style={formStyles.title}>Login</Text>
            <TextInput
                style={formStyles.input}
                placeholder="Email"
                onChangeText={setUsername}
            />
            <TextInput
                style={formStyles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}

export default LoginScreen;
