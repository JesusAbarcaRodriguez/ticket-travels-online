import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
    image: string;
}

export const ImageInitialState: ImageState = {
    image: "",
};

type ImageAction = {
    type: string;
    image?: ImageState;
};
export type imageDispatchType = (args: ImageAction) => ImageAction;

export const imageSlice = createSlice({
    name: "image",

    initialState: ImageInitialState,

    reducers: {
        setImages: (state, action: PayloadAction<string>) => {
            return { image: state.image.concat(action.payload) };
        },
    },
});

export const { setImages } = imageSlice.actions;

export const imageReducer = imageSlice.reducer;
