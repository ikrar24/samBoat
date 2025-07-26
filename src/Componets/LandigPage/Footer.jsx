import React from 'react';
import logo from "../../assets/logo.png";
import facebookIcon from "../../assets/facebookIcon.png";
import googleIcon from "../../assets/googleIcon.svg";
import instaIcon from "../../assets/instaIcon.svg";
import xicon from "../../assets/xicon.svg";
import Location from "../../assets/Location.svg";
import email from "../../assets/email.png";
import call from "../../assets/call.png";

// Footer columns
const footerData = [
    {
        col: "Column One",
        text: ["Lorem Ipsum", "Lorem Ipsum"]
    },
    {
        col: "Column Two",
        text: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]
    },
    {
        col: "Column Three",
        text: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]
    },
    {
        col: "Column Four",
        text: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]
    }
];

// Contact details
const contactData = {
    bottomIcon: [Location, email, call],
    contact: [
        "1234 Ohio Street, South Gate, London 416 425",
        "Ourstudio@hello.com",
        "+1 234-567-8901"
    ]
};

const footerIcons = [facebookIcon, instaIcon, googleIcon, xicon];

function Footer() {
    return (
        <footer className="bg-[rgba(228,247,249,1)] mt-10 flex items-center justify-center">
            <div className="w-[90%]">

                {/* Top Section */}
                <div className="flex items-start justify-between flex-wrap gap-10 py-10">

                    {/* Logo */}
                    <ul>
                        <li>
                            <a href="#">
                                <img src={logo} alt="logo" className="w-[200px]" />
                            </a>
                        </li>
                    </ul>

                    {/* Footer Columns */}
                    {footerData.map((item, index) => (
                        <ul className="flex gap-5 flex-col" key={index}>
                            <li className="gap-3 flex flex-col">
                                <p className="headingFooter font-semibold">{item.col}</p>
                                {item.text.map((txt, i) => (
                                    <a href="#" className="text-sm text-gray-700 hover:underline" key={i}>
                                        {txt}
                                    </a>
                                ))}
                            </li>
                        </ul>
                    ))}
                </div>

                {/* Social Icons */}
                <ul className="flex items-center gap-3">
                    <p className="text-sm">Follow Us:</p>
                    {footerIcons.map((item, index) => (
                        <li key={index}>
                            <a href="#">
                                <img src={item} alt="social-icon" className="w-[20px]" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Divider */}
                <hr className="border-gray-300 my-4" />

                {/* Copyright + Contact Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4">

                    <p className="text-sm text-gray-600">&copy; 2025 Ikrar Ansari. All rights reserved.</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {contactData.contact.map((text, index) => (
                            <div className="flex items-center gap-2" key={index}>
                                <img src={contactData.bottomIcon[index]} alt="icon" className="w-[15px]" />
                                <p className="text-sm text-gray-700">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
