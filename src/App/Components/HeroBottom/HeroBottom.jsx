import { Container, Image } from 'react-bootstrap';
import styles from './HeroBottom.module.scss';
import furnicap_frontdrop_cropped from '../../../Assets/furnicap_frontdrop_cropped.png';

function HomeHeroTop() {
	return (
		<Container fluid className={`${styles.hero} position-relative mt-5`}>
			<Container className="bg-dark opacity-75 h-85 w-85 position-absolute top-50 start-50 translate-middle border border-2 border-light rounded-5 text-light">
				<div className="h2 p-3 w-100 w-sm-80 w-md-70">
					Craft your ideal furniture Masterpieces today
				</div>
				<p className="p-3 w-100 w-sm-80 w-md-70">
					Our furniture embodies a perfect blend of functionality and
					aesthetic appeal ensuring that every piece
					enhances your home.
				</p>
			</Container>
			<Image
				src={furnicap_frontdrop_cropped}
				className="z-1 position-absolute bottom-5 bottom-md-0 end-0 h-50 h-sm-55 h-md-60 h-lg-65 w-75"
			/>
		</Container>
	);
}

export default HomeHeroTop;
