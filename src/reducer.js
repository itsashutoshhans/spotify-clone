export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // remove the token after development
  token: "BQBtAkqnFRKcL_5P_qPDxGbMxqGhtnrTCixCDXbIQqr7mGJdw3gw0OKUmj5qjypH9k2yR_JQXt3lW5KKVy3ymUkhaYKC7PlGb3C-xWCzn521byddUdX00mbz2yOF7b3Yum8PKsP87Y9YGXQzvJypI9xs76z90Wq0CC9JyWsvFJqP1cBX"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  };
}

export default reducer;

