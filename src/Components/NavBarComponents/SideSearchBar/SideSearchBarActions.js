export const toggleSideBar = (status) => {
    return {
        type: 'TOGGLE_SIDE_BAR',
        payload: {
            status
        }
    }
};

