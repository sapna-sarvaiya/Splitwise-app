import React from "react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Notification: React.FC = () => {
    return (
        <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
        />
    );
};

type NotificationType = "success" | "error";
export const notify = (
    message: string,
    type?: NotificationType,
    options: any = {}
) => {
    const msg = `${message[0].toUpperCase()}${message.substr(1)}`;

    options = {
        duration: 3000000,
        icon: null,
        style: {
            background: "#dc3545",
            color: "#FFFFFF",
            fontWeight: 500,
            zIndex: 99999,
        },
        ...options,
    };

    if (type === "success") {
        toast.success(msg, {
            ...options,
            style: { ...options.style, background: "#1ca051" },
        });
    } else if (type === "error") {
        toast.error(msg, {
            ...options,
            style: { ...options.style, background: "#e33737" },
        });
    } else {
        toast(message);
    }
};

export default Notification;
