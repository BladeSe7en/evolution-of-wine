const initialstate = {
    editSuccess  : false,
    editError    : false,
    editLoading  : false,
    uploadedImage: null,
    updateImageSuccess  : false,
    updateImageError    : false,
    updateImageLoading  : false,
}

export default function ProductEditReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
        case 'PRODUCT_UPDATE_PENDING': {
			return {
				...state,
				createLoading: true
			}
		}

        case 'PRODUCT_UPDATE_FULFILLED': {
			return {
				...state,
				createSuccess: true,
                createLoading: false
			}
		}

		case 'PRODUCT_UPDATE_REJECTED': {
			return {
				...state,
				createLoading: false,
                createError: true
			}
		}


        case 'UPDATE_IMAGE_PENDING': {
			return {
				...state,
				updateImageLoading: true
			}
		}

        case 'UPDATE_IMAGE_FULFILLED': {
			return {
				...state,
				updateImageSuccess: true,
                updateImageLoading: false,
                uploadedImage: payload
			}
		}

		case 'UPDATE_IMAGE_REJECTED': {
			return {
				...state,
				updateImageLoading: false,
                updateImageError: true
			}
		}

		default: {
			return state
		}
	}
}
