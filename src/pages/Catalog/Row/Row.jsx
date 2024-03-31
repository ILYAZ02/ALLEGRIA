import React, { useContext,useEffect } from 'react'
import s from '../Row/Row.module.scss'
import { CustomContext } from '../../../utils/Context'
const Row = () => {
    
    // const {products} = useContext(CustomContext)

    
    return (
        <div className={s.row} >
            {/* {products.map((item) => (
                <div key={item.id}> 
                    <h1>{item.id}</h1>
                    <h1>{item.name}</h1>

                </div>
            ))}
 */}


        </div>
    )
}

export default Row