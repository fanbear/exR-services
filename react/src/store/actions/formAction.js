export const TOGGLE_FORM = 'TOGGLE_FORM';

function toggleModal(toggle) {
	return {
		type: TOGGLE_FORM,
		payload: toggle
	};
}

export { toggleModal };