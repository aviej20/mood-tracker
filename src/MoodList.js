import Mood from "./Mood";


export default function MoodList ( {pastMoods}){
    return (
        <>
        <div class="mood-card-group">
            {pastMoods.map(mood =>{
                return <Mood key={mood.id} mood={mood} />
            })}
        </div>
        </>
    )
}