import React from 'react';
import { View, Text } from 'react-native';
import { Button, Image } from "@gluestack-ui/themed"
import { GlobalStyles } from '../styles/GlobalStyles';
import { useNavigation } from "@react-navigation/native";
const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.titleText}>Home</Text>
            <Image
                size="md"
                borderRadius="$none"
                source={{
                    uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                }}
                alt='unsplash'
            />
            <Button onPress={() => navigation.navigate('Calcular')}>
                <Text>Press me</Text>
            </Button>
        </View>
    );
}

export default Home;