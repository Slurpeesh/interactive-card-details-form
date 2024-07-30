# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./snapshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/mobile-first-solution-webpack-react-typescript-tailwindcss-redux-QdJWf6Yguy](https://www.frontendmentor.io/solutions/mobile-first-solution-webpack-react-typescript-tailwindcss-redux-QdJWf6Yguy)
- Live Site URL: [https://interactive-test-details-form.vercel.app/](https://interactive-test-details-form.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Webpack](https://webpack.js.org/) - module bundler
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - strongly typed programming language
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Redux](https://redux.js.org/) - JS library for predictable and maintainable global state management

### What I learned

While working on this project, I learned more about TailwindCSS: it is possible to extend existing styles that are already embedded in Tailwind. The <code>@layer components</code> directive was used, as well as the <code>extend</code> key in the configuration file. I have encountered difficulty in implementing a gradient frame when focusing input. It was impossible to implement it with standard Tailwind classes. The answer from [Stack Overflow](https://stackoverflow.com/a/73844396) helped me to implement a custom class for this task.

The <code>@layer components</code>:

```css
@layer components {
  .gradient-border {
    padding: 0.5rem;
    border: double 1px transparent;
    border-radius: 6px;
    background-image: linear-gradient(white, white), linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%));
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
}
```

<code>extend</code> key:

```ts
theme: {
    extend: {
      colors: {
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        danger: 'hsl(var(--color-danger) / <alpha-value>)',
        'muted-dark': 'hsl(var(--color-muted-dark) / <alpha-value>)',
      },
    },
  },
```

### Continued development

I should further explore the TailwindCSS configuration to be more confident in writing styles. This framework holds a lot more possibilities than I am currently aware of.

### Useful resources

- [Stack Overflow (Gradient input)](https://stackoverflow.com/a/73844396) - This helped me to implement gradient border on input.

## Author

- Website - [Slurpeesh](https://slurpeesh-site.vercel.app/)
- Frontend Mentor - [@Slurpeesh](https://www.frontendmentor.io/profile/Slurpeesh)
