export const OWNER_EMAIL = "Business@ssiclosures.com";

export const openEmail = (subject, body) => {
    const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(OWNER_EMAIL)}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
};