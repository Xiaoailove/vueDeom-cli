import axios from 'axios'
import {REQUESTING,REQUEST_SUCCESS,REQUEST_ERROR} from './mutations_types'
export default {
   async search ({commit},searchName) {
        commit(REQUESTING)
        const url=`https://api.github.com/search/users?q=${searchName}`
              try {
                  const response=await axios(url)
                  const users=response.data.items.map(item=>{
                      return {
                         userName:item.login,
                         url:item.html_url,
                         avatar_url:item.avatar_url
                      }
                  })
                  commit(REQUEST_SUCCESS,users)
              } catch (error) {
                  commit(REQUEST_ERROR,error.message)
              }
    }
}