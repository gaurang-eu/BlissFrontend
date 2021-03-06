export interface Question {
    id:string;
    question:string;
    image_url:string;
    thumb_url:string;
    published_at:string;
    choices:[{choice:string, votes:number}];
}