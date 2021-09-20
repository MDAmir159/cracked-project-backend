const { query } = require('express');
const db = require('../config/index');

const PromiseModule = {
    affectingDataBase,
    readData
}

function affectingDataBase(sqlQuery , inputValue) {
    return new Promise((resolve , reject) => {
        db.query(sqlQuery , inputValue , (error , result) =>{
            if(error){
                reject(error);
            }
            else{
                resolve(result);
            }
        })   
    })
}

function readData(sqlQuery) {
    return new Promise((resolve,reject) =>{
        db.query(sqlQuery, (error , result) =>{
            if(error){
                reject(error);
            }
            else{
                resolve(result)
            }
        })
    })
}

module.exports = PromiseModule;