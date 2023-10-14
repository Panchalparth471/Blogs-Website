# Blogs-Website-
It is a React JS based blogs website in which concept of Context API in react JS is used . It uses createContext hook also it uses the Context Provider to use the context in our App anywhere.There are few steps tos use Context API.</br>
1.Create the context using createContext.
2.Make a context provider function and fill all the dynamic data in it and prepare an object which contains whole data and functions to update that data.
3.return the provider with passing the object in the props and pass children inside the tag so that our app component and its child can access the data.
4.Add our provider to index.js file and write our app component tag inside it.
5.Consume the context using useContext and access the data using destructuring.


This is a starter pack for creating React projects with Tailwind CSS configured. It uses React version **18.2** and Tailwind CSS version **3.2**.

## Usage

This starter pack includes a basic setup for using **Tailwind CSS with React**. To start building your own components and styles, follow these steps:

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/Panchalparth471/react-tailwind-css-starter-pack.git
    ```

2. Install the required packages.
    ```sh
    cd react-tailwind-css-starter-pack
    npm install
    ```

3. Start the development server.
    ```sh
    npm start
    ```
4. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.
5. Create your React components and add your styles using Tailwind classes. You can also create new CSS files and import them into your components.

The project is set up to use `postcss-cli` to process your CSS files. You can add your own `tailwind.config.js` file to customize your Tailwind setup.


