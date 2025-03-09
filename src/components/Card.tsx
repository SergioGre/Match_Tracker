import React from "react";
import PlayerHolder from "../assets/CommandHolder.svg"

interface CardProps {
    leftScore: number;
    rightScore: number;

    Command1: string;
    Command2: string;

    status: string;
}

export default class Card extends React.Component<CardProps> {
    
    
    constructor(props: CardProps) {
        super(props);

    }

    

    render(): React.ReactNode {
    
        
        const leftScore: number = this.props.leftScore;
        const rightScore: number = this.props.rightScore;

        const Command1: string = this.props.Command1;
        const Command2: string = this.props.Command2;

        const status: string = this.props.status;

        const statusClass = status === 'Finished' ? 'status-finished' :
                    status === 'Ongoing' ? 'status-live' :
                    status === 'Scheduled' ? 'status-preparing' : '';
        const statusName: string = status === 'Finished' ? 'Finished' :
        status === 'Ongoing' ? 'Live' :
        status === 'Scheduled' ? 'Match preparing' : '';            

        return (
            
           <div className="card">
            <div className="command">
                <img src={PlayerHolder}  />
                <p>{Command1}</p>
            </div>
                <div className="score-box">
                    <div className="score">{leftScore} : {rightScore}</div>
                    <div className={`status-box ${statusClass}`}><a>FInish</a></div>
                </div>
            <div className="command">
                <p>{Command2}</p>
                <img src={PlayerHolder}  />
            </div>
           </div>
            
        )
    }

}