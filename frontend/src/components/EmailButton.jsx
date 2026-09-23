import { FiMail } from "react-icons/fi";
import { openEmail } from "../utils/email";

function EmailButton() {

    const handleEmail = () => {
        openEmail(
            "Enquiry for SSICLOSURES",
            `Hello SSICLOSURES,

I would like to know more about your closure solutions.

Please contact me regarding my requirement.

Thank you.`
        );
    };

    return (
        <button
            onClick={handleEmail}
            className="
                fixed
                bottom-6
                right-6
                z-50
                w-14
                h-14
                rounded-full
                bg-[#023E8A]
                text-white
                flex
                items-center
                justify-center
                shadow-lg
                hover:bg-[#012f68]
                hover:scale-105
                transition-all
                duration-300
            "
            aria-label="Contact SSICLOSURES by email"
            title="Contact us by email"
        >
            <FiMail size={24} />
        </button>
    );
}

export default EmailButton;