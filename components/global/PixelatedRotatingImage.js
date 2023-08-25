export default function PixelatedRotatingImage({ imgPath }) {
    const height = "400px"
    const width = "400px"
    return (
        <div style={{padding: "50px"}}>
            <svg width={width} height={height} version="1.1" xmlns="http://www.w3.org/2000/svg">
                <filter id="pixelate" x="0" y="0">
                    <feFlood x="4" y="4" height="2" width="2" />
                    <feComposite width="14" height="14" />
                    <feTile result="a" />
                    <feComposite in="SourceGraphic" in2="a" operator="in" />
                    <feMorphology operator="dilate" radius="5" />
                </filter>
                {/* <image x="0" y="0" width={width} height={height} xlinkHref={imgPath} filter="url(#pixelate)" /> */}
            </svg>
            <div style={{filter: "url(#pixelate)"}}>
                <img className="slow-rotate" src={imgPath} height={height} alt={"sus"}/>
            </div>
        </div>
    )
}
