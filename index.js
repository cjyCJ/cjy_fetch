/*
 * @Author: chenjianying
 * @Date: 2020-08-25 15:51:36
 * @LastEditTime: 2020-08-25 16:39:54
 * @FilePath: \npm_modules\index.js
 */
const fetch = require('node-fetch')

module.exports.get = async url => {
    // console.log(url)
    const response = await fetch(url)
    const resData = await response.json()
    return resData
}

// post
module.exports.post = async(url, data) => {
        // console.log(url)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json()
        return resData
    }
    // put
module.exports.put = async(url, data) => {
        // console.log(url)
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json()
        return resData
    }
    // delete
module.exports.delete = async url => {
    // console.log(url)
    await fetch(url, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json"
        }
    })
    const resData = await 'delete success'
    return resData
}