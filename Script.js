var Score = 1500;
let startTime;
var __ended = false
document.getElementById('h1').innerHTML = Score;
function Button_Click(){
    if (Score === 1500 && startTime === undefined) { startTime = Date.now(); }
    if (Score === 1) { 
        document.getElementById('h1').style.fontSize = '30%';
        // Calculate and display the elapsed time
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000; // convert milliseconds to seconds

        console.log(`Time taken: ${elapsedTime} seconds`);
        document.getElementById('h1').innerHTML = `<p> Wasted <span> ${ Math.floor( elapsedTime ) }s </span> succesfully </p>`;
        __ended = true
        // Reset startTime for future use if needed
        startTime = undefined;
    } else {
        Score = Score - 1;
        document.getElementById('h1').innerHTML = Score;
    }
}
document.getElementById('section').addEventListener('click', () => {
    if ( !__ended) { Button_Click() }
    else {}
});
