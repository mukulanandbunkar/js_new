class EventEmitter {
  constructor() {
    this.events = {}; // Object to store events and their listeners
  }

  // Add a listener for a specific event
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = []; // Initialize an array for the event
    }
    this.events[event].push(listener); // Add the listener to the event's array
  }

  // Remove a listener for a specific event
  off(event, listenerToRemove) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    );
  }

  // Emit an event, calling all its listeners with the provided arguments
  emit(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach((listener) => {
      listener(...args); // Call each listener with the provided arguments
    });
  }

  // Add a listener that will be called only once
  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args); // Call the original listener
      this.off(event, wrapper); // Remove the wrapper after it's called
    };
    this.on(event, wrapper); // Add the wrapper as a listener
  }
}

// Usage Example
const emitter = new EventEmitter();

// Define some listeners
const greet = (name) => console.log(`Hello, ${name}!`);
const farewell = (name) => console.log(`Goodbye, ${name}!`);

// Add listeners
emitter.on("greet", greet);
emitter.on("farewell", farewell);

// Emit events
emitter.emit("greet", "Alice"); // Output: Hello, Alice!
emitter.emit("farewell", "Bob"); // Output: Goodbye, Bob!

// Remove a listener and emit again
emitter.off("greet", greet);
emitter.emit("greet", "Alice"); // No output

// Add a once listener
emitter.once("greet", greet);
emitter.emit("greet", "Charlie"); // Output: Hello, Charlie!
emitter.emit("greet", "Charlie"); // No output
