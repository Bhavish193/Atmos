interface AtmosLogoProps {
    size?: number;
}

function AtmosLogoWind({ size = 42 }: AtmosLogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                stroke="currentColor"
                strokeWidth="3.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            >
                {/* Cloud */}
                <path
                    d="
                        M14 37
                        C14 29 20 24 28 24
                        C30 17 37 14 45 14
                        C54 14 60 20 60 29
                        C60 34 58 37 56 39
                    "
                />

                <path d="M14 39H46" />

                {/* Wind */}
                <path d="M8 48H38" />

                <path d="M14 54H28" />
            </g>
        </svg>
    );
}

export default AtmosLogoWind;