import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Button 
        title=" Detail Screen..again"
        onPress={() => navigation.push("Details")}
        />
        <Button 
        title=" Home Screen "
        onPress={() => navigation.navigate("Home")}
        />
        <Button 
        title=" Go Back "
        onPress={() => navigation.goBack()}
        />
        <Button 
        title=" First Screen "
        onPress={() => navigation.popToTop()}
        />
      </View>
    );
};

const styles = StyleSheet.create({});

export default DetailsScreen;