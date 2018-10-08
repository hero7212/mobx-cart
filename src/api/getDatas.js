import 'babel-polyfill';
import axios from 'axios';

export default async (api)=> {
    const res = await axios.get(api)
    // console.log(res);
    return res.data
}