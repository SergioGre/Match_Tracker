import React from "react";
import axios from "axios";


const baseurl = "https://app.ftoyd.com/fronttemp-service";
const fronts = "/fronttemp";

export default class Apicomp extends React.Component {

    constructor(props: string) {
        super(props);

        axios.get(baseurl + fronts).then((res) => {

            const ObjArr: object[] = res.data.data.matches
            console.log(res.data.data.matches)
            const killPoint: number = ObjArr[2].awayTeam.players[1].kills
            
           setTimeout(() => {
            console.log(killPoint)
            
            }, 500)

           /*  setTimeout(() => {
                console.log(res.data.data.matches)
               
            }, 1000)*/
            
        })

    };


render(): React.ReactNode {

    return (
        <>
        
        </>
    )
}



}