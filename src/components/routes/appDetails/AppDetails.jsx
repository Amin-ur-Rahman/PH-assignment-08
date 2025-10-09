import React, { useContext } from "react";
import AppInfo from "./appDetailsComponents/AppInfo";
import DataContext from "../../../DataContext";
import { useParams } from "react-router";
import Error404 from "../../header/Error404";

function AppDetails() {
  const appData = useContext(DataContext);
  const { appId } = useParams();

  const app = appData.filter((app) => app.id == appId);
  if (!app) return <Error404></Error404>;
  return (
    <div>
      <AppInfo></AppInfo>
    </div>
  );
}

export default AppDetails;
