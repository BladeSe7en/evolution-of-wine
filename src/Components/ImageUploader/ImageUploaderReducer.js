const initialstate = {
    imageLoading: false,
    imageSucess: false,
    imageError: false
    
}

export default function ImageUploaderReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
        case 'MULTER_UPLOAD_PENDING': {
            console.log('111')
			return {
				...state,
				imageLoading: true
			}
		}

        case 'MULTER_UPLOAD_FULFILLED': {
            console.log('222')

			return {
				...state,
				imageSuccess: true,
                imageLoading: false
			}
		}

		case 'MULTER_UPLOAD_REJECTED': {
			return {
				...state,
				imageLoading: false,
                imageError: true
			}
		}


		default: {
			return state
		}
	}
}
