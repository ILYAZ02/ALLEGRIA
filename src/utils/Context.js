import axios from "axios";
import { createContext, useState } from "react";

export const CustomContext = createContext();


const Context = (props) => {

const [gender,setGender] = useState('women')
const [category,setCategory] = useState('t-short')
const [products, setProducts] = useState({
    data:[],
    error:''
})

const changeGender =(value) => {
    setGender(value)
}
const changeCategory =(value) => {
    setCategory(value)
}

const getProducts = async () =>{
    const res = await axios.get('https://example-data.draftbit.com/products')
    setProducts(res.data)
    
}

    const value = {
        products,
        gender,
        category,
        changeGender,
        changeCategory,
        getProducts
    }



    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}

export default Context