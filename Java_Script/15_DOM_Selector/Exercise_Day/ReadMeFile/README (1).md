# DOM Manipulation

## Given the following code, complete the tasks below.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>DOM Exercise</title>
    <script defer src="script.js"></script>
    <style>
      Here you can use a css file if you like. div {
        width: 50px;
        height: 50px;
        display: inline-block;
      }
      .brown {
        background-color: brown;
      }
      .green {
        background-color: green;
      }
      .blue {
        background-color: blue;
      }
      .purple {
        background-color: purple;
      }
      .yellow {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <h1 id="change_heading">Change Me!</h1>
    SELECTED COLOR <span class="selected">None!</span>
    <section>
      <div class="brown"></div>
      <div class="green"></div>
      <div class="blue"></div>
      <div class="yellow"></div>
    </section>
  </body>
</html>
```

### Task 1

1. Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.

2. Replace the text "Change me" with "Hello World!".

3. When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

4. Create a new div element.

5. Give your new div a class of purple and style it so that it has a background color of purple.

6. Append your new div to the page to the section tag.
