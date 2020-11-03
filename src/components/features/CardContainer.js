import {connect} from 'react-redux';
import Card from './Card';
import {createAction_addToCart} from '../../redux/cardsRedux';

const mapDispatchToProps = (dispatch) => ({
    addToCart: pizza => dispatch(createAction_addToCart(pizza)),
});

export default connect(null, mapDispatchToProps) (Card);