import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import InputFieldText from '../../utils/CommonComponents/InputFieldText'
import { useDispatch, useSelector } from 'react-redux'
import { updateACategoryInputValue } from '../../features/categorySlice';
import CustomButton from '../../utils/CommonComponents/CustomButton';
import { httpCall } from '../../utils/service';
import { constants } from '../../utils/constants';

export default function AddNewCategory() {
  const {categoryInputValue} = useSelector(state => state.category)

    const handleClick = async () => {
        const payload = await {
    "course_category_id":uuidv4(),
    "category_name":categoryInputValue
}

        const data = await httpCall(constants.apiEndPoint.CATEGORY_LIST, constants.apiHeaders.HEADER, constants.httpMethod.POST, payload);
        console.log(data)
        if (data.status === "success") {
            alert(data.data.message)
        } else {
            alert('Something Went wrong . Please try again')
        }
    }
    const dispatch = useDispatch();
  return (
    <div className="container-fluid">
          <div className="row clearfix">
    <div className="col-lg-12">
      <div className="card">
        <div className="header">
          <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
         
        </div>
        <div className="body">
          <div className="row clearfix">
            <div className="col-sm-12" style={{display:'flex'}}>
              
                                  <InputFieldText placeholder={'Category Name'} inputType={'text'} onChange={(e) => dispatch(updateACategoryInputValue({ data: e.target.value }))} />
                                  <CustomButton lable={'Add New Category'} isDisabled={false} onClick={() => handleClick()} />
            </div>
           
          </div>
          
        </div>
      </div>
    </div>
          </div>
        </div>
  )
}
