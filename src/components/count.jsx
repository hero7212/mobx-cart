import React, { Component } from "react";
import { observer } from "mobx-react";
import { store } from '@/store/store';

export const Count = observer((props) => (
    <div className="count">
        <button onClick={()=>store.addNum(props.index)}>+</button>
        <span>{props.num}</span>
        <button onClick={()=>store.reduceNum(props.index)}>-</button>
    </div>
));


