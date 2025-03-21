# Hangman Game

## Team A-21

### Project Members Details
| Name                            | Email                                      |
|----------------------------------|--------------------------------------------|
| Gadhe Prajakta Sandip           | prajaktagadhe097@gmail.com                 |
| Devadhe Omkar Shrikant          | omkardevadhe@gmail.com                     |
| Gade Nita Shivaji               | nitagade19@gmail.com                       |
| Ugale Chandrashekhar Bharat     | chandrashekharugale45@gmail.com            |
| Satyajit Markad                 | satyajitmarkad@gmail.com                   |
| Chaitanya Devdhe                | chaitanyadevde@gmail.com                   |
| Bhavani Tirumalasetti           | bhavaniprasad1438@gmail.com                |
---

## Overview

This project consists of a **Hangman game** where players attempt to guess a hidden word by selecting letters. The game provides a user-friendly interface using **HTML**, **CSS**, and **JavaScript**.

---

## File Structure

- **index.html**: Main HTML file containing the game structure.
- **style.css**: Stylesheet for enhancing UI elements.
- **script.js**: JavaScript file handling the game logic.
- **words.js**: Stores a collection of words used in the game, categorized by difficulty levels.

---

## Files and Descriptions

### 1. index.html

#### Description
This HTML file represents the core structure of the game, including the word display, input buttons, and game status.

#### Key Sections:
- **Header**: Displays the game title and instructions.
- **Game Area**: 
  - Shows blank spaces for the word.
  - Displays incorrect guesses.
  - Allows the user to input letters.
- **Keyboard Section**: Interactive on-screen buttons for selecting letters.
- **Game Over Message**: Displays victory or defeat messages.

#### Scripts
- **workingoption.js**: Handles dynamic question and option management.
- **dynamicQuestion.js**: Manages the addition and removal of questions and options.

---

### 2. style.css

#### Description
This CSS file is responsible for styling the game interface.

#### Key Styles:
- **Layout Styling**: Arranges elements such as the game board, keyboard, and word display.
- **Typography**: Styles the font, text color, and button appearances.
- **Animations**: Provides effects like fading out incorrect letters and shaking elements on incorrect guesses.
- **Responsive Design**: Ensures compatibility with mobile and tablet screens.

---

### 3. script.js

#### Description
This JavaScript file handles all game logic, including word selection, player input, and win/loss conditions.

#### Key Functions:
- **startGame()**: Initializes a new game with a new word.
- **selectLetter(letter)**: Handles user letter selection and checks if it's in the word.
- **updateDisplay()**: Updates the UI with correct guesses and remaining attempts.
- **endGame(result)**: Displays a win or lose message and offers to restart.

#### Event Listeners:
- Listens for user interactions with the keyboard (both physical and on-screen).
- Handles game resets and new word selections.

---

### 4. words.js

#### Description
This file contains a collection of words used in the game, categorized by difficulty levels.

#### Key Features:
- Stores a predefined list of words.
- Randomly selects a word for each game session.

---

## Features

1. **Interactive Gameplay**:
   - Clickable on-screen keyboard.
   - Real-time word updates.

2. **Word Selection**:
   - Randomized words from a predefined list.
   - Difficulty levels (Easy, Medium, Hard).

3. **Dynamic Hangman Drawing**:
   - Progressively reveals the Hangman figure as incorrect guesses increase.

4. **Win/Loss Condition**:
   - The game ends when the word is guessed or attempts run out.

5. **User-Friendly UI**:
   - Smooth animations and visual effects.
   - Mobile-friendly responsive design.

---

## Conclusion

The Hangman Game provides an engaging word-guessing experience with a simple and intuitive interface. It utilizes **HTML**, **CSS**, and **JavaScript** for seamless functionality and responsiveness. The project demonstrates fundamental web development principles and can be extended with additional features like a scoring system, multiplayer mode, or AI-based word hints.

---

## Installation

1. Clone the repository:
