import { getAllByPlaceholderText } from '@testing-library/react';
import {connect} from 'react-redux';
import Cart from './Cart';
import {getCart} from '../../redux/cardsRedux';

const mapStateToProps = (state) => ({
    cart: getCart(state),
});

export default connect(mapStateToProps) (Cart);