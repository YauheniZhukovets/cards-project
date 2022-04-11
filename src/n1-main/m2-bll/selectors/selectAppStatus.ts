import { AppStoreType } from "../../m2-bll/store";
import { cardPacksType } from "../../m2-bll/packsReducer/packsReducer";

// Packs

export const appStatusSelector = (state: AppStoreType) => state.app.status;
// export const packNameSelector = (state: AppStoreType) =>
//   state.packs.packName;
// export const packSelector = (state: AppStoreType): cardPacksType[] =>
//   state.packs.cardPacks;
// export const isLoggedInSelector = (state: AppStoreType) =>
//   state.app.isLoggedIn;
// export const minRangeSelector = (state: AppStoreType) =>
//   state.packs.minCardsCount;
// export const maxRangeSelector = (state: AppStoreType) =>
//   state.packs.maxCardsCount;
// export const maxSelector = (state: AppStoreType) => state.packs.max;
// export const minSelector = (state: AppStoreType) => state.packs.min;
// export const sortedPackValueSelector = (state: AppStoreType) =>
//   state.packs.sortedPackBtn;
// export const userIdSelector = (state: AppStoreType) => state.login._id;
// export const currentPackIdSelector = (state: AppStoreType) =>
//   state.packs.id;
// export const sortByPacksSortValueSelector = (state: AppStoreType) =>
//   state.packs.sortedPackValue;

// Cards

// export const getCardsSelector = (state: AppStoreType) => state.cards.cards;
// export const currentUserIdSelector = (state: AppStoreType) =>
//   state.cards.packUserId;
// export const sortCardsValueSelector = (state: AppStoreType) =>
//   state.cards.sortCardsValue;
// export const searchByCardsQuestionSelector = (state: AppStoreType) =>
//   state.cards.searchByCardsQuestion;
// export const getEmailSelector = (state: AppStoreType) => state.login.email

// Pagination

// export const selectCurrentPage = (state: AppStoreType) => state.packs.page;
// export const selectTotalPacksCount = (state: AppStoreType) =>
//   state.packs.cardPacksTotalCount;
// export const selectPageSize = (state: AppStoreType) =>
//   state.packs.pageCount
//
// // Forum
// export const selectAllForums = (state: AppStoreType) =>
//   state.forum
// // Messages
// export const selectAllMessages = (state: AppStoreType) =>
//     state.messageForum
