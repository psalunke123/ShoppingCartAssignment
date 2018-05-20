
export const APPLY_DISCOUNT_CODE = 'APPLY_DISCOUNT_CODE';

export function applyPromoCode(promoCode=null) {
	return {
		type: APPLY_DISCOUNT_CODE,
		payload: promoCode
	}
}