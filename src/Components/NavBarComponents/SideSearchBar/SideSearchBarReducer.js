const initialstate = {
	sideBarOpened: true,
	
}

const HomeReducer = (state = initialstate, action) => {
	const { payload, type } = action;


	switch (type) {
		case 'TOGGLE_SIDE_BAR': {
            console.log('what is payload in side bar toggled: ',payload)
			return {
				...state,
				sideBarOpened: payload.status
			}
		}



		default: {
			return state
		}

	}
}

export default HomeReducer
