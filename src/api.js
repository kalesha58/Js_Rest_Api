import axios from 'axios'
// console.log(process.env.REACT_APP_MOON_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      // key:  'AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U',
      key: 'AIzaSyA11Qd3iJD0AtgPbU4NcfgVE8umWVUpA3k',
    //   key: process.env.REACT_APP_MOON_API_KEY,
   },
})

export default request