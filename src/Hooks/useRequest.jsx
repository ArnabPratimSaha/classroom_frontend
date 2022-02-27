import {useState} from 'react';
import axios from 'axios';
const useRequest=(updateToken)=>{
    const [loading, setLoading] = useState(false);

    const makeRequst = async(url,option)=> {
        setLoading(true);
        try {
            const res=await axios({
                url:url,
                method:option.method||'GET',
                data:option.body,
                cancelToken:option.token,
                params:option.query,
                headers:option.headers,
            })
            setLoading(false);
            const response={
                data:res.data,
                status:res.status,
            }
            if(res.data && res.data.accesstoken){
                updateToken && updateToken(res.data.accesstoken);
            }
            return response;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }
    return [makeRequst,loading]
}
export default useRequest;