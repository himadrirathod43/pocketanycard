import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { InitReviewForm } from "./reviewHelper/InitReviewForm";
import { ReviewFormValidate } from "./reviewHelper/ReviewFormValidate";
import { ReviewFormModel } from "./reviewHelper/ReviewFormModel";
import { toast } from "react-toastify";
import SVG from "react-inlinesvg";
import Image from "next/image";
import { addReviews, getReviewsByTemplateID } from "./reviewHelper/ReviewModalCRUD";

 export type Props = {
  show: boolean;
  handleClose: () => void;
  data: any;
};

const ReviewModal: React.FC<Props> = ({ show, handleClose, data  }) => {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState<string>("write");
  const [reviews, setReviews] = useState<ReviewFormModel>(InitReviewForm);
  const [reviewsCount, setReviewsCount] = useState<number>(0);

  useEffect(()=> {
    getReviewsData();
  },[])

  const formik = useFormik({
    initialValues: InitReviewForm,
    validationSchema: ReviewFormValidate,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      if (values.mobile_number === data[0]?.mobileNumber || values.mobile_number === data[0]?.whatsAppLink!) {
        alert("You can not post review for your own");
        setSubmitting(false);
        setLoading(false);
      } else { 
        addReviews({
          ...values, user_template_id: data[0]?.id!, status: "Published"
        })
          .then((res : any) => {
            setSubmitting(false);
            toast.success("Success...! Thank you for reviewing, your review submited successfully.");
            setLoading(false);
            getReviewsData();
            resetForm();
            setTimeout(() => {
              handleClose();
            }, 200);
          })
          .catch((e) => {
            setSubmitting(false);
            toast.error("Error...! Something went wrong, unable to fetch old reviews, we will fix this ASAP.");
            setLoading(false);
          });
      }
    },
  });

   const toggleTabView = (tab: string) => {
     setToggle(tab);    
   };

   const getReviewsData = () => {
     if (data[0]?.id!) {
       getReviewsByTemplateID(data[0]?.id!)
         .then((res: any) => {
           setReviewsCount(res.data.data.length);
           setReviews(res.data.data);
         })
         .catch((e : any) => {
           toast.error("Error...! Something went wrong, unable to fetch old reviews, we will fix this ASAP.");
         });
     }
   };

  return <Modal
      className="modal-sticky review-modal"
      id="kt_inbox_compose"
      role="dialog"
      data-backdrop="false"
      aria-hidden="true"
      tabIndex="-1"
      show={show}
      animation={true}
    >
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="model-header">    
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between">
              <button
                className={`tabBtn me-5 ${toggle === "write" && "active"}`}
                type="button"
                onClick={() => {
                  toggleTabView("write");
                }}
              >
                Write Review
              </button>
              <button
                className={`tabBtn ${toggle === "view" && "active"}`}
                type="button"
                onClick={() => {
                  toggleTabView("view");                  
                }}
              >
                View Reviews
              </button>
            </div>
            <div className="d-flex ms-2">
              {/*begin::Close*/}
              <button
                type="button"
                className="btn btn-icon btn-sm btn-light-primary ms-2"
                data-bs-dismiss="modal"
                onClick={() => {
                  formik.resetForm();
                  handleClose();
                }}
              >
                {!loading ? (
                  <SVG
                    className="svg-icon-1 mh-50px svg-icon"
                    src={"/media/icons/duotone/Navigation/Close.svg"}
                  />
                ) : (
                  <span
                    className="indicator-progress"
                    style={{ display: "block" }}
                  >
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                  </span>
                )}
              </button>
              {/*end::Close*/}
            </div>
          </div>
          {/*end::Header*/}
        </div>     

        {/*begin::Body*/}
          <div className="modal-body border-top">
            <div className="d-block">
              { toggle === "write" ? (
                <>
                  <div className="d-flex inbox-to">
                    <div className="d-flex flex-column flex-grow-1 position-relative floating-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder=" "
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label className="float-label">* Name</label>
                      {formik.touched.name && formik.errors.name !== "" && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {formik.errors.name}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex inbox-to">
                    <div className="d-flex flex-column flex-grow-1 position-relative floating-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder=" "
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label className="float-label">* Email</label>
                      {formik.touched.email && formik.errors.email !== "" && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {formik.errors.email}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex inbox-to">
                    <div className="d-flex flex-column flex-grow-1 position-relative floating-group">
                      <input
                        type="text"
                        className="form-control"
                        name="mobile_number"
                        placeholder=" "
                        value={formik.values.mobile_number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label className="float-label">* Mobile</label>
                      {formik.touched.mobile_number &&
                        formik.errors.mobile_number !== "" && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              {formik.errors.mobile_number}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="d-flex inbox-to">
                    <div className="d-flex flex-column flex-grow-1 position-relative floating-group">
                      <textarea
                        className="form-control"
                        name="review_text"
                        maxLength={80}
                        placeholder=" "
                        value={formik.values.review_text}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      ></textarea>
                      <label className="float-label">* Message</label>

                      {formik.touched.review_text &&
                        formik.errors.review_text !== "" && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              {formik.errors.review_text}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="ms-12 pe-12">
                  {reviewsCount > 0 ? (
                    <table className="table review-tabel mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Review</th>
                        </tr>
                      </thead>
                      <tbody className="mb-0">
                        {Object.values(reviews).map((rev: any) => {
                          return (
                            <tr>
                              <td className="r-name">{rev.name}</td>
                              <td>{rev.review_text}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  ) : (
                    <>
                      <div className="d-flex justify-content-center flex-column align-items-center">
                        <h3 className="fw-normal">No one reviewed yet</h3>
                        <Image
                          src={`/media/images/review-opps.png`}
                          alt="review opps"
                          width="229"
                          height="303"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            {/*end::Body*/}
            {/*begin::Footer*/}
            <div className="justify-content-center d-flex">
              {toggle === "write" && (
                <button
                  type="submit"
                  className="btn btn-primary me-4 px-6"
                  disabled={formik.isSubmitting || !formik.isValid}
                  >
                    {!loading ? (
                      <span className="indicator-label text-uppercase">
                        Submit Review
                      </span>
                    ) : (
                      <span
                        className="indicator-progress"
                        style={{ display: "block" }}
                      >
                        Please wait...{" "}
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    )}
                </button>              
              )}
            </div>
          </div>
          {/*end::Footer*/}       
      </form>
      {/*end::Form*/} 
    </Modal>
};

export { ReviewModal }