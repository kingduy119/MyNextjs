const initTopnav = {
    home: { href: '/', value: 'Home', name: 'home' },
    friends: {
        href: '#', value: 'Friend', name: 'profile',
        notifications: [1],
    },
    news: {
        href: '#', value: 'News', name: 'News',
        notifications: [1],
    },

};

function topbar(state = initTopnav, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export { topbar };