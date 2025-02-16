import { View, Text, TextInput, Button } from 'react-native';
import React from 'react'

import formStyles from '@/css/FormStyle';

const RegisterScreen = () => {
    return (
        <View style={formStyles.container}>
            <Text style={formStyles.title}>Register</Text>
            <TextInput style={formStyles.input} placeholder="Email" />
            <TextInput style={formStyles.input} placeholder="Password" secureTextEntry />
            <Button title="Register" />
        </View>
    )
}

export default RegisterScreen