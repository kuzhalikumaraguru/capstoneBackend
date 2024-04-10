//this is to connect backend code to mongoDb using mongoose;
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(`${process.env.db_url}/${process.env.db_name}`)

export default mongoose
/*this export mongoose indicates the common connection done in separate file which
is used everywhere for the schema creation 
in model and reference while req and response in controller*/

