import React, {useState, useRef, useEffect} from 'react';
import './styles.css';
import MoodSelect from './MoodSelect';
import MoodList from "./MoodList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'moodApp.moods';


function App() {
      const [moods, setMoods] = useState([]);
      const moodRef = useRef();
      const dateRef = useRef();
      const noteRef = useRef();


    useEffect(() => {
      const storedMoods = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(storedMoods) setMoods(storedMoods);
    }, []);

    useEffect(() =>{
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(moods));
    }, [moods]);


    function addMood(e){
      const enteredMoodValue = moodRef.current.value;
      const selectedDate = dateRef.current.value;
      const enteredNote = noteRef.current.value;

      if(enteredMoodValue === '') return;

      
      const [moodEmoji, moodText] = enteredMoodValue.split(' ');

      setMoods(prevMoods => {
        return [...prevMoods, {id: uuidv4(), moodEmoji: moodEmoji, moodText: moodText, date: selectedDate, note: enteredNote}]
      });
      moodRef.current.value = null;
    }

    function clearMood(e){
      
    }

  return (
    <>
      <label for="mood-date">Date</label>
      <input type="date" id="mood-date" ref={dateRef} />
      <MoodSelect moodRef={moodRef} />
      <label for="mood-note">Note</label>
      <textarea id="mood-note" ref={noteRef}></textarea>
      <div class="button-group">
        <button onClick={addMood}>Add</button>
        <button>Clear All</button>
      </div>
      <MoodList pastMoods ={moods} />
    </>
  );
}

export default App;
