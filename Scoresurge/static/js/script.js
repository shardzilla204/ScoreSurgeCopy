


// -=-=-= MODALS -=-=-=

// Modal variables
var class_modal = document.getElementById("class-modal");
var add_to_planner_modal = document.getElementById("add-to-planner-modal");
var planner_modal = document.getElementById("planner-modal");

// 
var modal_close_btn = document.querySelectorAll(".close");
console.log(modal_close_btn)

document.querySelectorAll("#add-btn").forEach(button => {
    button.addEventListener("click", function(event) {
        console.log(event.target.className)
        
        if (event.target.className === "add-class-btn") {
            class_modal.style.display = "flex"
        } else if (event.target.className === "add-to-planner-btn") {
            add_to_planner_modal.style.display = "flex"
        } else if (event.target.className === "make-planner-btn") {
            planner_modal.style.display = "flex"
        }

    });
});


// Click X to close the modal
modal_close_btn.forEach(button => {
    button.addEventListener("click", function(event) {
        class_modal.style.display = "none";
        add_to_planner_modal.style.display = "none";
        planner_modal.style.display = "none";
    });
});



document.addEventListener('DOMContentLoaded', function() {

    // Becuase there's more than one dropdown mean, must use all.
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Loop through each dropdown toggle
    dropdownToggles.forEach(toggle => {
        const dropdown = toggle.parentElement;
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        toggle.addEventListener('click', function() {
            // Toggle the active class
            dropdown.classList.toggle('active');

            // Adjust the dropdown content's max height for smooth transition
            if (dropdown.classList.contains('active')) {
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
            } else {
                dropdownContent.style.maxHeight = 0;
            }
        });
    });
});


// This is for the textboxes in the NOTES area

// Changes fonts with the selector
function changeFont(font) {
    if (font) {
        // It's depracted but it works so idc
        document.execCommand("fontName", false, font);
    }
}

function formatText(command) {
    document.execCommand(command, false, null);
}


// MY OWN JS | IT WORKS YIPPIE

const format_button = document.querySelectorAll("#text-format-btn");

format_button.forEach(button => {
    button.addEventListener("click", function(event) {
        button.classList.toggle("active")
    });
});


// If ctrl+s is pressed it'll save.
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {

        // Preven the broswer save .html thingy
        event.preventDefault();

        // Without this, the save is blank (moving the note stuff from div to input field)
        document.getElementById('note-content').value = document.getElementById('editor').innerHTML;
        document.getElementById('note-form').submit(); // Trigger form submission
    }
});


// Handling chaning toolbar width when textbox one changes from user resize
function adjustToolbar() {
    const editor = document.getElementById("editor");
    const toolbar = document.querySelector(".toolbar");

    // Changing the toolbar width
    // Why the -20? I honestly don't know, it stops the overhand with the toolbar
    toolbar.style.width = editor.clientWidth + "px";
}

// Function to handle resizing of the editor
function handleResize() {
    const editor = document.getElementById("editor");

    // ResizeObserver() is to watch for changes in size, passed through
    // as any argument
    let resise_observer = new ResizeObserver(() => {
        adjustToolbar();
    });

    // Like here
    resise_observer.observe(editor);
}

// On page load initalize a function to be 
window.onload = function() {
    handleResize();
};

// Also, handle cases where the window is resized
window.onresize = function() {
    adjustToolbar();
};


document.getElementById('note-form').addEventListener('submit', function() {
    const editorContent = document.getElementById('editor').innerHTML;

    document.getElementById('note-content').value = editorContent;
});
