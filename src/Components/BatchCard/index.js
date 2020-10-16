import React, { Component } from 'react';
import "./styles.css"

export default class BatchCard extends Component{
    render(){
        return(
            <div class="batchcard__container">
                <h3>class {this.props.batch}</h3>
                <form>
                    <label for="fname">Enter Code: </label>
                    <input type="text" id="fname" name="fname" placeholder="Code goes here !!"></input>
                </form>
                <input type="submit" value="Submit" className="batchcard__submit"></input>
            </div>
        )
    }
}