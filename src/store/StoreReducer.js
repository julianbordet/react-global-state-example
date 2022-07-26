
const types = {
    authLogin: 'auth - login',
    authLogout: 'auth - logout',
    productDeleteAll: 'product - delete all',
    productChange: 'product - change',
    addProduct: 'product - add'
}

const initialStore = {
    user: {id: 1, name: 'Luis'},
    products: [
        {id: 1, title: 'Product #1'},
        {id: 2, title: 'Product #2'}
    ]
}

const storeReducer = (state, action) =>{

    const productToAdd = {id: 4, title: 'Product 4'}

    let updatedItemList = state.products.concat(productToAdd);
    /*console.log(updatedItemList);*/
    /*
    const addProductHandler = (state) =>{
        state.products.push({id: 4, title: 'Product 4'})
        console.log(state);
        return state
    }
    */

    switch(action.type){
        case types.authLogout:
            return {
                ...state,
                user: null
            }
        case types.authLogin:
            return {
                ...state,
                user: action.payload
            }

        case types.productDeleteAll:
            return {
                ...state,
                products: []
            }
        
        case types.productChange:
            
            return{

                ...state,
                products: [{id: 1, title: 'Updated Product #1'},
                           {id: 2, title: 'Updated Product #2'}]
            }
        
        case types.addProduct:

            let updatedProductList = state.products
            let newProduct = {id: 3, title: 'Product #3'};
            updatedProductList.push(newProduct);

                return{
                   ...state,
                   products: updatedProductList
                }

        default:
            return state;
    }

}


export {initialStore, types}
export default storeReducer;