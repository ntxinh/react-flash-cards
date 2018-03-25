import axios from 'axios'
import { FETCH_CARD_NEXT_TYPE } from '../constants/actionTypes'
import { HOST_API, GET_CARD_NEXT } from '../constants/api'

const receiveCard = card => ({
  type: FETCH_CARD_NEXT_TYPE,
  payload: {
    card
  }
})

export const getCardNext = (id) => dispatch => {
  axios.get(`${HOST_API}${GET_CARD_NEXT}/${id}`)
    .then(response => response.data.content)
    .then(card => {
      if (card) {
        dispatch(receiveCard(card))
      } else {
        // Show warning "This is the last card"
      }
    })
    .catch(error => {
      throw new Error(error)
    })
}
