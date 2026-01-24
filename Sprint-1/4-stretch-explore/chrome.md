Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
// A pop-up window appears in the browser window, displaying the message "Hello world" along with a button "Ok".

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
// A pop-up dialog box appears in the browser window. This box displays the message "What is your name?" and contains a text input field along with "OK" and "Cancel" buttons. This dialog requires user interaction (typing text and clicking a button) before the browser can proceed.

What is the return value of `prompt`?
// when i type my name "Ifeyinwa Ofulue", the return value of the prompt was "Ifeyinwa Ofulue".
