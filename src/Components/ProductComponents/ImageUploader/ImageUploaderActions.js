import axios from 'axios'

export const multerUpload = (formData, user) => {
    console.log('in multerUpload action-- file: ',formData)
    return {
        type: 'MULTER_UPLOAD',
        payload: axios({
            method: 'post',
            url: `/api/uploads/multer`,
            data: formData,
            headers: {
                "Authorization": `Bearer ${user.token}`
            },
        })
            .then(response => {
                console.log('response.data in imageUploader: ',response.data)
                if (response.data.success) {
                    console.log('sessess!')
                }
                return response.data
            })
    }
};