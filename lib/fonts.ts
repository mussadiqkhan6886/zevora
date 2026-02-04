import { Instrument_Serif, Roboto } from "next/font/google"

export const serif = Instrument_Serif({
    weight: "400",
    subsets: ["latin"]
})

export const roboto = Roboto({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    style: ["italic", "normal"],
    subsets: ["latin"]
})