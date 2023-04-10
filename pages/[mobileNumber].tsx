/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, lazy, useState, Suspense } from "react";
import { nanoid } from "nanoid";
import Head from "next/head";
import Loading from "./component/Loading";

type Props = {
  user : any;
  mobileNumber: string;
};

const importView = (tempId: number) =>
  lazy(() =>
    import(
      `./templates/Template0${tempId}`
    ).catch(() => import(`./NotFound`))
  );

const UserByMobileNumber : React.FC<Props> = ({ user }) => {
  const [views, setViews] = useState<any>();

  async function loadViews(tempId: number) {
    const componentPromises = async (tempId: number) => {
      const View = await importView(tempId);
      const naid: string = nanoid(10);
      return <View key={naid} editMode={true} data={user.data}/>;
    };
    componentPromises(tempId).then(setViews);
  }

  useEffect(()=>{
    getUserTemplateData();
  },[])

  const getUserTemplateData = () => {
    console.log('user?.data[0]', user?.data[0]);
    const tempId = user?.data[0]?.selectedTemplateID;
    loadViews(tempId);
  };

  return (
    <>
    {console.log('user.data[0]===', user?.data[0])}
    {console.log('`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`', `https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`)}
      <Head>
        <title>{user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName : "Title"}</title>
        <meta name="description" content={`${user.data[0]?.description ? user.data[0]?.description : "Description"}`} key="desc" />
        <meta property="og:name" content={`${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName : "Username"}`} />
        <meta property="og:designation" content={`${user.data[0]?.designation ? user.data[0]?.designation : "Designation"}`} />
        <meta property="og:title" content={`${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName + " | " + user.data[0]?.designation + " | Pocketsite" : "Title"}`} />
        <meta property="og:website" content={`${user.data[0]?.websiteLink ? user.data[0]?.websiteLink : "Website"}`} />
        <meta property="og:address" content={`${user.data[0]?.address ? user.data[0]?.address : "Address"}`} />
        <meta property="og:email" content={`${user.data[0]?.email ? user.data[0]?.email : "Email"}`} />
        <meta property="og:whatsapp" content={`${user.data[0]?.whatsAppLink ? user.data[0]?.whatsAppLink : "WhatsaApp"}`} />
        <meta property="og:instagram" content={`${user.data[0]?.instagramLink ? user.data[0]?.instagramLink : "Instagram"}`} />
        <meta property="og:twitter" content={`${user.data[0]?.twitterLink ? user.data[0]?.twitterLink : "Twitter"}`} />
        <meta property="og:facebook" content={`${user.data[0]?.facebookLink ? user.data[0]?.facebookLink : "Facebook"}`} />
        <meta property="og:youtube" content={`${user.data[0]?.youTubeLink ? user.data[0]?.youTubeLink : "Youtube"}`} />
        <meta
          name="og:image"
          // content={`https://affb-103-206-138-92.in.ngrok.io/assets/images/bg-card.png`} 
          content={`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`} 
          // content={`https://admin.pocketsite.me/assets/4778a753-34d0-4b72-9663-a8c9c774699b.png`} 
          // content={`https://admin.pocketsite.me/assets/b4055716-8730-4ee7-a97a-7f10808ed9b8.png`} 
          />
      </Head>
      <Suspense fallback={<div className="text-center" style={{ color: "transparent linear-gradient(270deg,#7159d6,#06b9bb) 0 0 no-repeat padding-box" , textAlign : "center" }}><Loading /></div>}>{views}</Suspense>
    </>
  );
};

export default UserByMobileNumber;

export const getServerSideProps = async ({ params } : any) => {
    const { mobileNumber } = params;
    let last10Digit : string;
  
  if(mobileNumber.length >= 10) {
    last10Digit = mobileNumber.substring(mobileNumber.length - 10)
  }else { 
    last10Digit = mobileNumber
  }
    const response = await fetch(`https://admin.pocketsite.me/items/usertemplate?filter[mobileNumber][_eq]=${last10Digit}&fields=*,profile_image.*,company_logo.*.*,service1.*.*,service2.*.*,service3.*.*,service4.*.*`)
    
    const data = await response.json();
  
    console.log('data', data);

    return {
      props: {
        user: data,
      }
    }
  }

