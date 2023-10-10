/**
 * Feature 1: Count the number of time the cursor exits the screen
 * Feature 2: Count the number of time the cursor enters the screen
 * Feature 3: Measure the amount of time 
 *      - need some more thinking, because what is the termination condition?
 * 
 */

let is_cursor_on_screen;
let off_window_counter;                     // feature 1
let on_window_counter;                      // feature 2
let cursor_on_screen_time;                  // feature 3
let enter_time;
let exit_time;

let mousedown_counter;                      // feature 4

let body = document.querySelector('body');
window.addEventListener("DOMContentLoaded", () => {
    on_window_counter = 0;
    off_window_counter = 0;
    cursor_on_screen_time = 0.0;
    mousedown_counter = 0;
});


body.addEventListener("mouseleave", (event) => {
    if (is_cursor_on_screen) {
        off_window_counter++;
        console.log("Exited the window %d times", off_window_counter);
        exit_time = Date.now();
        let diff = (exit_time - enter_time) / 1000;
        cursor_on_screen_time += diff;
        console.log("Total cursor elapsed: %d seconds", cursor_on_screen_time);
        is_cursor_on_screen = false;
    }
});
body.addEventListener("mouseenter", (event) => {
    if (!is_cursor_on_screen) {
        // need to start cursor_on_screen_time here
        on_window_counter++;
        console.log("Entered the window %d times", off_window_counter)
        enter_time = Date.now();
        is_cursor_on_screen = true;
    }
});

body.addEventListener("mousedown", (event) => {
    mousedown_counter++;
    console.log("Mousedown: %d times", mousedown_counter);
});