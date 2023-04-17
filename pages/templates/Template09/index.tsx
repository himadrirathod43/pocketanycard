// import "../../templates/scss/temp03.scss";
import SVG from "react-inlinesvg";
import user01 from "../images/user01.png";
import socialSharing, { parseUrl } from "../../../helper/helper";
import { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
// import { ReviewModal } from "../../component/ReviewModal";
import Image from "next/image";
import ReviewModal from "@/pages/component/ReviewModal";

type Props = {
  editMode: boolean;
  logoShape?: "circle" | "circular" | "rounded" | "square" | undefined;
  data: any;
};

export default function Template09 ({ data } : Props) {
  
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [showFallback, setShowFallback] = useState<boolean>(false);
  
  useEffect(() => {
    //
  }, [data[0]?.croppedAreaLogo, data[0]?.croppedAreaProfile]);
  
  useEffect(() => {
    setColor(data[0]?.templateColor || "#c45f1c");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data[0]?.selectedTemplateID]);
  
  function setColor(newColor: any) {
    let color = newColor ? newColor : "#c45f1c"
    document.documentElement.style.setProperty("--theme05", color);
    document.documentElement.style.setProperty(
      "--secondary05",
      data[0]?.templateSecondaryColor || "#fffef5"
    );
  }
  
  const showReviewModal = () => {
    setReviewModal(!reviewModal);
  };
  
  const handleClose = () => {
    setShowFallback(!showFallback);
  };
  
  const shareButton = () => {
    socialSharing(data[0], () => {
      setShowFallback(true);
    });
  };

  return (
    <>
      <div className="template-main">
        <div className="temp-inner">
          <div className="temp-header p-0">
            {data[0]?.isCompanyLogo ? (
              data[0]?.companyLogo ? (
                <span className={`logo d-flex ${data[0]?.logoShape === 'circle' ? "" : "ps-3 pe-3 pb-4 pt-4"}`}>
                {data[0]?.logoShape === "circle" ? (
                    <Image
                      src={`https://admin.pocketsite.me/assets/${data[0]?.company_logo?.filename_disk}`}
                      alt="logo"
                    />
                  ) : (
                    <Avatar
                      src={`https://admin.pocketsite.me/assets/${data[0]?.company_logo?.filename_disk}`}
                      variant="square"
                    />
                  )}
                </span>
              ) : (
                <div className="p-4 d-flex justify-content-center">
                  <Avatar
                    src={`https://admin.pocketsite.me/assets/${data[0]?.company_logo?.filename_disk}`}
                    variant="square"
                    style={{ width: "190px", height: "30px" }}
                  />
                </div>
              )
            ) : (
              ""
            )}
            <div className="col-saparate bg-color">
              <div className="row align-items-center flex-nowrap">
                <div className="col  pe-0">
                  <div className="user-img mb-3">
                    {data[0]?.isProfileImage ? (
                      data[0]?.profileImage ? (
                       <Avatar
                          src={`https://admin.pocketsite.me/assets/${data[0]?.profile_image?.filename_disk}`}
                          variant="circular"
                          style={{ width: "130px", height: "130px" }}
                        />
                      ) : (
                        <Avatar
                          src={`${user01}`}
                          variant="circular"
                          style={{ width: "130px", height: "130px" }}
                        />
                      )
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="inside-name position-relative">
                    <div className="name-wrap">
                      <div className="user-name">
                        {data[0]?.firstName || "John"}{" "}
                        {data[0]?.lastName || "Doe"}
                      </div>
                      <div className="user-post mb-1">
                        {data[0]?.designation || `Co-founder`}
                      </div>
                      {data[0]?.isCompanyName ? 
                        <div className="company-name user-post"> 
                          {data[0]?.companyName || "Infinity Aotumation"}
                        </div>
                        : ""}
                    </div>
                  </div>
                </div>
                <div className="col pe-0">
                  <ul className="list-unstyled d-flex service-list flex-column mb-0">
                    {data[0]?.service1?.name ? (
                      <li className="item" key={data[0]?.service1?.id}>
                        <div className="ser-link">
                          <div className="icon">
                            <SVG
                              src={`https://admin.pocketsite.me/assets/${data[0]?.service1?.svg?.filename_disk}`}
                              fill={"white"}
                              style={{ height: "23.434", width: "26.071" }}
                            />
                          </div>
                          <span className="service-name">
                            {data[0]?.service1?.name}
                          </span>
                        </div>
                      </li>
                    ) : (
                      ""
                    )}
                    {data[0]?.service2?.name ? (
                      <li className="item" key={data[0]?.service2?.id}>
                        <div className="ser-link">
                          <div className="icon">
                            <SVG
                              src={`https://admin.pocketsite.me/assets/${data[0]?.service2?.svg?.filename_disk}`}
                              fill={"white"}
                              style={{ height: "23.434", width: "26.071" }}
                            />
                          </div>
                          <span className="service-name">
                            {data[0]?.service2?.name}
                          </span>
                        </div>
                      </li>
                    ) : (
                      ""
                    )}
                    {data[0]?.service3?.name ? (
                      <li className="item" key={data[0]?.service3?.id}>
                        <div className="ser-link">
                          <div className="icon">
                            <SVG
                              src={`https://admin.pocketsite.me/assets/${data[0]?.service3?.svg?.filename_disk}`}
                              fill={"white"}
                              style={{ height: "23.434", width: "26.071" }}
                            />
                          </div>
                          <span className="service-name">
                            {data[0]?.service3?.name}
                          </span>
                        </div>
                      </li>
                    ) : (
                      ""
                    )}
                    {data[0]?.service4?.name ? (
                      <li className="item" key={data[0]?.service4?.id}>
                        <div className="ser-link">
                          <div className="icon">
                            <SVG
                              src={`https://admin.pocketsite.me/assets/${data[0]?.service4?.svg?.filename_disk}`}
                              fill={"white"}
                              style={{ height: "23.434", width: "26.071" }}
                            />
                          </div>
                          <span className="service-name">
                            {data[0]?.service4?.name}
                          </span>
                        </div>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="temp-lower">
            <p className="desc text-center mb-4">
              {data[0]?.description ||
                `Award Winning web-developer with 7 years of experience in HTML
              ,CSS, LAMP, My main interests are object-oriented and
              user-centered design.`}
            </p>

            <ul className="contact-detail3 contact-detail">
              <li className="item">
                <a
                  href={`tel:${
                    data[0]?.mobileNumber
                      ? data[0]?.mobileNumber
                      : "#"
                  }`}
                  target={"_blank"}
                  className="contact-link3 contact-link"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <SVG
                      src={"/assets/images/icons/call.svg"}
                      fill={data[0]?.templateColor || "#8e3939"}
                    />
                  </span>
                  <span className="link-text">
                    {" "}
                    {data[0]?.mobileNumber
                      ? data[0]?.mobileNumber
                      : `+91 9999999999`}
                  </span>
                </a>
              </li>
              {data[0]?.isWebsite ? (
                <li className="item">
                  <a
                    href={`${
                      data[0]?.websiteLink
                        ? parseUrl(data[0]?.websiteLink)
                        : ""
                    }`}
                    target={"_blank"}
                    className="contact-link3 contact-link"
                    rel="noreferrer"
                  >
                    <span className="icon">
                      <SVG
                        src={"/assets/images/icons/map.svg"}
                        fill={data[0]?.templateColor || "#8e3939"}
                      />
                    </span>
                    <span className="link-text">
                      {data[0]?.websiteLink
                        ? data[0]?.websiteLink.replace(/(^\w+:|^)\/\//, '')  
                        : `www.mobilevisit.com`}
                    </span>
                  </a>
                </li>
              ) : (
                ""
              )}
              <li className="item">
                <a
                  href={`mailto:${
                    data[0]?.email ? data[0]?.email : ""
                  }`}
                  target={"_blank"}
                  className="contact-link3 contact-link"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <SVG
                      src={"/assets/images/icons/envelop.svg"}                        
                      fill={data[0]?.templateColor || "#8e3939"}
                    />
                  </span>
                  <span className="link-text">
                    {" "}
                    {data[0]?.email
                      ? data[0]?.email
                      : `youremailid@somedomain.com`}
                  </span>
                </a>
              </li>
              <li className="item">
                <a
                  href={`http://maps.google.com/?q=${
                    data[0]?.address
                      ? data[0]?.address
                      : `425, Shiven Square, Pal,Adajan, Surat, Gujarat, India - 395009`
                  }`}
                  target={"_blank"}
                  className="contact-link3 contact-link"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <SVG
                      src={"/assets/images/icons/location.svg"}                        
                      fill={data[0]?.templateColor || "#8e3939"}
                    />
                  </span>
                  <span className="link-text">
                    {data[0]?.address ||
                      `425, Shiven Square, Pal,Adajan, Surat, Gujarat, India -
                    395009`}
                  </span>
                </a>
              </li>
            </ul>
            <ul className="social-media justify-content-center">
              {data[0]?.isWhatsapp ? (
                <li className="item">
                  <a
                    href={`https://wa.me/${data[0]?.whatsAppLink}`}
                    target={"_blank"}
                    className="social-link"
                    rel="noreferrer"
                  >
                    <SVG
                      src={"/assets/images/icons/whatsapp.svg"}                        
                      fill={data[0]?.templateColor || "#8e3939"}
                      stroke={data[0]?.templateColor || "#8e3939"}
                    />
                  </a>
                </li>
              ) : (
                ""
              )}
              {data[0]?.isYouTube ? (
                <li className="item">
                  <a
                    href={
                      data[0]?.youTubeLink
                        ? parseUrl(data[0]?.youTubeLink)
                        : ""
                    }
                    target={"_blank"}
                    className="social-link"
                    rel="noreferrer"
                  >
                    <SVG
                      src={"/assets/images/icons/youtube.svg"}                        
                      fill={data[0]?.templateColor || "#8e3939"}
                      stroke={data[0]?.templateColor || "#8e3939"}
                    />
                  </a>
                </li>
              ) : (
                ""
              )}
              {data[0]?.isInstagram ? (
                <li className="item">
                  <a
                    href={
                      data[0]?.instagramLink
                        ? parseUrl(data[0]?.instagramLink)
                        : ""
                    }
                    target={"_blank"}
                    className="social-link"
                    rel="noreferrer"
                  >
                    <SVG
                      src={"/assets/images/icons/instagram.svg"}                        
                      fill={data[0]?.templateColor || "#8e3939"}
                      stroke={data[0]?.templateColor || "#8e3939"}
                    />
                  </a>
                </li>
              ) : (
                ""
              )}
              {data[0]?.isTwitter ? (
                <li className="item">
                  <a
                    href={
                      data[0]?.twitterLink
                        ? parseUrl(data[0]?.twitterLink)
                        : ""
                    }
                    target={"_blank"}
                    className="social-link"
                    rel="noreferrer"
                  >
                    <SVG
                      src={"/assets/images/icons/twitter.svg"}                        
                      fill={data[0]?.templateColor || "#8e3939"}
                      stroke={data[0]?.templateColor || "#8e3939"}
                    />
                  </a>
                </li>
              ) : (
                ""
              )}
              {data[0]?.isFacebook ? (
                <li className="item">
                  <a
                    href={
                      data[0]?.facebookLink
                        ? parseUrl(data[0]?.facebookLink)
                        : ""
                    }
                    target={"_blank"}
                    className="social-link"
                    rel="noreferrer"
                  >
                    <SVG
                      src={"/assets/images/icons/facebook.svg"}                        
                      fill={data[0]?.templateColor || "#8e3939"}
                      stroke={data[0]?.templateColor || "#8e3939"}
                    />
                  </a>
                </li>
              ) : (
                ""
              )}

             
                <li className="item">
                  <button
                    type="button"
                    className="social-link"
                    style={{ borderWidth: "0px", background: "transparent" }}
                    onClick={shareButton}
                  >
                    <SVG
                      src={"/assets/images/shareNew.svg"}
                      style={{ width: "30px", height: "30px" }}
                      stroke={data[0]?.templateColor || "#a29d06"}
                    />
                  </button>
                </li>
           
             
                <li className="item">
                  <button
                    type="button"
                    onClick={() => {
                      showReviewModal();
                    }}
                    style={{ borderWidth: "0px", background: "transparent" }}
                    className="social-link"
                  >
                    <SVG
                      src={"/assets/images/icons/reviewNew.svg"}                        
                      style={{ width: "30px", height: "30px" }}
                      stroke={data[0]?.templateColor || "#a29d06"}
                    />
                  </button>
                </li>
            </ul>
          </div>
        </div>
      </div>
      {reviewModal && <ReviewModal show={reviewModal} handleClose={showReviewModal} data={data} />}
      
    </>
  );

};