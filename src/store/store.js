import { observable, action } from 'mobx';

class Store {
    @observable cartLists = [];

    @observable total = 0;

    @observable allChecked = false;

    @observable showModal = false;

    @observable nameVal = '';

    @observable priceVal = 0;

    @observable modalType = true;

    @observable listRow = {};

    @observable rowIndex = null;

    @action
    doDelete = (item) => {
        this.cartLists.remove(item);
        this.getTotal();
    }

    @action
    addNum = (index) => {
        this.cartLists[index].num++;
        this.getSum(index);
        this.getTotal();
    }

    @action
    reduceNum = (index) => {
        if(this.cartLists[index].num<=0) {
            return;
        }
        this.cartLists[index].num--;
        this.getSum(index);
        this.getTotal();
    }

    @action
    checkChange = (index,checked)=> {
        this.cartLists[index].checked = !checked;
        let checksArr = this.cartLists.map(item=> item.checked);
        this.allChecked = checksArr.every(item=> {
            if(item) {
                return true
            }
        })
        this.getTotal()
    } 

    @action
    allCheckChange = () => {
        this.allChecked = !this.allChecked;
        this.cartLists.map(item=> {
            item.checked = this.allChecked;
        })
        this.getTotal();
    }

    @action 
    openModal = (row={},index=null) => {
        this.showModal = true;
        this.listRow = row;
        if(JSON.stringify(this.listRow)!='{}') {
            this.modalType = false;
            this.nameVal = this.listRow.name;
            this.priceVal = this.listRow.price;
        }else{
            this.modalType = true;
        }
        if(index!=null) {
            this.rowIndex = index
        }
        
    }

    @action 
    closeModal = () => {
        this.nameVal = '';
        this.priceVal = 0;
        this.showModal = false;
    }

    @action 
    nameChange = (e) => {
        this.nameVal = e.target.value
    }

    @action 
    priceChange = (e) => {
        this.priceVal = e.target.value
    }

    @action 
    doAddOrEdit = () => {
        if(this.modalType) {
            let ids = this.cartLists.map(item=>item.id);
            let obj = {
                checked: false,
                id: Math.max.apply(null, ids)+1,
                name: this.nameVal,
                price: this.priceVal,
                num: 0,
                singleTotal: 0
            }
            this.cartLists.push(obj);
        }else {
            this.cartLists[this.rowIndex].name = this.nameVal;
            this.cartLists[this.rowIndex].price = this.priceVal;
            this.getSum(this.rowIndex);
            this.getTotal();
        }
        
        this.closeModal();
    }

    @action
    batchDelete() {
        let checkedList = this.cartLists.map(item=> {
            if(item.checked) {
                return item
            }
        })
        for(let i of checkedList) {
            this.doDelete(i)
        }
    }

    getSum = (index) => {
        this.cartLists[index].singleTotal = this.cartLists[index].price*this.cartLists[index].num;
    }

    getTotal = () => {
        let singleTotals = this.cartLists.map(item=> {
            if(item.checked) {
                return item.singleTotal
            }
        }).filter(item=> item!=undefined);
        this.total = singleTotals.length>0 ? singleTotals.reduce((total,num)=>total+num) : 0;
    }
}

export const store = new Store()