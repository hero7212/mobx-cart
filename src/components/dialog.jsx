import React, { Component } from "react";
import { observer } from "mobx-react";
import { store } from '@/store/store';

export const Dialog = observer((props) => (
    <div className="modal" style={{display:'block',background:'rgba(0,0,0,.7)'}}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{store.modalType ? '新增' : '编辑'}</h5>
                    <button type="button" className="close" onClick={()=>store.closeModal()}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>商品名称</label>
                        <input className="form-control" placeholder="请输入商品名称" defaultValue={store.nameVal} onChange={(e)=>store.nameChange(e)}/>
                    </div>
                    <div className="form-group">
                        <label>商品价格</label>
                        <input type="number" className="form-control" placeholder="请输入商品价格" defaultValue={store.priceVal} onChange={(e)=>store.priceChange(e)}/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={()=>store.doAddOrEdit()}>确定</button>
                    <button type="button" className="btn btn-secondary" onClick={()=>store.closeModal()}>取消</button>
                </div>
            </div>
        </div>
    </div>
));


