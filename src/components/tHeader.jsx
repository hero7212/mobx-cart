import React, { Component } from "react";
import { observer } from "mobx-react";
import { store } from '@/store/store';

export const THeader = observer((props) => (
    <div className="container">
        <div className="row">
            <div className="col-md-1">
                <input type="checkbox" checked={store.allChecked} onChange={()=>store.allCheckChange()}/>
                全选
            </div>
            <div className="col-md-1">序号</div>
            <div className="col-md-2">商品名称</div>
            <div className="col-md-2">商品单价</div>
            <div className="col-md-2">
                选择数量
            </div>
            <div className="col-md-2">小计</div>
            <div className="col-md-2">
                操作
            </div>
        </div>
    </div>

));

