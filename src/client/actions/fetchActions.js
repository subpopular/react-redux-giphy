export function fetchItems(dispatch, getState) {
  dispatch({
    type: 'FETCH_ITEMS'
  });

  fetch('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
    .then(response => {
      response.json().then(json => {
        dispatch({
          type: 'FETCH_ITEMS_SUCCESS',
          payload: json
        });
      });
    });
}
