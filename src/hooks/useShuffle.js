import React from 'react'


// TODO Refactor into useShuffle hook so it can be used for gallery too
// shamelessly stolen shuffle function: https://bost.ocks.org/mike/shuffle/
export default function Shuffle(array) {

    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}