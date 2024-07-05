import React from 'react';
import {configureStore} from "@reduxjs/toolkit";
import slice from "./Slice";

export const store = configureStore({
    reducer: {
        api: slice,
    },
})