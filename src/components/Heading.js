import recipeImg from "../assets/image/recipe-app.png";
import clone from "../assets/image/clone.png";
import gpt3 from "../assets/image/gpt3.png";
import coffeShop from "../assets/image/coffe_app.png";
import BudgetApp from "../assets/image/budget.png";
import fastfoodImg from "../assets/image/fastfood.png";
import { Link } from "react-router-dom";

const Item = ({ children }) => (
  <p className="lg:text-sm text-[#81AFDD]">{children}</p>
);

const ButtonCart = () => {
  return (
    <button
      className={`border text-semibold px-6 py-1 bg-[#042C54] text-white text-xl transition duration-300 ease-in-out hover:bg-white hover:text-black mt-7 self-end rounded-[30px] self-cente`}
    >
      <Link to="https://thunderous-genie-84971f.netlify.app/"></Link>
    </button>
  );
};
const projects = [
  {
    image: clone,
    title: "Youtube clone",
    about: "Media application developed with react",
    link: "https://646624034d086413c76a374a--candid-arithmetic-a00379.netlify.app/",
    git_hub: "https://github.com/gorgitanevski/media_app",
  },
  {
    image: gpt3,
    title: "Gpt-3",
    about: "Web application developed with react",
    link: "https://dulcet-quokka-a18b0b.netlify.app/",
    git_hub: "https://github.com/gorgitanevski/gpt3",
  },
  {
    image: coffeShop,
    title: "Coffee shop",
    about: "E commerce website developed with React,RTK Query and Tailwind css",
    git_hub: "https://github.com/gorgitanevski/coffe_shop",
  },
  {
    image: fastfoodImg,
    title: "Fast food shop",
    about:
      "E commerce website developed with react, mui, tailwind css and redux",
    git_hub: "https://github.com/gorgitanevski/fastfood_app",
  },
  {
    image: BudgetApp,
    title: "Budget App",
    about: "Web application developed with react and bootstrap",
    link: "https://courageous-souffle-fbe930.netlify.app",
    git_hub: "https://github.com/gorgitanevski/budget_app",
  },
  {
    image: recipeImg,
    title: "Recipe Application",
    about:
      "Recipe application developed with react redux redux-toolkit, tailwind css",
    link: "https://thunderous-genie-84971f.netlify.app/",
    git_hub: "https://github.com/gorgitanevski/recipe_app",
  },
];

const Paragraph = () => (
  <p className="text-white font-semibold italic">Experience with</p>
);

const Heading = ({ children }) => (
  <h4 className="font-semibold text-white lg:text-xl text-2xl">{children}</h4>
);

export { Heading, Paragraph, Item, ButtonCart, projects };
