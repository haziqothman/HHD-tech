export const initialState = {
    basket: [
        // {
        //     id: "12231341",
        //     title: "Razer ManO'War Wireless 7.1 Surround Sound Gaming Headset.",
        //     price: 11.96,
        //     rating: 5,
        //     image: "https://images-na.ssl-images-amazon.com/images/I/71K-OQ0ex7L._AC_SX466_.jpg"
        // },

        // {
        //     id: "12231341",
        //     title: "Razer ManO'War Wireless 7.1 Surround Sound Gaming Headset.",
        //     price: 11.96,
        //     rating: 5,
        //     image: "https://images-na.ssl-images-amazon.com/images/I/71K-OQ0ex7L._AC_SX466_.jpg"
        // },
    ],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `cant remove product (id: ${action.id})as its not in basket!`
                )
            }

            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;