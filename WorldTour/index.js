import React from "react";
import { AppRegistry, StyleSheet, Text, View, asset, Pano } from "react-360";

const places = [
  {
    title: "Island Paradise"
  },
  {
    title: "Starry Night"
  },
  {
    title: "Winter Outdoors"
  },
  {
    title: "Light Show"
  }
];

export default class WorldTour extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <View>
        <View style={styles.menuButton} onEnter={() => this.toggleMenu()}>
          <Text style={styles.menuButtonText}>
            {this.state.showMenu ? "Close Menu" : "Open Menu"}
          </Text>
        </View>
        {this.state.showMenu ? (
          <view style={styles.menu}>
            <Text>
              {places.map((place, index) => {
                return (
                  <view style={styles.menuItem} key={index}>
                    <Text style={styles.menuItemText}>{place.title}</Text>
                  </view>
                );
              })}
            </Text>
          </view>
        ) : (
          <view></view>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 50,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    transform: [{ translate: [-2, 0, -7.5] }]
  },
  menuButton: {
    backgroundColor: "#fff",
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 8,
    transform: [{ translate: [-4, 0, -10] }]
  },
  menuButtonText: {
    textAlign: "center",
    fontSize: 12,
    color: "#000"
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 8,
    backgroundColor: "#fff"
  },
  menuItemText: {
    fontSize: 12,
    textAlign: "center",
    color: "#000"
  }
});

AppRegistry.registerComponent("WorldTour", () => WorldTour);
