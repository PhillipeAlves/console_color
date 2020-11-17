![Banner](/public/cc-banner.gif)

> > > ## ABOUT

This is a simple implementation of escape sequences to add color to text to be displayed on Node.js Console (REPL).
This repo contains:

### **_config.js_**

> **Escape sequences:** '\x1b' is the code for the non-printable control character escape. Escape sequences dealing only with colors and styles are also known as ANSI escape code and are standardized, so therefore they (should) work on any platform. '\x1b[31m', for example, is an escape sequence that will be intercepted by your terminal and instructs it to switch to the red color. [Learn more...](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors </br> > **Convention:** in this file it was established a simple convention to access the properties of the 'config' object. Respectively:
>
> - **G** - General configurations
> - **F** - Font colors
> - **B** - Background colors

---

### **_consoleColor.js_**

> **CC function:** this file contains the logic to use the escape sequences referenced on _config.js_. It returns a function named CC, that stands for console color, which has no special meaning beyond this scope. </br>
> This function accepts multiple arguments, being the first one the string to be addressed followed by the desired configurations. </>
> The configurations are the accessed using the convention established in the 'config' object and follows a simple format, 'type-property'. For more clarity please check the following examples:

```
// SINGLE
console.log(CC("Green", "F-green"), "is great!");

// MULTIPLE
console.log( "I'm a", CC("yellow text with underscore.", "G-underscore", "F-yellow"));

// THEME
const error = CC("error:", "B-red");
console.log(error, "Something went wrong...");
```

---

> > > ## Demo

To try an online demo, please click [here](https://repl.it/talk/share/Console-Color/80202).

---

> > > ## Try locally

### `1`

### Clone the project to your local directory

```
$ git clone https://github.com/PhillipeAlves/console_color.git cd console_color
```

---

### `2`

### Install the dependencies

```
$ npm install
```

---

### `3`

### To run the server locally

```
$ npm run dev
```

---
