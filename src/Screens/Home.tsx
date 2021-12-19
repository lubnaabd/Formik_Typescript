import React, { useState,useEffect } from 'react';
import FormikReact from "../Components/FormikReact"
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../Redux/store";
import { deleteItem, getItemById } from "../Redux/List/action";

const Home = () => {
    const { list: { list } } = useSelector((state: AppState): AppState => state);
    const [isEditing,setIsEditing]=useState<boolean>(false)
    const [listItem,setListItem]=useState<[]>([])

    const dispatch = useDispatch();
    const handleDeleteItem = (id: string) => {
        dispatch(deleteItem(id));
    };
    const handleEditItem = (id: string) => {
        setIsEditing(isEditing =>!isEditing )
        dispatch(getItemById(id));
    };

    return (
        <div className="work_experience">
            <h2>Work Experience</h2>
            <div className="App">
                <div className="list">
                    {list &&
                        list.map(
                            ({ jobTitle, id, startDate, endDate, currentlyWork }) => (
                                <div className="list_item" key={id}>
                                    {jobTitle}
                                    <span className="list_date">
                                        {startDate}
                                        {" - "}
                                        {currentlyWork ? "Recently" : endDate}
                                    </span>
                                    <button onClick={() => handleEditItem(id)} className="edit_item">
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteItem(id)}
                                        className="delete_item"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        )}{" "}
                </div>
                <FormikReact isEditing={isEditing} setIsEditing={setIsEditing}/>
            </div>
        </div>
    );
}

export default Home;
