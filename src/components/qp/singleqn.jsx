import React from 'react'




const Singleqn = (props) => {
    return (
        
            <tr>
                <td>{props.index}</td>
                <td className='queItem'>{props.que}</td>
                <td>{"CO"+props.co}</td>
                <td>{props.mark}</td>
            </tr>
        
    )
}

export default Singleqn