import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { setVisibilityFilter } from '../../actions';
import Link from '../../components/link';
import { IStoreState, VisibilityFilters } from '../../types';
import { ReactNode } from 'react';


interface IProps {
    filter: VisibilityFilters,
    children: ReactNode
}

const mapStateToProps = (state: IStoreState, ownProps: IProps): { active: boolean } => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IProps): { onClick: () => void } => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
