import ContainerTemplate from "../../assets/styles/components/template";
import { Header } from "../../components/Header";
import SideBar from "../../components/SideBar";
import { ITemplate } from "../../types";

const Template = (props: ITemplate) => {
  return (
    <ContainerTemplate>
      <div>
        <SideBar />
      </div>
      <div>
        <Header />
      </div>
      <div>{props.children}</div>
    </ContainerTemplate>
  );
};
export default Template;
