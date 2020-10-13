import {connect} from 'react-redux';
import Card from './Card';
import {createAction_addToCart} from '../../redux/cardsRedux';

const mapDispatchToProps = (dispatch) => ({
    addToCart: title => dispatch(createAction_addToCart(title))
});

export default connect(mapDispatchToProps) (Card);