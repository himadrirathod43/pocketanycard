export const mobNum = /^[1-9][0-9]{9}$/;
export const exclude0 = /^([1-9][0-9]{9})|([0][1-9][0-9]{9})$/;
export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const urlRegExp =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const parseUrl = (url: string) => {
  if (url.includes("http") || url.includes("https")) {
    return url;
  } else {
    return `https://${url}`;
  }
};

export default async function socialSharing (templateUserData: any, fallback: any) {
  var services = "";
  // eslint-disable-next-line array-callback-return

  var shareDetails = {
    // url: `${PUBLIC_URL}/${templateUserData?.mobileNumber}`,
    url: `https://b4b0-103-238-108-255.ngrok-free.app//${templateUserData?.mobileNumber}`,
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