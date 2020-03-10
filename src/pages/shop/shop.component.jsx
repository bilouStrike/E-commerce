import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../components/collection/collection.component';
import { firestore, converCollectionsSnapshotToMap } from '../../utility/firebase/firebase.utils';
import { updateCollections } from './../../redux/shop/shop.actions';
import WithSpinner from './../../components/withSpinner/withSpinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  state = {
    isLoading: true
  }
  unsubscribeFromSnapshot = null;

  componentDidMount() {
      const { updateCollections } = this.props;
      const collectionRef = firestore.collection('collections');
      this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
          const collectionMap = converCollectionsSnapshotToMap(snapshot);
          console.log(collectionMap);
          updateCollections(collectionMap);
          this.setState({ isLoading: false})
        }
      );
  }
  render() {
      const { match } = this.props;
      const { isLoading } = this.state;

      return (
          <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner {...props} isLoading={isLoading} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner {...props} isLoading={isLoading} />} />
          </div>
      );
  }
}
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);