



export const PacksActionCreators = {
  // setPacks: (cardPacks: CardsPackResponse, packsTotalCount: number) =>
  //     ({ type: PackActionEnum.SET_PACKS, cardPacks, packsTotalCount } as const),
  //
  // setPacksPage: (page: number) =>
  //     ({ type: PackActionEnum.SET_PACKS_PAGE, page } as const),
  //
  // setCardsPerPage: (count: number) =>
  //     ({ type: PackActionEnum.SET_CARDS_PER_PAGE, count } as const),

  changeSearchPackName: (searchPackName: string) =>
      ({
        type: 'packs/CHANGE_SEARCH_PACK_NAME',
        searchPackName,
      } as const),

  // getPacks:
  //     (requestPage: number, pageSize: number, packName: string = '') =>
  //         async (dispatch: AppDispatch) => {
  //           dispatch(allActionCreators.setPacksPage(requestPage));
  //           dispatch(allActionCreators.setAppIsLoading(true));
  //
  //           try {
  //             const response = await PacksService.getPacks(requestPage, pageSize, packName);
  //             dispatch(
  //                 allActionCreators.setPacks(response.data, response.data.cardPacksTotalCount),
  //             );
  //           } catch (error) {
  //             handleError(error, dispatch);
  //           } finally {
  //             dispatch(allActionCreators.setAppIsLoading(false));
  //           }
  //         },
  //
  // addPack:
  //     (data: CardsPack) =>
  //         async (
  //             dispatch: ThunkDispatch<RootState, unknown, any>,
  //             getState: () => RootState,
  //         ) => {
  //           const requestPage = getState().packs.page;
  //           const pageSize = getState().packs.pageCount;
  //           dispatch(allActionCreators.setAppIsLoading(true));
  //           try {
  //             await PacksService.addPack(data);
  //             await dispatch(allActionCreators.getPacks(requestPage, pageSize));
  //           } catch (error) {
  //             handleError(error, dispatch);
  //           } finally {
  //             dispatch(allActionCreators.setAppIsLoading(false));
  //           }
  //         },
  //
  // deletePack:
  //     (id: string | undefined) =>
  //         async (
  //             dispatch: ThunkDispatch<RootState, unknown, any>,
  //             getState: () => RootState,
  //         ) => {
  //           const requestPage = getState().packs.page;
  //           const pageSize = getState().packs.pageCount;
  //           dispatch(allActionCreators.setAppIsLoading(true));
  //           try {
  //             await PacksService.deletePack(id);
  //             await dispatch(allActionCreators.getPacks(requestPage, pageSize));
  //           } catch (error) {
  //             handleError(error, dispatch);
  //           } finally {
  //             dispatch(allActionCreators.setAppIsLoading(false));
  //           }
  //         },
  //
  // updatePack:
  //     (data: CardsPack) =>
  //         async (
  //             dispatch: ThunkDispatch<RootState, unknown, any>,
  //             getState: () => RootState,
  //         ) => {
  //           const requestPage = getState().packs.page;
  //           const pageSize = getState().packs.pageCount;
  //           dispatch(allActionCreators.setAppIsLoading(true));
  //
  //           try {
  //             await PacksService.updatePack(data);
  //             await dispatch(allActionCreators.getPacks(requestPage, pageSize));
  //           } catch (error) {
  //             handleError(error, dispatch);
  //           } finally {
  //             dispatch(allActionCreators.setAppIsLoading(false));
  //           }
  //         },
};
