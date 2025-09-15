import HabitCard from "./BadHabitCard/BadHabitCard.jsx";
import alc1 from './assets/badhabitpics/alc1.avif'
import alc2 from './assets/badhabitpics/alc2.avif'
import alc3 from './assets/badhabitpics/alc3.avif'
import weed1 from './assets/badhabitpics/weed1.avif'
import weed2 from './assets/badhabitpics/weed2.avif'
import weed3 from './assets/badhabitpics/weed3.jpeg'
import edible1 from './assets/badhabitpics/edible1.avif'
import edible2 from './assets/badhabitpics/edible2.avif'
import edible3 from './assets/badhabitpics/edible3.avif'
import vape1 from './assets/badhabitpics/vape1.avif'
import vape2 from './assets/badhabitpics/vape2.avif'
import vape3 from './assets/badhabitpics/vape3.avif'
import mush1 from './assets/badhabitpics/mush1.avif'
import mush2 from './assets/badhabitpics/mush2.avif'
import mush3 from './assets/badhabitpics/mush3.avif'
import porn1 from './assets/badhabitpics/porn1.avif'
import porn2 from './assets/badhabitpics/porn2.avif'
import porn3 from './assets/badhabitpics/porn3.avif'




const randomAlcPic = () => {
  const num = Math.floor(Math.random() * 3) + 1
  if (num === 1) return alc1
  else if (num === 2) return alc2
  else return alc3
}

const randomWeedPic = () => {
  const num = Math.floor(Math.random() * 3) + 1
  if (num === 1) return weed1
  else if (num === 2) return weed2
  else return weed3
}

const randomEdiblePic = () => {
  const num = Math.floor(Math.random() * 3) + 1
  if (num === 1) return edible1
  else if (num === 2) return edible2
  else return edible3
}

const randomVapePic = () => {
  const num = Math.floor(Math.random() * 3) + 1
  if (num === 1) return vape1
  else if (num === 2) return vape2
  else return vape3
}

const randomMushPic = () => {
  const num = Math.floor(Math.random() * 3) + 1
  if (num === 1) return mush1
  else if (num === 2) return mush2
  else return mush3
}

const randomPornPic = () => {
  const num = Math.floor(Math.random() * 3) + 1
  if (num === 1) return porn1
  else if (num === 2) return porn2
  else return porn3
}


function BadHabits() {

  return (
    <>
      <div className="container">
        <h1 className="titleText">Break the cycle.</h1>
        <p className="subTitleText">It's okay to slip up, nobody’s perfect.</p>
        <div className="card-container">
          <HabitCard img={randomAlcPic()} name="Drank Alcohol" storageKey="alcohol_key"></HabitCard>
          <HabitCard img={randomWeedPic()} name="Smoked Weed" storageKey="weed_key"></HabitCard>
          <HabitCard img={randomEdiblePic()} name="Took Edibles" storageKey="edible_key"></HabitCard>
          <HabitCard img={randomVapePic()} name="Vaped Nicotine" storageKey="vape_key"></HabitCard>
          <HabitCard img={randomMushPic()} name="Did Shrooms" storageKey="mushroom_key"></HabitCard>
          <HabitCard img={randomPornPic()} name="Watched Porn" storageKey="porn_key"></HabitCard>
        </div>
      </div>
    </>
  );
}

export default BadHabits
