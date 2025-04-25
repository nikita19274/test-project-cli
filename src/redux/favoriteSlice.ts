import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Starship = {
  name: string;
  url: string;
  model: string;
};

type favoritesState = {
  items: Starship[];
};

const initialState: favoritesState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Starship>) => {
      const exist = state.items.some(s => s.url === action.payload.url);
      if (!exist) state.items.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(s => s.url !== action.payload);
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
