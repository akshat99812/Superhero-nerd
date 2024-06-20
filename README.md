# Superhero-Nerd

Welcome to the Superhero Abilities Explorer! This project is built with Next.js and provides a comprehensive list of over 1000 superheroes along with their abilities. Whether you're a superhero enthusiast or a developer looking for a cool dataset to play with, this project is for you.

## Features

- **List of Superheroes**: Explore a vast collection of superheroes.
- **Detailed Abilities**: View detailed abilities for each superhero.
- **Responsive Design**: Optimized for both desktop and mobile viewing.
- **Fast Performance**: Leveraging Next.js's server-side rendering for fast load times.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for production.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [CSS Modules](https://github.com/css-modules/css-modules): For scoped and maintainable CSS.
- [Superhero API](https://superheroapi.com/): API to fetch superhero data.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js (>=12.0.0)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/superhero-abilities-explorer.git
    cd superhero-abilities-explorer
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env.local` file in the root of the project and add your Superhero API key:
    ```env
    NEXT_PUBLIC_SUPERHERO_API_KEY=your_api_key
    ```

4. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Project Structure
.
├── components
│ ├── HeroCard.js
│ └── ...
├── pages
│ ├── index.js
│ ├── _app.js
│ └── ...
├── public
│ └── images
├── styles
│ ├── globals.css
│ └── ...
├── .env.local
├── package.json
└── ...


- **components/**: Contains the React components.
- **pages/**: Contains the Next.js pages.
- **public/**: Contains static assets such as images.
- **styles/**: Contains global and component-specific styles.

## Usage

1. **Browse Superheroes**: The homepage lists all available superheroes. Use the search bar to find specific heroes.
2. **View Abilities**: Click on any superhero to view detailed information about their abilities.
3. **Responsive Design**: Enjoy the app on both desktop and mobile devices.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [Superhero API](https://superheroapi.com/) for providing the data.
- [Next.js](https://nextjs.org/) for the awesome framework.
- [React](https://reactjs.org/) for making UI development a breeze.

---

Feel free to explore and contribute to the Superhero Abilities Explorer project. Happy coding!


