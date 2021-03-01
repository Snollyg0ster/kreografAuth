export const actions = {
  DATA_REQUEST: 'DATA_REQUEST',
  DATA_SUCCESS: 'DATA_SUCCESS',
};

export const dataRequest = () => ({
  type: actions.DATA_REQUEST,
});

export const dataSuccess = ({data}) => ({
  type: actions.DATA_SUCCESS,
  data,
});
