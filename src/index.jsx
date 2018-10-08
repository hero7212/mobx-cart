import React,{Component} from 'react';
import { render } from "react-dom";
import { observer } from 'mobx-react';
import { store } from '@/store/store';

import {getCartLists} from '@/api/api.js';

import {THeader} from '@/components/theader.jsx'
import {TBody} from '@/components/tbody.jsx'
import {TFooter} from '@/components/tFooter.jsx'
import {Dialog} from '@/components/dialog.jsx'
import Axios from 'axios';

@observer
export default class CartList extends React.Component {
    componentWillMount() {
        this.getCartListsAsync();
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">
                   <button className="btn btn-info float-left" onClick={()=>store.openModal()}>新增</button> 购物车
                </h1>
                <THeader/>
                <TBody/>
                <TFooter/>
                {
                    store.showModal && <Dialog/>
                }    
            </div>
        );
    }

    getCartListsAsync() {
        Axios.get(getCartLists).then(res=> {
            store.cartLists = res.data
        })
    }
}

render(
    <div>
        <CartList/>
    </div>,
    document.getElementById("root")
);

