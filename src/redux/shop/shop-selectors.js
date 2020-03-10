import {  createSelector } from "reselect";

const selectShop = state => {
  console.log(state.shop);
  return state.shop; 
};


export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
)

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsLoading = createSelector(
  [selectShop],
  shop => !! shop.collections
);

