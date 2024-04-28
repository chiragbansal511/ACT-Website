import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Main from "../../components/Layout/Layout";
import "./Contact.css";

export default function Contact() {
    return (
        <div>
            <Main Heading="Contact Us" SubHead="Let us help you" Body={Body()} />
        </div>
    );
}

const Body = () => {
    return (
        <div>
            <div className="body">
                <h1>Get in touch</h1>

                <div className="matrix">
                    <div className="row">
                        <div className="col">
                            <form action="">
                                <input type="text" placeholder="Full Name" />
                                <input type="text" placeholder="Email" />
                                <textarea rows="10" placeholder="Message"></textarea>
                                <button className="button homeButton contactButton">Submit</button>
                            </form>
                        </div>
                        <div className="col">
                            <MapContainer center={[30.3544242, 76.36670]} zoom={15} scrollWheelZoom={true}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                            </MapContainer>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
