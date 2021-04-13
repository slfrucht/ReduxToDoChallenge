import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

class Directory extends Component {
    render() {
        const directory = this.props.campsites.map(campsite => {
            return(
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick = {() => this.props.onClick(campsite.id)}>
                        <CardImg src={campsite.image} alt={campsite.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }

        );
        return(
            <div className = "container">
                <div className = "row">
                    {directory}

                </div>

            </div>
        );
    }
}



export default Directory;