import axios from 'axios'
// export const addFav = (character) => {
//         return {
//             type: "ADD_FAV",
//             payload: character
//      }
// }
// ACTION | addFav
export const addFav = (character) => {
   //  const endpoint = 'http://localhost:3001/rickandmorty/fav';
   //  return (dispatch) => {
   //     axios.post(endpoint, character).then(({ data }) => {
   //        return dispatch({
   //           type: 'ADD_FAV',
   //           payload: data,
   //        });
   //     });
   //  };
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character) 
         return dispatch({
            type: 'ADD_FAV',
            payload: data
         })
      } catch (error) {
         console.log(error)
      }
   }
   

 };

// export const removeFav = (id) => {
//     return {
//         type: "REMOVE_FAV",
//         payload: id
//  }
// }
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      //  axios.delete(endpoint).then(({ data }) => {
      //     return dispatch({
      //        type: 'REMOVE_FAV',
      //        payload: data,
      //  });
      //  });
       try {
          const { data } = await axios.delete(endpoint) 
          return dispatch({
                  type: 'REMOVE_FAV',
                    payload: data,
              });
            
       } catch (error) {
         console.log(error)
       }
    };
 };

