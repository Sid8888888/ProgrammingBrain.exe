import "./NavigationBar.css";
import iconuser from "../../Icons/icons8-user-circle-24.png"
const Gamelogo = process.env.PUBLIC_URL + '/Gamelogo.jpg';

const NavigationBar = () => {
  const navigateToProfile = () => {
    window.location.href = "/customerprofile";
  }
  return (
    <header className="depth-2-frame-2">
      <div className="depth-3-frame-01">
        <div className="depth-4-frame-01">
          <div className="depth-5-frame-014">
            <div className="depth-6-frame-013">
              <img
                className="vector-0"
                loading="lazy"
                alt=""
                src={Gamelogo}
              />
              <div className="depth-7-frame-015" />
            </div>
          </div>
          <div className="depth-5-frame-1">
            <div className="depth-6-frame-014">
              <b className="northway-supermart">ProgrammingQuiz.exe</b>
            </div>
          </div>
        </div>
      </div>
      <div className="depth-3-frame-1">
        <nav className="depth-4-frame-02">
          <div className="depth-5-frame-015">
            <div className="depth-6-frame-015">
              <a className="home" href="/">Home</a>
            </div>
          </div>
          <div className="depth-5-frame-11">
            <div className="depth-6-frame-016">
              <a className="about-us" href="/leaderboard">LeaderBoard</a>
            </div>
          </div>
          <div className="depth-5-frame-2">
            <div className="depth-6-frame-017">
              <a className="home" href="/help">Help</a>
            </div>
          </div>
          <div className="depth-5-frame-3">
            <div className="depth-6-frame-018">
              <a className="login1" href="/login">Login</a>
            </div>
          </div>
          <div className="depth-5-frame-4">
            <div className="depth-6-frame-019">
              <a className="register" href="/Register">Register</a>
            </div>
          </div>
        </nav>
        <div className="depth-4-frame-11">
          <div className="depth-5-frame-016">
            <div className="depth-6-frame-020">
              <div className="depth-7-frame-016">
                
              </div>
            </div>
          </div>
          <div className="depth-5-frame-12" >
            <div className="depth-6-frame-021">
              <div className="depth-7-frame-017" >
               
                <div className="depth-8-frame-011" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
