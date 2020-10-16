import React, { Component } from 'react';
import Header from '../../Components/Header';
import BatchCard from '../../Components/BatchCard';
import SessionDetails from '../../Components/SessionDetails';
import "./styles.css"
import _ from "lodash";

export default class BatchDetails extends Component{

    constructor(props){
        super(props);
        this.state={
            batches:[ "5", "8"],
            sessions:[
                {
                    sessionId:"123",
                    sessionDate:"15th Oct 2020",
                    topics:["topic 1, topic 2"],
                    images:["asd","df"]
                },
                {
                    sessionId:"234",
                    sessionDate:"1st Oct 2020",
                    topics:["topic 1, topic 2"],
                    images:["asd","df"]
                },
                {
                    sessionId:"123s",
                    sessionDate:"15th Oct 2020",
                    topics:["topic 1, topic 2"],
                    images:["asd","df"]
                },
                {
                    sessionId:"234234",
                    sessionDate:"1st Oct 2020",
                    topics:["topic 1, topic 2"],
                    images:["asd","df"]
                },
                {
                    sessionId:"123fg",
                    sessionDate:"15th Oct 2020",
                    topics:["topic 1, topic 2"],
                    images:["asd","df"]
                },
                {
                    sessionId:"234dgh",
                    sessionDate:"1st Oct 2020",
                    topics:["topic 1, topic 2"],
                    images:["asd","df"]
                },
                {
                    sessionId:"12dfb3",
                    sessionDate:"15th Oct 2020",
                    topics:["topic 1, topic 2"],
                    images:["asd","df"]
                },
                {
                    sessionId:"23svdc4",
                    sessionDate:"1st Oct 2020",
                    topics:["topic 1, topic 2"],
                    images:["asd","df"]
                },
                {
                    sessionId:"12qwerwgd3",
                    sessionDate:"15th Oct 2020",
                    topics:["topic 1, topic 2"],
                    images:["asd","df"]
                },
                {
                    sessionId:"234qwrfsd",
                    sessionDate:"1st Oct 2020",
                    topics:["topic 1, topic 2"],
                    images:["asd","df"]
                }
            ],
            selectedSession:{}
        }

    }

    render(){
        return(
            <div className="batchDetails__container">
                <h3 className="batchDetails__title">Class 5</h3>
                <div className="batchDetails__body">
                    {
                        !_.isEmpty(this.state.selectedSession) ? 
                        <div>
                        <h4>Session Details</h4>
                        <div className="batchDetails__line"></div>
                            <SessionDetails 
                                sessionData={this.state.selectedSession} 
                            />
                        </div>
                        :
                        <div className="batchDetails__sessions">
                            <h4>Sessions</h4>
                            <div className="batchDetails__line"></div>

                            {
                                this.state.sessions.map((each)=>{
                                    return(
                                        <button 
                                            className="session__button" 
                                            key={each.sessionId}
                                            onClick={()=>this.selectSession(each.sessionId)}>
                                            <span>{each.sessionDate}</span>
                                        </button>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }

    selectSession = async (sessionId) =>{
        console.log("-----", sessionId);
        await this.setState({"selectedSession":_.filter(this.state.sessions,{"sessionId":sessionId})[0]})
        console.log("------======", this.state)
    }
}