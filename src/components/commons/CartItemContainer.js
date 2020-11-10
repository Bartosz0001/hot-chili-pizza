import {connect} from 'react-redux';
import CartItem from './CartItem';
import {createAction_removeFromCart} from '../../redux/cardsRedux';

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: item => dispatch(createAction_removeFromCart(item)),
});

export default connect(null, mapDispatchToProps) (CartItem);