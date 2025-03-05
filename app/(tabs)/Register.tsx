import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { registerUser } from '../api/api';
import formStyles from '@/css/FormStyle';

const RegisterScreen = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegistration = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const data = await registerUser(username, password);
            alert(data.message);
        } catch (e: any) {
            alert(e.response?.data?.error || "Registration failed");
        }
    };

    return (
        <View style={formStyles.container}>
            <View style={formStyles.card}>
                <Text style={formStyles.title}>Sign Up</Text>

                <TextInput
                    style={formStyles.input}
                    placeholder="Username"
                    placeholderTextColor="#888"
                    onChangeText={setUserName}
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
                <TextInput
                    style={formStyles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#888"
                    secureTextEntry
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                />

                <TouchableOpacity style={formStyles.button} onPress={handleRegistration}>
                    <Text style={formStyles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterScreen;
