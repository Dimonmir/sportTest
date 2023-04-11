import { createBrowserRouter } from "react-router-dom";
import PageForm from "../components/pageForm/pageForm";
import PageGuide from "../components/pageGuide/pageGuide";
import PageResult from "../components/pageResult/pageResult";

const router = createBrowserRouter([
    {
      path: "/",
      element: <PageForm/>,
    },
    {
      path: "/result",
      element: <PageResult />,
    },
    {
      path: "/guide/:guide",
      element: <PageGuide />,
    },
  ]);

  export default router