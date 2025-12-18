import "./Landing-page.css";

import introVideo from "../assets/video/Ali-GPT-Login-Video.mp4"

export default function Landing ({onLogin, onSignup}){
    return (
        <div className= "landing-container">
        
            {/*Background video*/ }

            <video
                className="landing-video"
                src = {introVideo}
                autoPlay
                loop
                muted
                playsInline
            />

            {/*UI Overlay */ }
            <div className="landing-overlay">
                <h1 className="app-title animated-text-down"> Ali-GPT</h1>


                <button className="landing-button login animated-text-Left " onClick={onLogin}>
                    Login
                </button>

                <button className="landing-button signup animated-text-Right " onClick={onSignup}>
                    Sign Up
                </button>
            </div>  
        </div>
    );
}