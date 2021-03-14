export const SAVE_CORONAMAP = "SAVE_CORONAMAP";

export const SAVE_KOREA = "SAVE_KOREA";
export const SORT_KOREA_INCDEC = "SORT_KOREA_INCDEC";
export const SORT_KOREA_REGION = "SORT_KOREA_REGION";

export const SAVE_WORLD = "SAVE_WORLD";

export const mapStateToPropsFromStore = (state) => ({
  state: state,
});

export const mapDispatchToPropsFromStore = (dispatch) => ({
  saveCoronamap: (state) =>
    dispatch({
      type: SAVE_CORONAMAP,
      state,
    }),

  saveKorea: (state) =>
    dispatch({
      type: SAVE_KOREA,
      state,
    }),

  sortKoreaByIncDec: (state, order) =>
    dispatch({
      type: SORT_KOREA_INCDEC,
      order,
      state,
    }),

  sortKoreaByRegion: (state, order) =>
    dispatch({
      type: SORT_KOREA_REGION,
      order,
      state,
    }),

  saveWorld: (state) =>
    dispatch({
      type: SAVE_WORLD,
      state,
    }),
});
