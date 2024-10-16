"use strict";

console.log("Task 01");
async function getUserData(userId) {
    let response = null;
    try {
        response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (response.status !== 200) {
            throw Error(response.status);
        }
        return await response.json();
    } catch (err) {
        throw Error(`User with ID: ${userId} not found`);
    }
}

async function main() {
    const userId = 1;
    try {
        const result = await getUserData(userId);
        console.log(`Successfully fetched user data: `, result);
    } catch (err) {
        console.error(`Failed to fetch user data: ${err.message}`);
    }
}

main();

console.log(" Task 02 ");
const user = {
    name: "John Smith",
    age: 30,
    email: "john@example.com",
};

async function saveUserData(user) {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => {
            console.log("User data saved successfully");
            response.json();
        })

        .catch((error) => {
            console.log(error.message);
        });
}

saveUserData(user);

console.log("Task 03 ");

function changeStyleDelayed(element, time, color = "red") {
    const myElement = document.getElementById(element);
    setTimeout(() => changeStyle(myElement, color), time);
}

function changeStyle(element, color) {
    element.style.backgroundColor = color;
}

changeStyleDelayed("myElement", 2000);
