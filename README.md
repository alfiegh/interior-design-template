# Interior Design Template

This website was created with React. It is a landing page for a mockup interior design website, buttons and links are functional but they will not trigger any events or links, feel free to implement that functionality on your side and according to your needs.

The CSS is done with both _Bootstrap_ and _inline Style_, some CSS is inside **App.css file** organised in the same order the sections are.

## Features

- Parallax sections.
- Smooth scrolling with react-scroll.
- Animations with react-reveal.
- Toggle functionality.
- Notification with react-toastify.

### Components

The following are reusable components with their props that are being used in other sections:

- Navbar
- Carousel
- FAQ (for each question)
- Package (for each room package)

### Sections

There are a total of 11 sections plus 2 components, as follows:

- Navbar
- Parallax Hero banner
- Home Steps
- Recent Projects
- Full Service link with Parallax
- Room Packages
- Got Questions banner
- Client Reviews
- Meet the team
- Carousel Gallery
- Why Us?
- FAQs
- Footer

#### Recommended Improvements

1. Create a Component for Home Steps section, pass all the data as props and map it to render.
2. Declare an array of objects with data to map and pass it to Package component in Room Packages section instead of having 3 components.
3. Create a ClientReviewCard component to use in Client Reviews section.

#### If you plan to use this template

All the links and buttons are there however the onClick function will only trigger a notification prompting _On your website this will take you somewhere else_ because this template was only made as an example. Feel free to use it and change to your needs.

#### Images and Logo

**Logo:** credits to ClipartMax
**Images:** credits to their authors in Unsplash

In the project directory, you can run:

# To run the app:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### For all other scripts please refer to ReactJs documentation.
