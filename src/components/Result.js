import React from "react";
import { useSelector } from "react-redux";
import style from "../css/Color.module.css";
function Result() {
  const groupArr = useSelector((state) => state.color.groupList);
  return (
      <>
      {groupArr?.map((group,i)=>(
        <div key={i} className={style.colorGroup}>
            <p style={{color:'red',fontSize:'50px'}} key={i}>{group.groupName}</p>
            <div key={i} className={style.box}>
            {group.colorArr?.map((item,i)=>(
            <div className={style.colorItem} key={i} style={{backgroundColor:`${item.colorCode}`}}>{item.colorName}</div>
            ))}
            </div>
        </div>
      ))
      }
      </>

  );
}

export default Result;
