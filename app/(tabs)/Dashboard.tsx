import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import formStyles from '@/css/FormStyle';

export default function Dashboard() {
    const { username } = useLocalSearchParams();

    return (
        <View style={formStyles.container}>
            <Text style={formStyles.title}>Welcome, {username}!</Text>
        </View>
    );
}
