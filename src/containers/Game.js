import {connect} from 'react-redux';
import App from '../App';
import moveObjects from "../reducers/moveObjects";

const mapStateToProps = state => ({
    angle: state.angle,
});

const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
});

const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;