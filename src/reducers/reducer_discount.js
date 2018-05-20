import { APPLY_DISCOUNT_CODE } from "../actions";

const initialState = {
	total: 108.03,
}

export default function updateTotal(state=initialState, action) {
	switch(action.type) {
		case APPLY_DISCOUNT_CODE:
			const promoCode=action.payload;
			let discount=null;
			if(promoCode === 'DISCOUNT') {
				discount = state.total*10/100;
			}
			return {
				total: state.total - discount
			}

		default:
			return state;
	}
}