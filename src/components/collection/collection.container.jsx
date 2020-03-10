import WithSpinner from './../withSpinner/withSpinner.component';
import Collection from './collection.component';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectIsCollectionsLoading } from './../../redux/shop/shop-selectors';

const mapStateToProps = state => ({
    isLoading: !selectIsCollectionsLoading(state)
});

const collectionsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)

export default collectionsContainer;