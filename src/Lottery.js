import react, {Component} from "react";
import Ball from './Ball'; 
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40,
        initialBall: Array.from({length:6}),
    }
    constructor(props){
        super(props);
        this.state = {newNum: Math.floor(Math.random() * 10)};
    }
    generate = ()=> {
        this.setState({newNum: this.state.newNum*3})
    }
    render(){
        return(
            <section className = "Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.props.initialBall.map(n => <Ball num = {this.state.newNum}/>)}
                    {/* {this.state.nums.map(n=> <Ball n = {this.props.maxNum}/>)} */}
                </div>
                <button className = "Lottery__but" onClick = {this.generate}>
                    Generate
                </button>
            </section>
        )
    }
    
}
export default Lottery;