import React, { Component } from "react";
import { observer } from "mobx-react";
import { store } from '@/store/store';
import {Count} from './count.jsx'

export const TRow = observer((props) => (
    <div className="row">
        <div className="col-md-1">
            <input type="checkbox" checked={props.row.checked} onChange={()=>store.checkChange(props.index,props.row.checked)}/>
        </div>
        <div className="col-md-1">{props.row.id}</div>
        <div className="col-md-2">{props.row.name}</div>
        <div className="col-md-2">{props.row.price}</div>
        <div className="col-md-2">
        <Count num={props.row.num} index={props.index}/>
        </div>
        <div className="col-md-2">{props.row.singleTotal}</div>
        <div className="col-md-2">
            <button onClick={()=>store.openModal(props.row,props.index)}>编辑</button>
            <button onClick={()=>store.doDelete(props.row)}>删除</button>
        </div>
    </div>
));


