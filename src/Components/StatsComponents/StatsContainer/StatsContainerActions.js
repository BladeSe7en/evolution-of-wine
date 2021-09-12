import axios from 'axios'

export const addNewSalesData = ( month, productName, totalPriceAtSale, qtySold, user ) => {
    // return {
    //     type: 'ADD_NEW_SALES_DATA',
    //     payload: axios({
    //         method: 'POST',
    //         url: `/api/stats/${month}`,
    //         headers: {
    //             "Authorization": `Bearer ${user.token}`,
    //             "Content-type": "application/json; charset=UTF-8"
    //         },
    //         data: {
    //             dateOfMonth: 'April 2021',
    //             productSold: [
    //                 {
    //                     productName,
    //                     totalPriceAtSale,
    //                     qtySold,
    //                 },
    //             ],
    //         }
    //     })
    //         .then(response => {
    //             console.log('response.data in DELETE ORDER: ', response.data)
    //             return response.data
    //         })
    // }
};