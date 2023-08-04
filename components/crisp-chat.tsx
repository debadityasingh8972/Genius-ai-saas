"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("02553135-ddbd-4fce-a1d7-9ea571eb5bee");
    }, []);

    return null;
};