let synth, soundLoop, synth2;
let notePattern = [55,62,70,72,62,55,42,38,45,52];
// let notePattern2 = [30,35,40,42,55,58,52];
function monoSynth() {
    userStartAudio();

    // let level = amplitude.getLevel();
    // let size = map(level, 0,1,0,200);

    if(soundLoop.isPlaying) {
        soundLoop.stop();
    } else {
        soundLoop.start();
    }
}

function onSoundLoop(timeFromNow) {
    let noteIndex = (soundLoop.iterations -1) % notePattern.length;
    let note = midiToFreq(notePattern[noteIndex]);
    synth.play(note, 0.3, timeFromNow);

    //uranus music
    // let note2 = midiToFreq(notePattern2[noteIndex]);
    // synth3.play(note2, 0.2, timeFromNow);
}

// function musicUranus() {
//     userStartAudio();
    
//     // let level = amplitude.getLevel();
//     // let size = map(level, 0,1,0,200);

//     if(soundLoop2.isPlaying) {
//         soundLoop2.stop();
//     } else {
//         soundLoop2.start();
//     }
// }

function playEnv(){
    env.play();
}

function toggle() {
    if (playing = !playing) {
      wave.amp(0.5, 1);
      
    } else {
      wave.amp(0, 1);
      
    }
    // Env function of ADSR
    //env.play();
}


function polySynth() {
    userStartAudio();
    // note duration (in seconds)
  let dur = 1.8;

  // time from now (in seconds)
  let time = 0.5;

  // velocity (volume, from 0 to 1)
  let vel = 0.8;

  // notes can overlap with each other
  synth2.play('B2', vel, 1, dur);
  synth2.play('C3', vel, time += 1/3, dur);
  synth2.play('G4', vel, time += 1/2, dur);
  synth2.play('A1', vel, time += 1/4, dur);
  synth2.play('D3', vel, time += 1/3, dur);
  synth2.play('A3', vel, time += 1/3, dur);
  synth2.play('B2', vel, time += 1/2, dur);
}




