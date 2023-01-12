/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

// eslint-disable-next-line no-unused-vars
const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeName: function (newName) {
    this.name = newName;
    return this;
  },
  changeVolume: function (newVolume) {
    this.volume = newVolume;
    return this;
  },
  changeColor: function (newColor) {
    this.color = newColor;
    return this;
  },
  changeNumOfPockets: function (newNumOfPockets) {
    this.pocketNum = newNumOfPockets;
    return this;
  },
  changeStrapLength: function (position, newLength) {
    this.strapLength[position] = newLength;
    return this;
  },
};
