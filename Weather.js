import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#8e9eab', '#eef2f3'],
        title: 'Haze',
        subTitle: 'Just don`t go outside',
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#e9d362', '#333333'],
        title: 'Thunderstorm',
        subTitle: 'Just don`t go outside',
    },
    Drizzle: {
        iconName: 'water',
        gradient: ['#f2fcfe', '#1c92d2'],
        title: 'Drizzle',
        subTitle: 'Just don`t go outside',
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#4286f4', '#373B44'],
        title: 'Rain',
        subTitle: 'Just don`t go outside',
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#E9E4F0', '#D3CCE3'],
        title: 'Snow',
        subTitle: 'Just don`t go outside',
    },
    Atmosphere: {
        iconName: 'weather-partly-cloudy',
        gradient: ['#e2e2e2', '#C9D6FF'],
        title: 'Atmosphere',
        subTitle: 'Just don`t go outside',
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#fceabb', '#f8b500'],
        title: 'Clear',
        subTitle: 'Just don`t go outside',
    },
    Clouds: {
        iconName: 'cloud',
        gradient: ['#e4e5e6', '#00416A'],
        title: 'Clouds',
        subTitle: 'Just don`t go outside',
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#D7DDE8', '#757F9A'],
        title: 'Mist',
        subTitle: 'Just don`t go outside',
    },
    Smoke: {
        iconName: 'weather-fog',
        gradient: ['#D7DDE8', '#757F9A'],
        title: 'Smoke',
        subTitle: 'Just don`t go outside',
    },
    Dust: {
        iconName: 'weather-cloudy',
        gradient: ['#D7DDE8', '#757F9A'],
        title: 'Dust',
        subTitle: 'Just don`t go outside',
    },
    Fog: {
        iconName: 'weather-cloudy',
        gradient: ['#D7DDE8', '#757F9A'],
        title: 'Fog',
        subTitle: 'Just don`t go outside',
    },
    Sand: {
        iconName: 'weather-windy',
        gradient: ['#FFEEEE', '#DDEFBB'],
        title: 'Sand',
        subTitle: 'Just don`t go outside',
    },
    Ash: {
        iconName: 'weather-windy',
        gradient: ['#FFEEEE', '#DDEFBB'],
        title: 'Ash',
        subTitle: 'Just don`t go outside',
    },
    Squall: {
        iconName: 'weather-windy-variant',
        gradient: ['#6dd5ed', '#2193b0'],
        title: 'Squall',
        subTitle: 'Just don`t go outside',
    },
    Tornado: {
        iconName: 'weather-tornado',
        gradient: ['#2C5364', '#0F2027'],
        title: 'Tornado',
        subTitle: 'Just don`t go outside.',
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName}
                    size={86}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subTitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
        'Haze',
        'Mist',
        'Smoke',
        'Dust',
        'Fog',
        'Sand',
        'Ash',
        'Squall',
        'Tornado',
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 36,
        textAlign: 'center',
        color: 'white',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 36,
        fontWeight: '300',
        marginBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    },
});
