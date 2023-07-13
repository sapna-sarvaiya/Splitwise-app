import { FC, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

import { IResponseObject } from "../../shared/interface";
import Notification, {
    notify,
} from "../../shared/components/notification/notification";

const ErrorHandler: FC = () => {
    const axiosInstance = axios.create();

    useEffect(() => {
        const resInterceptor = axiosInstance.interceptors.response.use(
            (res: AxiosResponse<IResponseObject<any>>) => {
                const data = res.data;
                if (data && data.message) {
                    if (data.code === 404) {
                        notify(data.message, "error");
                        throw new Error(data.message as string);
                    } else {
                        notify(data.message, "success");
                    }
                }

                return res;
            },
            (error: AxiosError<IResponseObject<any>>) => {
                const res = error.response;
                // check if error is having data
                if (res && res.data && res.status) {
                    const status = res.status;
                    const responseData = res.data;

                    // is http error code is 401, log out of the application
                    if (status === 401 && responseData) {
                        notify(responseData.message, "error");
                    } else if (res && responseData && responseData.message) {
                        // console.log('test error resInterceptor');
                        // if error data contains message field, add error notification
                        notify(responseData.message, "error");
                    }
                    throw error;
                }
            }
        );
        return () => axiosInstance.interceptors.response.eject(resInterceptor);
    }, [axiosInstance.interceptors.response]);
    return <Notification />;
};

export default ErrorHandler;
