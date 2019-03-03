import React, {Component} from 'react';
import {connect} from "react-redux";

import {increment} from "../actions";
import {decrement} from "../actions";

class Counter extends Component {

    render() {
        const {count, increment, decrement} = this.props;

        return (
            <div>
                <div>
                    <button onClick={() => {increment()}}>
                        Increment
                    </button>

                    <button onClick={() => {decrement()}}>
                        Decrement
                    </button>

                    <br/>
                    <span>Count: {count}</span>
                </div>

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {count: state.counter}
};
export default connect(mapStateToProps, {increment, decrement})(Counter)
