// import "../../templates/scss/temp02.scss";
// import SVG from "react-inlinesvg";
// import user01 from "../images/user01.png";
// import logo from "../images/logo.svg";
// import tax from "../images/icons/tax.svg";
// import bedge from "../images/icons/bedge.svg";
// import calc from "../images/icons/calc.svg";
// import cog from "../images/icons/cog.svg";
// import call from "../images/icons/call.svg";
// import map from "../images/icons/map.svg";
// import envelop from "../images/icons/envelop.svg";
// import location from "../images/icons/location.svg";
// import whatsapp from "../images/icons/whatsapp.svg";
// import instagram from "../images/icons/instagram.svg";
// import youtube from "../images/icons/youtube.svg";
// import twitter from "../images/icons/twitter.svg";
// import facebook from "../images/icons/facebook.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../setup";
// import { parseUrl, socialSharing } from "../../app/helper/helper";
// import { useEffect, useState } from "react";
// import { TemplateUserDataRedux } from "../../app/modules/template/redux/ReduxDispatchExport";
// // import { PUBLIC_URL } from "../../app/helper/EnvVar";
// // import { UploadImage } from "../../components/edit-template/UploadImage";
// // import { UploadImgCrop } from "../../_start/helpers/components/UploadImageCrop";
// // import { ReviewModal } from "../../app/pages/templates/components/Templates/common/ReviewModal";

// type Props = {
//   editMode: boolean;
// };

// const Template02 = ({ editMode = false }: Props) => {
//   const templateUserData = useSelector(
//     (state: RootState) => state.templateUserData.templateUserData!
//   );
//   const dispatch = useDispatch();
//   const [reviewModal, setReviewModal] = useState<boolean>(false);
//   // const [profileImageStyle, setProfileImageStyle] = useState<object>();
//   // const [logoImageStyle, setLogoImageStyle] = useState<object>();
//   const [, setShowFallback] = useState<boolean>(false);

//   useEffect(() => {
//     // if (templateUserData?.croppedAreaProfile) {
//     //   setProfileImageStyle(ImageCropped(templateUserData?.croppedAreaProfile));
//     // }
//     // if (templateUserData?.croppedAreaLogo) {
//     //   setLogoImageStyle(ImageCropped(templateUserData?.croppedAreaLogo));
//     // }
//   }, [templateUserData.croppedAreaLogo, templateUserData.croppedAreaProfile]);

//   useEffect(() => {
//     // const root = document.documentElement;
//     // root?.style.setProperty("--theme05", "#891500");
//     dispatch(
//       TemplateUserDataRedux.actions.setTemplateUserData({
//         ...templateUserData!,
//         templateColor: templateUserData?.templateColor || "#234170" ,
//       })
//     );
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [templateUserData?.selectedTemplateID, dispatch]);

//   const showReviewModal = () => {
//     setReviewModal(!reviewModal);
//   };

//   // const handleClose = () => {
//   //   setShowFallback(!showFallback);
//   // };

//   const share = () => {
//     socialSharing(templateUserData, () => {
//       setShowFallback(true);
//     });
//   };

//   return (
//     <>
//       <div className="template-main">
//         <div className="temp-inner temp-centerized">
//           <div className="temp-header bg-color">
//             <a href="#l" className="logo text-start bg-curve">
//               <img
//                 src={templateUserData?.companyLogo || logo}
//                 alt="logo"
//                 width="140"
//                 height="28"
//               />
//             </a>
//             <div className="user-avtar-cols justify-content-center flex-column">
//               <div className="user-img rounded mb-3">
//                 <img
//                   src={templateUserData?.profileImage || user01}
//                   alt="user01"
//                   width="150"
//                   height="150"
//                 />
//               </div>
//               <div className="col name-cols pe-0 text-center">
//                 <div className="user-name">
//                   {templateUserData?.firstName || 'John' }{" "}{templateUserData?.lastName || 'Doe'}
//                 </div>
//                 <div className="user-post">
//                   {templateUserData?.designation || `Co-founder `}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="temp-lower">
//             <ul className="list-unstyled d-flex service-list">
//               <li className="item">
//                 <a
//                   // href={`${templateUserData?.services[0]}`}
//                   className="ser-link"
//                 >
//                   <div className="icon">
//                     <SVG src={tax} fill={templateUserData?.templateColor || "#234170"} />
//                   </div>
//                   <span className="service-name">Income Tax Consultancy</span>
//                 </a>
//               </li>
//               <li className="item ">
//                 <a
//                   // href={`${templateUserData?.services[1]}`}
//                   className="ser-link"
//                 >
//                   <div className="icon">
//                     <SVG src={bedge} fill={templateUserData?.templateColor || "#234170"} />
//                   </div>
//                   <span className="service-name">Financial Investigation</span>
//                 </a>
//               </li>
//               <li className="item">
//                 <a
//                   // href={`${templateUserData?.services[2]}`}
//                   className="ser-link"
//                 >
//                   <div className="icon">
//                     <SVG src={calc} fill={templateUserData?.templateColor || "#234170"} />
//                   </div>
//                   <span className="service-name">Financial and investment</span>
//                 </a>
//               </li>
//               <li className="item">
//                 <a
//                   // href={`${templateUserData?.services[3]}`}
//                   className="ser-link"
//                 >
//                   <div className="icon">
//                     <SVG src={cog} fill={templateUserData?.templateColor || "#234170"} />
//                   </div>
//                   <span className="service-name"> Valuation</span>
//                 </a>
//               </li>
//             </ul>
//             <p className="desc text-center mb-5">
//               {templateUserData?.description ||
//                 `Award Winning web-developer with 7 years of experience in HTML
//               ,CSS, LAMP, My main interests are object-oriented and
//               user-centered design.`}
//             </p>

//             <ul className="contact-detail">
//               <li className="item">
//                 <a
//                   href={`tel:${
//                     templateUserData?.mobileNumber
//                       ? templateUserData?.mobileNumber
//                       : "#"
//                   }`}
//                   target={"_blank"}
//                   className="contact-link"
//                   rel="noreferrer"
//                 >
//                   <span className="icon">
//                     <SVG src={call} fill={templateUserData?.templateColor || "#234170"} />
//                   </span>
//                   <span className="link-text">
//                     {templateUserData?.mobileNumber
//                       ? templateUserData?.mobileNumber
//                       : `+91 9999999999`}
//                   </span>
//                 </a>
//               </li>
//               <li className="item">
//                 <a
//                   href={`${
//                     templateUserData?.websiteLink
//                       ? parseUrl(templateUserData?.websiteLink)
//                       : ""
//                   }`}
//                   target={"_blank"}
//                   className="contact-link"
//                   rel="noreferrer"
//                 >
//                   <span className="icon">
//                     <SVG src={map} fill={templateUserData?.templateColor || "#234170"} />
//                   </span>
//                   <span className="link-text">
//                     {templateUserData?.websiteLink
//                       ? templateUserData?.websiteLink
//                       : `www.mobilevisit.com`}
//                   </span>
//                 </a>
//               </li>
//               <li className="item">
//                 <a
//                   href={`mailto:${
//                     templateUserData?.email ? templateUserData?.email : ""
//                   }`}
//                   target={"_blank"}
//                   className="contact-link"
//                   rel="noreferrer"
//                 >
//                   <span className="icon">
//                     <SVG src={envelop} fill={templateUserData?.templateColor || "#234170"} />
//                   </span>
//                   <span className="link-text">
//                     {templateUserData?.email
//                       ? templateUserData?.email
//                       : `youremailid@somedomain.com`}
//                   </span>
//                 </a>
//               </li>
//               <li className="item">
//                 <a
//                   href={`http://maps.google.com/?q=${
//                     templateUserData?.address
//                       ? templateUserData?.address
//                       : `425, Shiven Square, Pal,Adajan, Surat, Gujarat, India - 395009`
//                   }`}
//                   target={"_blank"}
//                   className="contact-link"
//                   rel="noreferrer"
//                 >
//                   <span className="icon">
//                     <SVG
//                       src={location}
//                       fill={templateUserData?.templateColor || "#234170"}
//                     />
//                   </span>
//                   <span className="link-text">
//                     {templateUserData?.address ||
//                       `425, Shiven Square, Pal,Adajan, Surat, Gujarat, India -
//                     395009`}
//                   </span>
//                 </a>
//               </li>
//             </ul>
//             <ul className="social-media">
//               <li className="item">
//                 <a
//                   href={`https://wa.me/${templateUserData?.whatsAppLink}`}
//                   target={"_blank"}
//                   className="social-link"
//                   rel="noreferrer"
//                 >
//                   <SVG
//                     src={whatsapp}
//                     stroke={templateUserData?.templateColor || "#234170"}
//                     fill={templateUserData?.templateColor || "#234170"}
//                   />
//                 </a>
//               </li>
//               <li className="item">
//                 <a
//                   href={
//                     templateUserData?.youTubeLink
//                       ? parseUrl(templateUserData?.youTubeLink)
//                       : ""
//                   }
//                   target={"_blank"}
//                   className="social-link"
//                   rel="noreferrer"
//                 >
//                   <SVG
//                     src={youtube}
//                     stroke={templateUserData?.templateColor || "#234170"}
//                     fill={templateUserData?.templateColor || "#234170"}
//                   />
//                 </a>
//               </li>
//               <li className="item">
//                 <a
//                   href={
//                     templateUserData?.instagramLink
//                       ? parseUrl(templateUserData?.instagramLink)
//                       : ""
//                   }
//                   target={"_blank"}
//                   className="social-link"
//                   rel="noreferrer"
//                 >
//                   <SVG
//                     src={instagram}
//                     stroke={templateUserData?.templateColor || "#234170"}
//                     fill={templateUserData?.templateColor || "#234170"}
//                   />
//                 </a>
//               </li>
//               <li className="item">
//                 <a
//                   href={
//                     templateUserData?.twitterLink
//                       ? parseUrl(templateUserData?.twitterLink)
//                       : ""
//                   }
//                   target={"_blank"}
//                   className="social-link"
//                   rel="noreferrer"
//                 >
//                   <SVG
//                     src={twitter}
//                     stroke={templateUserData?.templateColor || "#234170"}
//                     fill={templateUserData?.templateColor || "#234170"}
//                   />
//                 </a>
//               </li>
//               <li className="item">
//                 <a
//                   href={
//                     templateUserData?.facebookLink
//                       ? parseUrl(templateUserData?.facebookLink)
//                       : ""
//                   }
//                   target={"_blank"}
//                   className="social-link"
//                   rel="noreferrer"
//                 >
//                   <SVG
//                     src={facebook}
//                     stroke={templateUserData?.templateColor || "#234170"}
//                     fill={templateUserData?.templateColor || "#234170"}
//                   />
//                 </a>
//               </li>
//             </ul>

//             <ul className="list-unstyled m-0 sharing-box">
//                   <li className="items mb-2">
//                     <button
//                       type="button"
//                       className="share-links"
//                       onClick={share}
//                     >
//                       <span className="fas fa-solid fa-share ser-icon"></span>
//                     </button>
//                   </li>
//                   <li className="items">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         !editMode && showReviewModal();
//                       }}
//                       className="share-links"
//                     >
//                       <span className="fas fa-comment-dots ser-icon"></span>
//                     </button>
//                   </li>
//                 </ul>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Template02;

import React from 'react'

const Template012  = () => {
  return (
    <div>Template012 </div>
  )
}

export default Template012 