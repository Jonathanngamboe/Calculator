# React Native Calculator App

## Overview

This is a simple calculator application built with React Native. It mimics the design and functionality of the iOS calculator, providing basic arithmetic operations and a clean user interface.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Percentage calculation
- Sign change (+/-)
- Decimal point support
- Clear function (AC)
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12 or later)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (for testing)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Jonathanngamboe/calculator.git
   ```

2. Navigate to the project directory:
   ```
   cd calculator
   ```

3. Install the dependencies:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn install
   ```

## Running the App

To start the application, run the following command in the project directory:

```
expo start
```

This will open the Expo DevTools in your browser. From here, you can run the app on an iOS Simulator, Android Emulator, or on your physical device by scanning the QR code with the Expo Go app.

## Project Structure

- `App.js`: The main component containing the calculator logic and UI
- `components/common/RoundButton.js`: A reusable component for the calculator buttons

## How It Works

The calculator uses React's state management to keep track of inputs and perform calculations. Here's a brief overview of the main components:

- `displayValue`: Represents the current value displayed on the calculator screen
- `inputs`: An array that stores the sequence of numbers and operations entered by the user
- `waitingForOperand`: A boolean flag to manage the state between entering operators and operands

The `handleInput` function manages all user inputs, updating the state accordingly. The `calculate` function performs the arithmetic operations when the user presses the equals (=) button.

## Acknowledgements

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)