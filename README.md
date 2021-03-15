This is my first JS project as a result of my JS learning from https://www.youtube.com/watch?v=3EMxBkqC4z0.

I also find this quite helpful: https://www.youtube.com/watch?v=W6NZfCO5SIk

# The bouncing ball game

## A brief record of the coding
### 2021.03.14
- Trying to move my code from CodeSandbox to local files.

- Has coded the movable paddle and ball. No interactions between them yet. (on codesandbox)

- Questions: 
  - Q: In `index.html`, why is `#gameScreen` in `<head>` rather than `body`?
  - A: In HTML, the `<style>` tag in `head` is used to define the style information for the website. It usually looks like:
    ```
    <style>
    h1 {color:red;}
    </style>
    ``` 
    to limit the scope of the style information to a single instance of `H1`, set the `id` attribute:
    ```
    #myid {border-width: 1; border: solid; text-align: center}
    ```
    See (https://www.w3.org/TR/html401/present/styles.html)

  - Q: **Uncaught SyntaxError: Cannot use import statement outside a module** for `import Paddle from "./paddle";`
  - A: In the index.html add `type = "module"` such that we have `<script type = "module" src="/src/index.js"></script>`

### 2021.03.15

- Paddle can move horizontally at the bottom of the canvas.
- Paddle stop at the boundaries.
- Can use keyboard arrows to control the movement of the paddle.
- Add the ball, and it can bounce around the boundaries.
- the canvas is at the middle of the webpage.