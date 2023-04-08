import { API_URL } from "./EnvVar";

export const mobNum = /^[1-9][0-9]{9}$/;
export const exclude0 = /^([1-9][0-9]{9})|([0][1-9][0-9]{9})$/;
export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const urlRegExp =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
export const valueToIDresolveAsyncSelect = (obj: any) => {
  let newSelectedArray: any = [];
  if (obj && obj.length > 1) {
    for (let key of obj) {
      newSelectedArray.push({ id: key.value });
    }
    return newSelectedArray;
  } else if (obj && obj.length === 1) {
    newSelectedArray.push({ id: obj[0].value });
    return newSelectedArray;
  } else {
    return newSelectedArray;
  }
};

export const iDToValueResolveSelect = (obj: any) => {
  let newSelectedArray: any = [];
  if (obj && obj.length > 1) {
    for (let key of obj) {
      newSelectedArray.push({ value: key.id, label: key.name, svg: key.svg });
    }
    return newSelectedArray;
  } else if (obj && obj.length === 1) {
    newSelectedArray.push({
      value: obj[0].id,
      label: obj[0].name,
      svg: obj[0].svg,
    });
    return newSelectedArray;
  } else {
    return newSelectedArray;
  }
};

export const imageToBase64 = (url: string, callback: Function) => {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
};

export const parseUrl = (url: string) => {
  if (url.includes("http") || url.includes("https")) {
    return url;
  } else {
    return `https://${url}`;
  }
};

export const ImageCropped = (croppedArea: string) => {
  let croppedObj = JSON.parse(croppedArea);
  const scale = 100 / croppedObj?.width;
  const transform = {
    x: `${-croppedObj?.x * scale}%`,
    y: `${-croppedObj?.y * scale}%`,
    scale,
    width: "100",
    height: "100",
  };
  const imageStyle = {
    // transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
    transform: `translate3d(${0}, ${0}, 0) scale3d(${transform.scale},${
      transform.scale
    },1)`,
    width: transform.width,
    height: transform.height,
  };
  return imageStyle;
};

export const socialSharing = async (templateUserData: any, fallback: any) => {
  var services = "";
  // eslint-disable-next-line array-callback-return
  // templateUserData?.services.map((val: any) => {
  //   services += val.name + ", ";
  // });
  var shareDetails = {
    // url: `${PUBLIC_URL}/${templateUserData?.mobileNumber}`,
    url: `${API_URL}/${templateUserData?.mobileNumber}`,
    title: `${templateUserData?.firstName} ${templateUserData?.lastName}`,
    text: `my Services: ${templateUserData?.service1?.name && templateUserData?.service1?.name} ${templateUserData?.service2?.name && templateUserData?.service2?.name} ${templateUserData?.service3?.name && templateUserData?.service3?.name} ${templateUserData?.service4?.name && templateUserData?.service4?.name}`,
  };
  if (navigator.share) {
    try {
      return await navigator.share(shareDetails);
    } catch (err) {
      console.error(err);
    }
  } else {
    // fallback code
    fallback();
  }
};

export const checkToken = (auth: any) => {
  if (auth.isAuthorized) {
    if (localStorage.getItem("refreshToken")) {
      var token: any = JSON.parse(window.atob(auth.accessToken.split(".")[1]));
      if (token.exp * 1000 < Date.now()) {
        return true;
      } else {
        return false;
      }
    }
  }
};
