import React, {Component} from 'react';
import {connect} from "react-redux";

import {selectSong} from "../actions";

class SongList extends Component {

    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                        onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

// Get the state data and map state data (we're interested in)
// to props of this component.
const mapStateToProps = (state) => {

    // this is the object that's gonna show up as a
    // props in our component
    return {songs: state.songs};
};

// Adding an actionCreator as a second argument makes dispatching
// the action from this component possible.
export default connect(mapStateToProps, {selectSong})(SongList);


