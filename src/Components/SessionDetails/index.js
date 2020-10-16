import React, { Component } from 'react';
import "./styles.css"
import img_forect from "./img_forest.jpg";

export default class SessionDetails extends Component{

    render(){
        return(
            <div>
                <h4 className="sessionDetails__subtitles">Date: {this.props.sessionData.sessionDate}</h4>
                <h4 className="sessionDetails__subtitles">Topics Covered: </h4>
                <div className="sessionDetails__topics">
                {
                    this.props.sessionData.topics.map((each)=>{
                        return(
                            <div className="sessionDetails__topicName">
                                <p>{each}</p>
                            </div>
                        )
                    })
                }
                </div>
                <h4 className="sessionDetails__subtitles">ClassWork: </h4>
                <div className="sessionDetails__images">
                    {
                        this.props.sessionData.images.map((each)=>{
                            return(
                                <div className="sessionDetails__imageContainer">
                                    <img src={img_forect} alt="Forest" className="sessionDetails__each" />
                                    <div className="image__options">
                                        <a target="_blank" href={img_forect} className="imglink">
                                            <button className="btn" ><i className="fa fa-eye"></i></button>
                                        </a>
                                        <a target="_blank" href={img_forect} download className="imglink">
                                            <button className="btn" ><i className="fa fa-download"></i></button>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}