import WithSpinner from './../withSpinner/withSpinner.component';
import { selectIsCollectionFetching } from './../../redux/shop/shop-selectors';
import CollectionsOverview from './collections-overview.component';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => ({
  isLoading: selectIsCollectionFetching(state),
});

export const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
