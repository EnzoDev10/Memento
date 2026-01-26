interface breakpoints {
    mobile: string;
    desktop: string;
}

const size: breakpoints = {
    mobile: "450px",
    desktop: "1440px",
};

export const devices = {
    mobile: `(max-width:${size.mobile})`,
    desktop: `(max-width:${size.desktop})`,
};
