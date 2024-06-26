import {Video} from "./Video";

export interface Message {
  message: Video;
  room: string;
  type: string; // Assuming type can be "SERVER" or "CLIENT"
}
