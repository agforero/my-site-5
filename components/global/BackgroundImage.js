import { useRouter } from 'next/router';
import PixelatedRotatingImage from './PixelatedRotatingImage';

export default function BackgroundImage() {
    const router = useRouter()
    const images = {
        "/": "/house.png"
    }
    var bgImage = images[router.asPath]
    return <PixelatedRotatingImage imgPath={images[router.asPath]}/>
}