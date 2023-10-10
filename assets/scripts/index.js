/**
 * Feature 1: Count the number of time the cursor exits the screen
 * Feature 2: Count the number of time the cursor enters the screen
 * Feature 3: Measure the amount of time 
 */

let is_cursor_on_screen;
let off_window_counter;         // feature 1
let on_window_counter;          // feature 2
let cursor_time;                // feature 3

let body = document.querySelector('body');
window.addEventListener("DOMContentLoaded", () => {
    on_window_counter = 0;
    off_window_counter = 0;
});


body.addEventListener("mouseleave", (event) => {
    if (is_cursor_on_screen) {
        off_window_counter++;
        console.log("Exited the window %d times", off_window_counter);
        is_cursor_on_screen = false;
    }
});
body.addEventListener("mouseover", (event) => {
    if (!is_cursor_on_screen) {
        on_window_counter++;
        console.log("Entered the window %d times", off_window_counter)
        is_cursor_on_screen = true;
    }
});