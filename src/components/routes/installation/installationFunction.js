function getAppData() {
  const appDataSTR = localStorage.getItem("installed");

  if (appDataSTR) {
    const appData = JSON.parse(appDataSTR);
    return appData;
  } else {
    return [];
  }
}

function setAppData(id) {
  const appData = getAppData();
  console.log("initial data", appData);

  if (appData.includes(id)) {
    // alert("this app is already installed");
    return appData;
  } else {
    appData.push(id);
    const appDataSTR = JSON.stringify(appData);
    localStorage.setItem("installed", appDataSTR);
    // console.log("appdata from utility", appData);
    return appData;
  }
}

export { setAppData, getAppData };
