import React, { Component } from "react";
import { observer } from "mobx-react";
import { store } from '@/store/store';

export const TFooter = observer((props) => (
    <div className="container">
        总价：{store.total}
        <button className="btn btn-danger float-right" onClick={()=>store.batchDelete()}>批量删除</button>
    </div>

));

