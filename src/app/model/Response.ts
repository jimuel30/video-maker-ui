import {Video} from "./Video";

export interface Response{
  status:number;
  message:string;
  success:boolean;
  data:Video;
}
