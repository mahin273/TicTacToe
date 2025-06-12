# React Tic-Tac-Toe (Built with Vite)

This project is a classic Tic-Tac-Toe game built with React and powered by Vite. It's a foundational project, often based on the official React tutorial, designed to teach and demonstrate the core concepts of the library in a practical way.

The application allows two players to take turns marking squares in a 3x3 grid. The game declares a winner when one player gets three marks in a row, column, or diagonal, and indicates the current player's turn.

## ✨ Features

- **Interactive 3x3 Grid:** A fully clickable game board.
- **State Management:** Tracks the value of each square and the current player's turn.
- **Turn-Based Gameplay:** Alternates between 'X' and 'O' players.
- **Winner Detection:** Automatically detects when a player has won the game.
- **Game Status Display:** Shows who the next player is or announces the winner.
- **Prevents Invalid Moves:** A square that is already filled cannot be clicked again. The game also stops once a winner is declared.

## 🚀 Tech Stack

- **Vite:** A next-generation frontend build tool that provides an extremely fast development server and build process.
- **React:** A JavaScript library for building user interfaces.
- **JavaScript (ES6+):** Modern JavaScript syntax.
- **CSS:** Basic styling for the game board and components.

## 🎓 Core React Concepts Demonstrated

This project is an excellent showcase of fundamental React principles:

- **Components and Props:** The application is broken down into reusable components (`Board`, `Square`). The parent `Board` component passes data down to its child `Square` components via `props` (like `value` and `onSquareClick`).

- **State Management (`useState` hook):** The `useState` hook is used in the `Board` component to manage the game's state, including the `squares` array (representing the board) and the `xIsNext` boolean (to track whose turn it is).

- **Lifting State Up:** A key architectural pattern where state is "lifted up" to the closest common ancestor. Instead of each `Square` managing its own state, the parent `Board` component manages it all, allowing it to determine the winner.

- **Controlled Components:** The `Square` components are "controlled" by the `Board` component. They receive their value and behavior from their parent via props.

- **Event Handling:** The `onClick` event on the `Square` component's button triggers a function passed down from the `Board`, which updates the game's state.

- **Immutability:** State is updated immutably. Instead of modifying the `squares` array directly, a copy is created using `.slice()`. This is crucial for React's change detection and makes state history easier to manage.

- **Conditional Rendering:** The UI renders differently based on the current state. The status message changes to show the "Next player" or the "Winner," and each `Square` displays an "X," "O," or is left blank.

## 📦 How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have **Node.js** (v16.x or higher) and `npm` (or `yarn`) installed on your machine.

### Setup and Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/mahin273/TicTacToe.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```
3.  **Install the dependencies:**
    ```sh
    npm install
    ```
    _(or if you use yarn: `yarn install`)_

### Running the Development Server

To start the local development server:

```sh
npm run dev
```

_(or if you use yarn: `yarn dev`)_

This will start the Vite dev server with Hot Module Replacement (HMR). Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the application in your browser. The page will update instantly when you make edits to the code.

---
