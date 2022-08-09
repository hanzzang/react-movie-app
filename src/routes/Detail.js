import React from 'react';
import './Detail.css'

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        console.log(location);
        return (
        <div class="detail__container">
            <img src={location.state.poster} alt={location.state.title} />
            <div class="movie__detail">
                <span>{location.state.title}</span>
                <p>{location.state.summary}</p>
            </div>
        </div>
        );
    }
}

export default Detail;