Project Name: DevStack

Description:
DevStack is a modern and interactive web application that helps developers explore different technologies and build their ideal development stack.
Browse technologies by category, check their ratings and difficulty levels, and add your favorite technologies to your personal stack.

Technologies Used:

- React
- TypeScript
- Tailwind CSS
- React Toastify
- Vite
- JSON API
- React Hooks

Features:

- Explore Technologies
  Browse a curated collection of development technologies including Frontend, Backend, Database, Languages, Styling, DevOps, and Tools.

- Build Your Stack
  Add technologies to your personal stack and easily see which technologies you've selected.

- Interactive User Experience
  Get instant feedback through toast notifications when adding, removing, or clearing technologies from your stack.

1. What is JSX, and why is it used?
   JSX is basically HTML written right inside your JavaScript code. Instead of keeping your layout and logic in separate files, React lets you mix them together so building interfaces feels natural and visually obvious.

2. Props vs. State
   Props are like read-only gifts passed down from a parent to a child component. The child gets to use them, but can't change them.
   State is a component’s personal memory. It holds data that changes over time (like a toggle switch or input text), and whenever it changes, the UI automatically refreshes to reflect it.

3. What does useState do?
   useState is a built-in React Hook that allows you to add state variables to functional components. It’s how React components remember things. Calling useState gives you two things: a variable holding your current data, and a special function to update that data whenever something changes (like adding a new skill to your list or typing in a text field).

4. What does useEffect do, and why use it for JSON data?
   useEffect lets you perform side effects in functional components, such as fetching data from an API or reading a local JSON file. Loading external JSON data is an asynchronous side effect that needs to happen after the initial UI renders; useEffect (with an empty dependency array []) ensures the fetch runs once when the component mounts without causing infinite render loops.

5. Why do .map() lists need a unique key?
   React uses unique key props to keep track of which specific items in a list are changed, added, or removed. This helps React optimize performance by updating only the modified elements in the real DOM instead of re-rendering the entire list.

6. What is conditional rendering?
Conditional rendering is the process of displaying different user interface (UI) elements or components based on specific conditions or states.
//YourStack.tsx
{selectedTech.length === 0 ? (
<p className="py-8 text-center text-sm text-gray-400">
  No technologies selected yet.
</p>
) : (
selectedTech.map((technology) => (
  // display selected technologies
))
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   Parents pass data to a Child through props. a Child sends something back by recieving a function through props, passing the related data into the function and then calling the function.
