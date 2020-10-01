export const initialState = {
    basket: [
        {
            id: "12231341",
            title: "Razer ManO'War Wireless 7.1 Surround Sound Gaming Headset.",
            price: 11.96,
            rating: 5,
            image: "https://images-na.ssl-images-amazon.com/images/I/71K-OQ0ex7L._AC_SX466_.jpg"
        },
    ],
    user: null,
};

const reducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            return (state)
        default:
            return state;
    }
}

export default reducer;