import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
            <View style={formStyles.card}>
                <Text style={formStyles.title}>Login</Text>

                <TextInput
                    style={formStyles.input}
                    placeholder="Username"
                    placeholderTextColor="#888"
                    onChangeText={setUsername}
                    value={username}
                />
                <TextInput
                    style={formStyles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                />

                <TouchableOpacity style={formStyles.button} onPress={handleLogin}>
                    <Text style={formStyles.buttonText}>Login</Text>
                </TouchableOpacity>

                {/* Should add forgot password route later */}
                <TouchableOpacity>
                    <Text style={formStyles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginScreen;
