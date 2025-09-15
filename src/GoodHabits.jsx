import GoodHabitCard from "./GoodHabitCard/GoodHabitCard";
import gym1 from './assets/goodhabitpics/gym1.avif'
import gym2 from './assets/goodhabitpics/gym2.avif'
import gym3 from './assets/goodhabitpics/gym3.avif'
import grad1 from './assets/goodhabitpics/grad1.avif'
import grad2 from './assets/goodhabitpics/grad2.jpeg'
import grad3 from './assets/goodhabitpics/grad3.avif'
import water1 from './assets/goodhabitpics/water1.avif'
import water2 from './assets/goodhabitpics/water2.avif'
import water3 from './assets/goodhabitpics/water3.avif'
import med1 from './assets/goodhabitpics/med1.avif'
import med2 from './assets/goodhabitpics/med2.avif'
import med3 from './assets/goodhabitpics/med3.avif'
import wake1 from './assets/goodhabitpics/wake1.avif'
import wake2 from './assets/goodhabitpics/wake2.avif'
import wake3 from './assets/goodhabitpics/wake3.avif'
import comp1 from './assets/goodhabitpics/comp1.avif'
import comp2 from './assets/goodhabitpics/comp2.avif'
import comp3 from './assets/goodhabitpics/comp3.avif'




const randomGymPic = () => {
  const num = Math.floor(Math.random() * 3) + 1
  if (num === 1) return gym1
  else if (num === 2) return gym2
  else return gym3
}

const randomGradPic = () => {
    const num = Math.floor(Math.random() * 3) + 1
    if (num === 1) return grad1
    else if (num === 2) return grad2
    else return grad3
  }

const randomWaterPic = () => {
    const num = Math.floor(Math.random() * 3) + 1
    if (num === 1) return water1
    else if (num === 2) return water2
    else return water3
  }

  const randomWakePic = () => {
    const num = Math.floor(Math.random() * 3) + 1
    if (num === 1) return wake1
    else if (num === 2) return wake2
    else return wake3
  }

  const randomMedPic = () => {
    const num = Math.floor(Math.random() * 3) + 1
    if (num === 1) return med1
    else if (num === 2) return med2
    else return med3
  }

  const randomCompPic = () => {
    const num = Math.floor(Math.random() * 3) + 1
    if (num === 1) return comp1
    else if (num === 2) return comp2
    else return comp3
  }
function GoodHabits() {
    return( 
    <>
      <div className="container">
        <h1 className="titleText">Build the cycle.</h1>
        <p className="subTitleText">Progress isn’t loud, just consistent.</p>
        <div className="card-container">
            <GoodHabitCard img={randomGymPic()} name="Worked Out" storageKey="gym_key"></GoodHabitCard>
            <GoodHabitCard img={randomGradPic()} name="Wrote gratitude" storageKey="gratitude_key"></GoodHabitCard>
            <GoodHabitCard img={randomWaterPic()} name="Drank water" storageKey="water_key"></GoodHabitCard>
            <GoodHabitCard img={randomMedPic()} name="Meditated" storageKey="meditate_key"></GoodHabitCard>
            <GoodHabitCard img={randomWakePic()} name="Woke up early" storageKey="wokeup_key"></GoodHabitCard>
            <GoodHabitCard img={randomCompPic()} name="Complimented someone" storageKey="compliment_key"></GoodHabitCard>

        </div>
      </div>
    </>
    );

}

export default GoodHabits