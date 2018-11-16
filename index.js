// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
drivers.push(name)

}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}
function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    const newdrivers = []
    newdrivers.push(drivers[0]);
    newdrivers.push(drivers[1]);
    newdrivers.push(drivers[2]);
    newdrivers.push(name);
    return newdrivers;
}

function prependDriver(name) {
    const newdrivers = []
    newdrivers.push(drivers[0]);
    newdrivers.push(drivers[1]);
    newdrivers.push(drivers[2]);
    newdrivers.unshift(name);
    return newdrivers;
}

function removeLastDriver() {
    const newdrivers = []
    newdrivers.push(drivers[0]);
    newdrivers.push(drivers[1]);
    newdrivers.push(drivers[2]);
    newdrivers.pop();
    return newdrivers;
}

function removeFirstDriver() {
    const newdrivers = []
    newdrivers.push(drivers[0]);
    newdrivers.push(drivers[1]);
    newdrivers.push(drivers[2]);
    newdrivers.shift();
    return newdrivers;
}