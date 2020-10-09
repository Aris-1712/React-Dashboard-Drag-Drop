import React, { useState } from 'react'
import {ItemTypes} from './ItemTypes'
import { useDrop } from 'react-dnd';
import LineChart from './Charts/LineChart';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';

const Content=(props)=>{
    const [row,setRow]=useState([])
    


    const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: (item, monitor) => {
      
            if(row.length<4){
                setRow((old)=>{
                    props.change([...old,{name:item.name,id:item.id}])
                    return([...old,{name:item.name,id:item.id}])})
               
            }
            else{
                alert("Maximum 4 items allowed on a row")
            }
 
        },
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});
    return(
        <div>
           
       
          
                    <div ref={drop} style={{border:"1px dashed black",maxWidth:"100%",height:250,display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                {row.map((ele,index)=>{
                    
                    return(
                    <div key={index} style={{height:"100%"}}>
                        {ele.name==="Line"?<LineChart ></LineChart>:
                        (ele.name==="Bar"?<BarChart></BarChart>:<PieChart></PieChart>)
                        }

                    </div>
                    )
                })}
                </div>
          
         
                
                
          
        </div>
    )
}

export default Content