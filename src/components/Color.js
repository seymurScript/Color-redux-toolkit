import React, {useRef, useState} from "react";
import style from "../css/Color.module.css";
import { useDispatch,useSelector } from "react-redux";
import {clearList, setGroup, setGroupList} from "../shared/slices/colorSlice";

function Color() {
  const colorArr = useSelector((state)=>state.color.colorList)
  const groupArr = useSelector((state) => state.color.groupList);
  const [isActive, setIsActive]=useState({colorActive:false,groupActive:false})
  const dispatch= useDispatch()
  const nameRef = useRef()
  const codeRef = useRef()
  const groupRef = useRef()
  function checkActive(){
    const colorName =nameRef?.current?.value;
    const colorCode =codeRef?.current?.value;
    const groupName =groupRef?.current?.value;
    if(colorName.length>10|| colorCode.length>10){
      alert('karakter sayısı 8-den fazla olamaz!!!')
      nameRef.current.value = ''
      codeRef.current.value = ''

    };
    
    setIsActive({colorActive:colorName!=='' && colorCode!=='',groupActive:groupName!==''})
  }
  function addColor(){
    const colorCode =codeRef?.current?.value;
    const colorName =nameRef?.current?.value;
    if(colorCode.trim()!==''&& colorName.trim()!==''){
      dispatch(setGroup({colorCode:colorCode, colorName:colorName}))
      codeRef.current.value = ''
      nameRef.current.value = ''
      
    };
    // console.log(colorArr);
    
  }
  
  function addGroup(){
    const groupName =groupRef?.current?.value;
    dispatch(setGroupList({groupName:groupName, colorArr:colorArr}))
    console.log(groupArr);
    groupRef.current.value = ''
    dispatch(clearList())
    
  }
  
  return (
    <>
    <div className={style.setting}>
      <div className={style.colorArea}>
        <input onChange={checkActive} ref={nameRef} className={style.input} placeholder="Color Name" />
        <input onChange={checkActive} ref={codeRef} className={style.input} placeholder="Color Id" />
        <button disabled={!isActive.colorActive} onClick={addColor} className={style.btn} type="button">
          Add Color
        </button>
      </div>
      <div className={style.groupArea}>
        <input
          onChange={checkActive}
          ref={groupRef}
          className={style.input}
          placeholder="Group Name"
        />
        <button onClick={addGroup} disabled={!isActive.groupActive} className={style.btn}  type="btton">
          Add Group
        </button>
      </div>
    </div>
    <div className={style.colorBox}>
    {colorArr?.map((item,index)=>(
      <div className={style.colorItem} key={index} style={{backgroundColor:`${item.colorCode}`}}>{item.colorName}</div>
    ))}
    </div>
    </>
  );
}

export default Color;
