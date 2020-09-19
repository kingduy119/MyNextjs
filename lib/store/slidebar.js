import React from "react";

export const SLIDEBAR_SELECT = "SLIDEBAR_SELECT";

/**
 * Actions
 */
export const onSlidebarSelect = (tab) => ({
    type: SLIDEBAR_SELECT,
    tab: tab,
    links: [
        { href: "/react/index", text: "Index" },
        { href: "/react/intro", text: "Intro" }
    ]
})

/**
 * Reducer
 */
export function slidebar(state = "/", action) {
    switch (action.type) {
        case SLIDEBAR_SELECT:
            return action.tab;
        default:
            return state;
    }
}
