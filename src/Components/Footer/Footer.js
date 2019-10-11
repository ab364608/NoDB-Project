import React, {Component} from 'react';
import './footer.css';


export default class Header extends Component {
    render() {
        return(
            <div className="center">
                <footer className="foot">
                    <div className="bonus">
                        <h1 className="url">Use futhead.com to find the proper Image URL,</h1>
                        <h1 className="scroll">Scroll Down to view your Created Players!</h1>
                    </div>
                </footer>
            </div>
        )
    }
}