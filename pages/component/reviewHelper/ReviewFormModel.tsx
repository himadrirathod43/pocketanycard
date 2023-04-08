export interface ReviewFormModel { 
    mobile_number: string;
    name: string;
    email: string;
    review_text: string;
    status: string;
    date_created: Date;
    user_template_id: string | number | undefined;
}