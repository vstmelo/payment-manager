import ContainerTemplate from "../../assets/styles/components/template";
import { Header } from "../../components/Header";
import SideBar from "../../components/SideBar";
import { ITemplate } from "../../types";

const Template = (props: ITemplate) => {
  const currentPath = window.location.pathname;
  return (
    <ContainerTemplate>
      {currentPath === "/" ? (
        props.children
      ) : (
        <>
          <div>
            <SideBar />
          </div>
          <div>
            <Header />
            {props.children}
          </div>
        </>
      )}
    </ContainerTemplate>
  );
};
export default Template;
