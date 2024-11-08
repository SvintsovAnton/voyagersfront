import { FormRightSideTemplate, Button, Input } from "components/index"
import React from 'react';

import { PrivacePoliceWrapper,
        PrivacePolicerapper,
        TextBoxContainer
 } from "./styles"

export default function PrivacePolicy(){


    return (
    <PrivacePoliceWrapper>
<       PrivacePolicerapper>
            <TextBoxContainer>
                Welcome to Voyagers! We value your privacy and want to make sure you understand how we collect, use, and protect your personal information.
                1. Information We Collect
                We collect the following types of information:
                Personal Information: This includes your name, email address, and any other information you provide when you sign up or contact us.
                Usage Data: We collect data on how you use our website, such as your IP address, browser type, and the pages you visit.
                2. How We Use Your Information
                We use the information we collect to:
                Provide and improve our services.
                Respond to your inquiries or requests.
                Send updates or notifications (only if you have agreed to receive them).
                3 . Cookies
                We use cookies to improve your experience on our site. Cookies are small files stored on your device that help us remember your preferences and analyze website traffic. You can disable cookies in your browser settings, but some parts of the site may not work properly.      
                4. Sharing Your Information
                We do not sell, trade, or share your personal information with third parties, except:
                To comply with legal obligations.
                To protect the security and rights of our website and users.
                5. Data Security
                We take reasonable steps to protect your information from unauthorized access or misuse. However, no method of transmission over the internet is 100% secure.
                6. Your Rights
                You have the right to:
                Access, update, or delete your personal information.
                Opt-out of receiving marketing emails from us.
                Contact us if you have any concerns about your data.
                7. Contact Us
                If you have any questions or concerns about this Privacy Policy, please contact us at:
            </TextBoxContainer>
            <FormRightSideTemplate/>
        </PrivacePolicerapper>
    </PrivacePoliceWrapper>
    )
}