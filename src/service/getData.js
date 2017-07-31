import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'



export const getCardList = () => fetch('/mkt_mock/award/getCardList',{},'POST');


/**
 * 获取用户信息
 */

export const getUser = () => fetch('/v1/user', {user_id: getStore('user_id')});

