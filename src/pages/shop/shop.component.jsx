import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../components/collection/collection.component';
import { firestore, converCollectionsSnapshotToMap } from '../../utility/firebase/firebase.utils';
import { updateCollections } from './../../redux/shop/shop.actions';

class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
      const {updateCollections} = this.props;
      const collectionRef = firestore.collection('collections');
      this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
          const collectionMap = converCollectionsSnapshotToMap(snapshot);
          console.log(collectionMap);
          updateCollections(collectionMap);
        }
      );
  }
  render(){
      const {match} = this.props;
      return (
          <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
          </div>
      );
  }
}
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);