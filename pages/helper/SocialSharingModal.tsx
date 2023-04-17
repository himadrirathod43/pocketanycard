// import { Modal } from "react-bootstrap-v5";
// import { KTSVG } from "../../_start/helpers";
// import {
//   EmailIcon,
//   EmailShareButton,
//   FacebookIcon,
//   FacebookShareButton,
//   LineIcon,
//   LineShareButton,
//   LinkedinIcon,
//   LinkedinShareButton,
//   TelegramIcon,
//   TelegramShareButton,
//   TwitterIcon,
//   TwitterShareButton,
//   WhatsappIcon,
//   WhatsappShareButton,
//   WorkplaceIcon,
//   WorkplaceShareButton,
// } from "react-share";
// import { useSelector } from "react-redux";
// import { RootState } from "../../setup";

export type Props = {
  show: boolean;
  handleClose: () => void;
};

const SocialSharingModal: React.FC<Props> = ({ show, handleClose }) => {
//   const templateUserData = useSelector(
//     (state: RootState) => state.templateUserData.templateUserData!
//   );
//   var services = "";
//   // eslint-disable-next-line array-callback-return
//   (templateUserData?.services || []).map((val: any) => {
//     services += val.services_id.name + ", ";
//     // services += val.name + ", ";
//   });
//   return (
//     <Modal
//       className="modal-sticky modal-sticky-lg modal-sticky-bottom-right review-modal share-modal"
//       id="kt_inbox_compose"
//       role="dialog"
//       data-backdrop="false"
//       aria-hidden="true"
//       tabIndex="-1"
//       show={show}
//       animation={true}
//     >
//       <div className="d-flex align-items-center justify-content-between py-4 ps-4 pe-4 border-bottom">
//         <h5 className="mb-0">Share Your card to the world</h5>
//         <div className="d-flex ms-2 pe-0">
//           {/*begin::Close*/}
//           <button
//             type="button"
//             className="btn btn-icon btn-sm btn-light-primary ms-2 pe-0"
//             data-bs-dismiss="modal"
//             onClick={handleClose}
//           >
//             <KTSVG
//               className="svg-icon-1"
//               path="/media/icons/duotone/Navigation/Close.svg"
//             />
//           </button>
//           {/*end::Close*/}
//         </div>
//       </div>
//       {/*end::Header*/}
//       {/*begin::Body*/}
//       <div className="modal-body pt-4 pb-3 px-0">
//         <div className="d-block">
//           <div className="d-flex inbox-t mb-4" style={{ textAlign: "center" }}>
//             <div className="d-flex flex-column flex-grow-1 position-relative">
//               <TwitterShareButton
//                 className="mb-2"
//                 url={`https://pocketsite.me/${templateUserData?.mobileNumber}`}
//               >
//                 <TwitterIcon size={32} round={true} />
//               </TwitterShareButton>
//               Twitter
//             </div>
//             <div className="d-flex flex-column flex-grow-1 position-relative">
//               <FacebookShareButton
//                 className="mb-2"
//                 url={`https://pocketsite.me/${templateUserData?.mobileNumber}`}
//               >
//                 <FacebookIcon size={32} round={true} />
//               </FacebookShareButton>
//               Facebook
//             </div>
//             <div className="d-flex flex-column flex-grow-1 position-relative">
//               <WhatsappShareButton
//                 className="mb-2"
//                 url={`https://pocketsite.me/${templateUserData?.mobileNumber}`}
//               >
//                 <WhatsappIcon size={32} round={true} />
//               </WhatsappShareButton>
//               Whatsapp
//             </div>
//             <div className="d-flex flex-column flex-grow-1 position-relative">
//               <LineShareButton
//                 className="mb-2"
//                 url={`https://pocketsite.me/${templateUserData?.mobileNumber}`}
//               >
//                 <LineIcon size={32} round={true} />
//               </LineShareButton>
//               Line
//             </div>
//           </div>

//           <div className="d-flex inbox-to mb-4" style={{ textAlign: "center" }}>
//             <div className="d-flex flex-column flex-grow-1 position-relative">
//               <LinkedinShareButton
//                 className="mb-2"
//                 url={`https://pocketsite.me/${templateUserData?.mobileNumber}`}
//               >
//                 <LinkedinIcon size={32} round={true} />
//               </LinkedinShareButton>
//               LinkedIn
//             </div>
//             <div className="d-flex flex-column flex-grow-1 position-relative">
//               <WorkplaceShareButton
//                 className="mb-2"
//                 url={`https://pocketsite.me/${templateUserData?.mobileNumber}`}
//               >
//                 <WorkplaceIcon size={32} round={true} />
//               </WorkplaceShareButton>
//               Workplace
//             </div>
//             <div className="d-flex flex-column flex-grow-1 position-relative">
//               <TelegramShareButton
//                 className="mb-2"
//                 url={`https://pocketsite.me/${templateUserData?.mobileNumber}`}
//               >
//                 <TelegramIcon size={32} round={true} />
//               </TelegramShareButton>
//               Telegram
//             </div>
//             <div className="d-flex flex-column flex-grow-1 position-relative">
//               <EmailShareButton
//                 className="mb-2"
//                 subject={`Visit me on https://pocketsite.me/${templateUserData?.mobileNumber}`}
//                 body={`my Services: ${services}`}
//                 url={`https://pocketsite.me/${templateUserData?.mobileNumber}`}
//               >
//                 <EmailIcon size={32} round={true} />
//               </EmailShareButton>
//               Email
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*end::Body*/}
//     </Modal>
//   );
// };

  return (
    <div>SocialSharingModal</div>
  )
}

export { SocialSharingModal };

