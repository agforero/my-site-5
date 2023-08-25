export default function PixelationFilter() {
    return (
        <svg height="0" width="0">
            <defs>
                <filter id="pixelate-filter">
                    <feFlood x="0" y="0" width="20" height="20" result="color" />
                    <feImage xlinkHref="#color" x="0" y="0" width="100%" height="100%" />
                    <feTile in="color" result="tile" />
                    <feComposite in="tile" in2="SourceGraphic" operator="in" />
                </filter>
            </defs>
        </svg>
    );
}