let friends = [];

function showFriends() {
    if (friends.length <= 0) {
        console.log("you don't have any friends yet.");
    } else {
        console.log(friends);
    }
}

function addFriend(name) {
    let upperName = name.toUpperCase();
    let checkFriend = friends.includes(upperName);

    if (checkFriend === true) {
        console.log(`${upperName} is already on your friend list.`);
    } else {
        friends.push(upperName);
        console.log(`You added ${upperName}.`);
    }
}

function removeFriend(name) {
    let upperName = name.toUpperCase();
    let index = friends.indexOf(upperName);

    if (index === -1) {
        console.log(`${upperName} is not in your friend list.`);
    } else {
        friends.splice(index, 1);
        console.log(`${upperName} has been removed from your friend list.`);
    }
}

// Example usage:
addFriend("John");
addFriend("Jane");
showFriends();

removeFriend("John");
showFriends();