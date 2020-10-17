import React, { useState } from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

const PlaceHolder = (props) => {
    const [rowCount, setRowCount] = useState(1)
    const [userData, setUserData] = useState({})
    const changeHandler = (index, data) => {
        setUserData({ ...userData, [index]: [...data] })
    }
    const save = () => {
        console.log(userData)
        alert("Find the JSON for the current dashboard design in the console log.")
    }
    return (<div style={{ height: "100%" }}>
        <div style={{ backgroundColor: "black", minWidth: "100%", height: "5%", color: "white", display: "flex", alignItems: "center", padding: "10px 10px 10px 30px", fontWeight: "bold" }}>
            Dashboard Designer
        </div>
        <div style={{ display: "flex", flexDirection: "row", minHeight: "95%" }}>
            <Sidebar></Sidebar>
            <div style={{ flex: 1, margin: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3>My Dashboard</h3>
                    <div style={{ display: "flex", justifyContent: "space-between", width: 200 }}>
                        <button onClick={save} style={{ padding: 20, backgroundColor: "black", color: "white", outline: "none", border: "none", cursor: "pointer" }}>SAVE</button>
                        <button style={{ padding: 20, backgroundColor: "#84DD63", outline: "none", border: "none", cursor: "pointer" }} onClick={() => { setRowCount(rowCount + 1) }} >ADD ROW</button>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {[...Array(rowCount)].map((_, index) => {
                        return (
                            <div key={index} style={{ marginBottom: 10 }}>
                                <Content change={(data) => { changeHandler(index, data) }}></Content>
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    </div>
    )

}


export default PlaceHolder