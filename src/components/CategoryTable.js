import React from 'react';
import { useHistory } from "react-router-dom";

import '../css/categoryTable.css';


const CategoryTable = props => {
    const his = useHistory();

    const onPressCategory = (category) => {
        his.push("/card/"+category);
    }

    return (
        <div>
            {props.data.map(category => {
                return (
                    <div key={category} className="row">
                        <a onClick={() => onPressCategory(category)}>{category}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryTable;