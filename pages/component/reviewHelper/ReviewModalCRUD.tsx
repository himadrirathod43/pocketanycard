import axios from "axios";
// import ReviewFormModel from "./ReviewFormModel";
// import { ReviewFormModel } from "./ReviewFormModel";

export default async function addReviews(data: any) {
    return await axios.post(`https://admin.pocketsite.me/items/reviews`, { ...data });
}    
    
// export async function getReviewsByTemplateID(user_template_id: string) {
//     return await axios.get(
//         `https://admin.pocketsite.me/items/reviews?filter[user_template_id][_eq]=${user_template_id}&limit=10`
//     );
// }