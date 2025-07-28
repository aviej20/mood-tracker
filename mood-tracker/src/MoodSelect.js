import React from "react";

export default function MoodSelect ({moodRef}){

    const moodOptions = [
        { label: "Happy", emoji: "😊" },
        { label: "Sad", emoji: "😢" },
        { label: "Angry", emoji: "😠" },
        { label: "Anxious", emoji: "😨" },
        { label: "Tired", emoji: "😴" },
        { label: "Loved", emoji: "😍" },
        { label: "Meh", emoji: "😐" },
        { label: "Stressed", emoji: "🤯" },
        { label: "Confident", emoji: "😎" },
        { label: "Thoughtful", emoji: "🤔" },
        { label: "Silly", emoji: "🙃" },
        { label: "Overwhelmed", emoji: "😭" },
        { label: "Sick", emoji: "🤒" },
        ];




    return(
    <>           
        <label for="moodSelection">Select Mood</label>
        <select id="moodSelection" ref={moodRef} name="moodSelection">
            {moodOptions.map((mood, index) => (
                <option key={index} value={mood.emoji + ' ' + mood.label}>
                    {mood.emoji} {mood.label}
                </option>
        ))}
        </select>
    </>
    );
}