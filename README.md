# 🎥 Movie Search App

A simple React.js application that allows users to search for movies and view detailed information. It uses the OMDB API to fetch movie data and provides an intuitive, responsive user interface.

---

## 🚀 Features

- **Search Movies**: Users can search for movies by title using the OMDB API.
- **Popular Movies**: Displays a list of popular movies by default.
- **Movie Details**: A modal shows detailed information about a selected movie, including:
  - Plot summary
  - Genre
  - IMDb rating
- **Responsive Design**: Fully responsive and works on all screen sizes.

---

## 🛠️ Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js**: [Download and install](https://nodejs.org/).
- **Git**: [Download and install](https://git-scm.com/).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/DeepanshuJangra33233/Movie-Search-App-Prototype.git
   cd movie-search-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   - Obtain an API key from the [OMDB API website](http://www.omdbapi.com/).
   - Create a `.env` file in the root directory and add the following:
     ```env
     REACT_APP_OMDB_API_KEY=your_api_key_here
     ```

4. **Run the Application**:
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

---

## 🧪 How to Use

1. **Default View**:

   - The homepage displays a list of popular movies (default query: "Batman").

2. **Search Movies**:

   - Enter a movie title in the search bar and click the "Search" button.
   - The app will display the search results.

3. **View Details**:
   - Click on a movie from the list to view additional details in a modal.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── MovieCard.js       # Displays individual movie info
│   ├── MovieModal.js      # Modal for showing movie details
│   ├── SearchBar.js       # Search bar component
├── App.js                 # Main app logic
├── index.js               # Entry point
├── styles.css             # App styles
```

---

## 🌟 Features in Development

- **Improved Popular Movies Query**: Replace the default "Batman" query with a trending movies API.
- **Advanced State Management**: Integrate Redux or Zustand for scalable state handling.
- **Pagination**: Add pagination for search results.

---

## 🖥️ Testing the Application

1. **Run Locally**: Start the app and test functionality (search, modal, responsiveness).
2. **API Testing**: Use [Postman](https://www.postman.com/) to verify OMDB API responses.
3. **Responsive Design**: Resize your browser or test on mobile devices.

---

## 🛡️ Notes

- Ensure the API key is properly configured in the `.env` file. The app will not work without it.
- If facing API limits, consider upgrading your OMDB API plan.

---

## 🌐 Deployment

1. **Build the App**:
   ```bash
   npm run build
   ```
2. **Deploy**:
   - Use platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) to host the app.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute.

---

## 📧 Contact

For questions or support, please contact:

- **Name**: Deepanshu Jangra
- **Email**: DeepanshuJangra33233@gmail.com
- **GitHub**: https://github.com/DeepanshuJangra33233/Movie-Search-App-Prototype.git

---
