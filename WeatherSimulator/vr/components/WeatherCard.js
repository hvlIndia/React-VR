import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-vr";

export default class WeatherCard extends Component {
  render() {
    console.log("WeatherCard Props", this.props);

    return (
      <View style={styles.WeatherCard}>
        <Text style={styles.WeatherText}>{this.props.weatherObject.name}</Text>
        <Text style={styles.WeatherText}>
          Current Weather: {this.props.weatherObject.weather[0].description}
        </Text>
        <Text style={styles.WeatherText}>
          Temperature: {this.props.weatherObject.main.temp}°
        </Text>
        <Text style={styles.WeatherText}>
          Wind Speed: {this.props.weatherObject.wind.speed}mph
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  WeatherCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    opacity: 0.8,
    borderRadius: 0.1,
    borderColor: "#000",
    borderWidth: 0.05,
    padding: 0.5,
    layoutOrigin: [-0.5, 0],
    transform: [{ translate: [-3, 0, -7] }],
  },
  WeatherText: {
    color: "#000",
    textAlign: "center",
    fontSize: 0.3,
  },
});
