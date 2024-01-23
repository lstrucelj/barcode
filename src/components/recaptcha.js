import React, { useRef, useState, useEffect } from "react";

const CAPTCHA_SITE_KEY = "6LdhPlcpAAAAANj3aNDLRIeQL-cZ-YOHwoLLac97"; // todo: key

const useRecaptchaV3 = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const onRecaptchaLoadCallback = () => {
        setIsLoaded(true);
    };

    useEffect(() => {
        if (window.grecaptcha) {
            setIsLoaded(true);
        } else {
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=${CAPTCHA_SITE_KEY}`;
            script.async = true;
            document.head.appendChild(script);
            script.onload = onRecaptchaLoadCallback;
        }
    }, []);

    const executeRecaptcha = async (action) => {
        if (isLoaded && window.grecaptcha) {
            return await window.grecaptcha.execute(CAPTCHA_SITE_KEY, {
                action,
            });
        }
    };

    return executeRecaptcha;
};

export default useRecaptchaV3;
