// import { env, endpoints } from "../env";
// import axios from 'axios';

export const services = {
    uploadFile: (file) => {

        let formData = new FormData();

        formData.append('file_type', file)

        // return axios.post(`${env.apiURL}/${endpoints.uploadFile}`, 
        //     formData)
        //     .then(res => res.data)
        return {
            "message": "File Uploaded",
            "process_id": 2
        }
    }
}