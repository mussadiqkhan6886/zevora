import { Instrument_Serif, Roboto, Lavishly_Yours, Cormorant_Garamond } from "next/font/google"

export const serif = Cormorant_Garamond({
    weight: "400",
    subsets: ["latin"]
})

export const lavish = Lavishly_Yours({
    weight: "400",
    subsets: ["latin"]
})

export const roboto = Roboto({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    style: ["italic", "normal"],
    subsets: ["latin"]
})