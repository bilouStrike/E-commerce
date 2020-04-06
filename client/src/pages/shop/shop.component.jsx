import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import collectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import collectionsContainer from '../../components/collection/collection.container';

import { fetchCollectionsStart } from './../../redux/shop/shop.actions';

export const ShopPage = ({ match, fetchCollectionsStart }) => {
  React.useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={collectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={collectionsContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
