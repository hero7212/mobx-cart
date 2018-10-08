import React, { Component } from "react";
import { observer } from "mobx-react";
import { store } from '@/store/store';
import {TRow} from './tRow.jsx'

export const TBody = observer((props) => (
    <div className="container">
        {
            store.cartLists.map((item,index)=> <TRow key={item.id} row={item} index={index}/>)
        }
    </div>

));

