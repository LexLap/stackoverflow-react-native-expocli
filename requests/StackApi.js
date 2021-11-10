import { Alert } from 'react-native'

const Axios = require('axios')


export default findStackUser = async (userID) => {
    if(userID > 0)
        try {

            console.log('Sending request: ', userID)
            const response = await Axios.get(`https://api.stackexchange.com/2.3/users/${userID.trim()}/questions?order=desc&sort=activity&site=stackoverflow`)

            const userData = {
                user_id: userID,
                name: response.data.items[0]?.owner.display_name,
                reputation: response.data.items[0]?.owner.reputation,
                accept_rate: response.data.items[0]?.owner.accept_rate,
                avatar: response.data.items[0]?.owner.profile_image
            }
            const searchItems = response.data.items

            if(userData.name)
                return {
                    userData,
                    searchItems
                }
            else{
                Alert.alert(
                    'User has no activity', 
                    'Please enter another user id...', 
                    [{ text: 'Okay', style: 'destructive' }]
                )
                return undefined
            } 
            
        } catch (error) {
            console.log(error)
        }
    else return undefined
}