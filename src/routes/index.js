import express from 'express';
import UserRoutes from './userRoutes.js';
import ProjectRoutes from "./projRoutes.js";
import MaterialRoutes from "./materialRoutes.js";
import PlanRoutes from "./planRoutes.js";
import AgreementRoutes from "./agreementRoutes.js";
import QuotationRoutes from "./quotationRoutes.js";
// import axios from 'axios';
const router = express.Router();
// var config = {
//     method: 'get',
//     url: 'https://api.countrystatecity.in/v1/states',
//     headers: {
//       'X-CSCAPI-KEY': 'API_KEY'
//     }
// };
// axios(config).then((res)=>{console.log(res.data)}).catch((error)=>{console.log(error)});
// // const responseData = response.data;
// // console.log(responseData);
// // async function fetchDataAndStoreInMongoDB() {
// //     try {
        
//         // await storeDataInMongoDB(responseData);
//     // } catch (error) {
//     //     console.error('Error fetching data from API:', error);
//     // }
// // }
// // fetchDataAndStoreInMongoDB();
router.get('/', (req, res) => {
    res.status(200).send(`<h1>Welcome to Backend</h1>`)
})
router.use('/project', ProjectRoutes)

router.use('/user', UserRoutes)
router.use('/material', MaterialRoutes)
router.use('/plan', PlanRoutes)
router.use('/agreement', AgreementRoutes)
router.use('/quotation', QuotationRoutes)


export default router