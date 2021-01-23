
let fakeUser = {
    displayName: "WW Start",
    _id: "5f6cca5f9c22f218182ffef0",
    avatarUrl: "https://lh3.googleusercontent.com/a-/AOh14Gi5SCcinlELoG1V8FNmUu6-XDUudrCnR6UOtipk"
}

let newspost1 = {
    _id: "5fe90ff094d1a322e8340454",
    createAt: "2020-10-11T18:02:20.804Z",
    state: "new",
    post: "5fec130cc43fed10a0510f3c",
    comment: "5fec1388a3b7d21b9c791fd5",
    by: fakeUser,
}

let newspost2 = {
    _id: "5fe90ff094d1a322e8340495",
    createAt: "2020-10-11T18:02:20.804Z",
    state: "seen",
    post: "5fec130cc43fed10a0510f3c",
    comment: "5fec1388a3b7d21b9c791fd5",
    by: fakeUser,
}

const initTopnav = {
    home: { href: '/', value: 'Home', name: 'home' },
    friends: {
        href: '#', value: 'Friend', name: 'profile',
        notifications: [1, 2],
    },
    news: {
        href: '#', value: 'News', name: 'News',
        notifications: [
            newspost1, newspost2, newspost1, newspost2,
            newspost1, newspost2, newspost1, newspost2,
            newspost1, newspost2, newspost1, newspost2,
            newspost1, newspost2, newspost1, newspost2,
        ],
    },
};

function topbar(state = initTopnav, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export { topbar };


