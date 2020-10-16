import React, { Component } from 'react';
import Header from '../../Components/Header';
import BatchCard from '../../Components/BatchCard'
import "./styles.css"

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            batches:[ "5", "8"]
        }

    }

    render(){
        return(
            <div id="#Home">
                {/* <Header></Header> */}
                <div className="home__body">
                    <h3>Choose your batch</h3>
                    <div className="home__batches">
                        {
                            this.state.batches.map((each)=>{
                                return(
                                    <BatchCard batch={each}></BatchCard>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}