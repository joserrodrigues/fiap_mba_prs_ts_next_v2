import { GetStaticProps } from "next";
import HomeScreen from "../src/Screens/Home/Home";
import { MenuInfo } from "../src/Interfaces/MenuInfo";

type iProps = {
  items: MenuInfo[];
};
const Home = ({ items }: iProps) => {
  return <HomeScreen items={items} />;
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  console.log("Inicio SSG getStaticProps");
  const res = await fetch(process.env.REACT_APP_URL + "api/getItems");
  const items = (await res.json()) as MenuInfo;
  console.log("Checking items");
  console.log(items);

  return {
    props: {
      items: items,
    },
  };
};
