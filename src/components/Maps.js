import React, {Component} from "react";
import GoogleMaps from "simple-react-google-maps";

export default class Maps extends Component {
    render () {
        return (
            <div className="continer">
                <GoogleMaps
                style={{heig:"400px", with:"300px"}}
                zoom={12}
                center={{
                    lat:40.4127355,
                    lng:-3.695428
                }}
                />
            </div>
        );
    }
}