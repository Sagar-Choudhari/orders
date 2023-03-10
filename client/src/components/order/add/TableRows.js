import React from 'react'

function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {itemName, quantity, rate, color, spec, remark}= data;
            return(

            <tr key={index}>
                <td className="p-2 text-center text-align-center text-bold">{index+1}</td>
                <td className="p-2"><input type="text" value={itemName} onChange={(evnt)=>(handleChange(index, evnt))} name="itemName" className="form-control form-control-sm border-secondary"/></td>
                <td className="p-2"><input type="number" value={quantity}  onChange={(evnt)=>(handleChange(index, evnt))} name="quantity" className="form-control form-control-sm border-secondary"/></td>
                <td className="p-2"><input type="text" value={rate}  onChange={(evnt)=>(handleChange(index, evnt))} name="rate" className="form-control form-control-sm border-secondary"/></td>
                <td className="p-2"><input type="text" value={color} onChange={(evnt)=>(handleChange(index, evnt))} name="color" className="form-control form-control-sm border-secondary"/></td>
                <td className="p-2"><input type="text" value={spec}  onChange={(evnt)=>(handleChange(index, evnt))} name="spec" className="form-control form-control-sm border-secondary"/></td>
                <td className="p-2"><input type="text" value={remark}  onChange={(evnt)=>(handleChange(index, evnt))} name="remark" className="form-control form-control-sm border-secondary"/></td>
                <td className="p-2 text-center"><button type="button" className="btn btn-danger" onClick={()=>(deleteTableRows(index))}>Remove</button></td>
            </tr>

            )
        })
   
    )
    
};

export default TableRows;