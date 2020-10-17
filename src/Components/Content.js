import React, { useState } from 'react'
import { ItemTypes } from './ItemTypes'
import { useDrop } from 'react-dnd';
import LineChart from '../Charts/LineChart';
import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart';
import RGL, { WidthProvider } from "react-grid-layout";
//  import css -- IMP!!!
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import './Content.css'
const ReactGridLayout = WidthProvider(RGL);
const Content = (props) => {
    const [row, setRow] = useState([])
    const [layout, setLayout] = useState([
        { i: 1, x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 1 },         // *** -- minH & maxH doesnt effect the grid items
        { i: 2, x: 2, y: 0, w: 1, h: 1, minH: 1, maxH: 1 },
        // {i: '3', x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 1},
        // {i: '4', x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 1}
    ])
    const [resizeplotly, setResizePlotly] = useState(false)
    const onLayoutChange = (layout) => {
        setLayout(layout)
    }

    const onResize = (layouts) => {
        console.log(layouts)
        setLayout(layouts)
    };


    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => {

            if (row.length < 4) {
                setRow((old) => {
                    props.change([...old, { name: item.name, id: item.id }])
                    return ([...old, { name: item.name, id: item.id }])
                })

            }
            else {
                alert("Maximum 4 items allowed on a row")
            }

        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });
    return (
        <div>



            <div ref={drop} style={{ maxWidth: "100%", height: "auto" }}>
                <ReactGridLayout

                    compactType={"horizontal"}
                    // rowHeight= {200} 
                    cols={4}
                    onResize={onResize}
                    width={100}
                    layout={layout}
                    onLayoutChange={onLayoutChange}
                    // draggableHandle=".MyDragHandleClassName"
                    draggableCancel=".MyDragCancel"
                    isBounded={true}
                >
                    {row.length !== 0 ? row.map((ele, index) => {
                        console.log(index)
                        return (

                            <div key={index + 1}   >
                                {ele.name === "Line" ? <LineChart factor={index + 1} ></LineChart> :
                                    (ele.name === "Bar" ? <BarChart></BarChart> : <PieChart></PieChart>)
                                }

                            </div>
                        )
                    }) : <div style={{ height: 200 }}></div>}
                </ReactGridLayout>
            </div>





        </div>
    )
}

export default Content