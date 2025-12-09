## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
// I got the output; f log() ((native code))

Now enter just `console` in the Console, what output do you get back?
// I got quite number of output; {
  assert: f assert()
  clear: f clear()
  count: f count()
  countReset: f countReset()
  info: f info()
  log: f log()
  profile: f profile()
  table: f table()
  and many more.
}

Try also entering `typeof console`
// I got the output: "object"

Answer the following questions:

What does `console` store?
// The variable console stores a reference to a global Host Object provided by the browser environment. This object is a container (or dictionary) that holds a collection of methods (functions)

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
// The syntax represents Property Access on an object.

console: is the object itself.

. (Dot Notation): The dot (.) is the Member Access Operator. It tells the JavaScript engine to look inside the console object for a specific property.

log or assert: These are the properties (or keys) of the console object. Since these properties hold functions as their values, they are specifically referred to as methods of the console object.

// In otherwords, console.log means: Access the property named log that resides inside the console object.
