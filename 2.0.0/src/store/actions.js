export const SAVE_CORONAMAP = "SAVE_CORONAMAP";
export const SAVE_KOREA = "SAVE_KOREA";
export const SAVE_OTHER = "SAVE_OTHER";

export const mapStateToPropsFromStore = (state) => ({
  ...state,
});

export const mapDispatchToPropsFromStore = (dispatch) => ({
  saveCoronamap: (state) =>
    dispatch({
      type: SAVE_CORONAMAP,
      ...state,
    }),

  saveKorea: (state) =>
    dispatch({
      type: SAVE_KOREA,
      ...state,
    }),

  saveOther: (state) =>
    dispatch({
      type: SAVE_OTHER,
      ...state,
    }),
});
