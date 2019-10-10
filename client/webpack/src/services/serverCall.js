import axios from 'axios';
class ServerCall{
    static fnGetReg(url){
        return axios.get(url)
    }

    static fnPostReg(url,data){
        return axios.post(url,data)
    }
}

export default ServerCall;