import React from "react";

export default function Mood({mood}){
    return(
        <div class="mood-card">
           <p>Date: {mood.date}</p>
            <p class="mood-card--emoji">{mood.moodEmoji}</p>
            <p>{mood.moodText}</p>
            <p>Note: {mood.note}</p>
        </div>
    );
}