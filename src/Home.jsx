import HomeCard from "./HomeCard/HomeCard.jsx";
import GoalsCard from "./GoalsCard/GoalsCard.jsx"
import { useNavigate } from "react-router-dom";

function Home(props) {

  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="title">
          <h1 className="titleText">UpDays,</h1>
          <p className="subTitleText">A simple way to stay accountable and inspired.</p>
        </div>
        {/* <HomeCard time="Good morning," userName="Denton"></HomeCard>
      <GoalsCard></GoalsCard> */}
        <div className="buttonContainer">
          <p className="buttonText">Keep track of your good habits!</p>
          <button className="clickButton" onClick={() => navigate("/good-habits")}>View Good Habits</button>
          <p className="buttonText">Keep track of your bad habits!</p>
          <button className="clickButton" onClick={() => navigate("/bad-habits")}>View Bad Habits</button>
        </div>
      </div>

    </>

  );
}
export default Home
