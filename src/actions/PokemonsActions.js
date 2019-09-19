export const loadPokemons = () => {
    return function (dispatch) {        
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then((serverRespond) => serverRespond.json())
            .then((pokemonsFromServer) => {
                dispatch({
                    type: 'LOAD_POKEMONS',
                    pokemons: pokemonsFromServer
                })           
            })
    }
}

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items.results)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}