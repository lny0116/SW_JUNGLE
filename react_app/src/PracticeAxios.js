import './PracticeAxios.css'
import api from './Api';
// import axios from 'axios'
import {useState} from 'react'

// const api = axios.create({
//     baseURL: `http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99`
// })

// axios({
//     method: 'get',
//     url: 'http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99',
//     // responseType: 
// }).then(function(res){

// });

// axios.get('http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99')
//     .then(function(res){
//         console.log('들어옴')
//     }).catch(function(err){
//         console.log('error')
//     }).finally(function(){
//         console.log('finally')
//     });

export const login = async (code) => {
    const {data} = await api.post(
        '/auth'
    )
}

function PracticeAxios(){

    // api.get('/').then(res => {
    //     console.log(res.data)
    // })
    
    return(
        <div>hello</div>
    )
}

export default PracticeAxios