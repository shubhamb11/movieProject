import { ADD_TO_CART, FILTER_CATEGORY, REMOVE_PRODUCT, DECREASE_QUANTITY } from '../actions/actionTypes'

let data = [{ "Title": "Sherlock", "Year": "2010", "imdbID": "tt1475582", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg" }, { "Title": "Sherlock Holmes", "Year": "2009", "imdbID": "tt0988045", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_SX300.jpg" }, { "Title": "Sherlock Holmes: A Game of Shadows", "Year": "2011", "imdbID": "tt1515091", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg" }, { "Title": "Sherlock Jr.", "Year": "1924", "imdbID": "tt0015324", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZWFhOGU5NDctY2Q3YS00Y2VlLWI1NzEtZmIwY2ZiZjY4OTA2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg" }, { "Title": "The Adventures of Sherlock Holmes", "Year": "1984–1985", "imdbID": "tt0086661", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BMTI2MzM1Njk4OV5BMl5BanBnXkFtZTcwMzA0ODQyMQ@@._V1_SX300.jpg" }, { "Title": "Young Sherlock Holmes", "Year": "1985", "imdbID": "tt0090357", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNmE0NTQ5ZjItN2MzNC00NjBhLTg0ZjYtYzFiMzFlMjhjNmNiXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg" }, { "Title": "The Private Life of Sherlock Holmes", "Year": "1970", "imdbID": "tt0066249", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNTg2ODQyOGQtNWVhMi00MDI2LTg3OTktZjA4MTJmYzQwYTFjXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" }, { "Title": "Sherlock Gnomes", "Year": "2018", "imdbID": "tt2296777", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTc2NjUzODMxMF5BMl5BanBnXkFtZTgwMzMwMDIzNDM@._V1_SX300.jpg" }, { "Title": "The Return of Sherlock Holmes", "Year": "1986–1988", "imdbID": "tt0090509", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BMjM1OTc0MjMtZjFmOS00ZmQ0LTk1ZWItM2U1YTc5ODZjZjI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg" }, { "Title": "The Adventure of Sherlock Holmes' Smarter Brother", "Year": "1975", "imdbID": "tt0072608", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTgzMDkyMDE3NF5BMl5BanBnXkFtZTcwMzAyNzIzMQ@@._V1_SX300.jpg" }];

data = data.map(item => ({ ...item, price: 150 }));

const initState = {
    items: data,
    addedItems: [],
    total: 0,
    categorySelected: "all"
};

const reducer = (state = initState, action) => {
    let addedItem, existedItem, addedItems;
    switch (action.type) {
        case ADD_TO_CART:
            addedItem = state.items.find(item => item.imdbID === action.id);
            existedItem = state.addedItems.find(item => item.imdbID === action.id);
            if (existedItem) {
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addedItem.price
                };
            }
            else {
                addedItem.quantity = 1
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: state.total + addedItem.price
                };
            }
        case FILTER_CATEGORY:
            return {
                ...state,
                categorySelected: action.cat
            };
        case REMOVE_PRODUCT:
            existedItem = state.addedItems.find(item => item.imdbID === action.id)
            addedItems = state.addedItems.filter(item => item.imdbID !== action.id);

            return {
                ...state,
                addedItems,
                total: state.total - (existedItem.quantity * existedItem.price)
            }
        case DECREASE_QUANTITY:
            existedItem = state.addedItems.find(item => item.imdbID === action.id)
            console.log(existedItem);

            if (existedItem.quantity === 1) {
                addedItems = state.addedItems.filter(item => item.imdbID !== action.id);
                return {
                    ...state,
                    addedItems,
                    total: state.total - existedItem.price
                }
            }
            else {
                // existedItem
                existedItem.quantity -= 1
                return {
                    ...state,
                    total: state.total - existedItem.price
                }
            }


        default:
            return state;
    }


}

export default reducer;
