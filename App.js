import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '7a69d20a60a28ff25c7de09399d93561';

export default class extends React.Component {
    state = {
        isLoading: true,
    };

    getWeather = async (latitude, longitude) => {
        const {
            data: {
                main: { temp },
                weather,
            },
        } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
        );
        this.setState({
            isLoading: false,
            condition: weather[0].main,
            temp,
        });
    };

    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
            // Send to API
        } catch (error) {
            Alert.alert('Can`t find you.', 'So sad');
        }
    };
    componentDidMount() {
        this.getLocation();
    }

    render() {
        const { isLoading, temp, condition } = this.state;
        return isLoading ? (
            <Loading />
        ) : (
            <Weather temp={Math.round(temp)} condition={condition} />
        );
    }
}
