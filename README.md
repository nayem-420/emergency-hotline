1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  getElementById returns a single element with a specific ID, while getElementsByClassName returns a collection of elements with a specific class name.
  
  querySelector returns the first element that matches a css selector and querySelectorAll returns a collection of all elements that matches the selector.


2. How do you create and insert a new element into the DOM?
   use the document.createElement() method to create the element, appendChild() to add.

3. What is Event Bubbling and how does it work?
   It is a process in DOM where an event triggered on a child element propagates to its parent and the ancestor elements.

4. What is Event Delegation in JavaScript? Why is it useful?
   event listener is attached to a parent element instead of multiple listeners on individual child elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
   preventDefault() -> stops the default action with an event, like a form submitting.
   stopPropagation() -> the event from bubbling up to parent elements, stopping any parent event handlers from being executed.
