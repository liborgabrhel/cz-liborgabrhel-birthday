import * as React from 'react';
import * as Styles from './FooterStyles';
import SocialLink from './social/SocialLink';
import SocialSites, { SocialSite } from './social/SocialSites';

class Footer extends React.PureComponent {
	_renderLinks = () => {
		return SocialSites.map((site: SocialSite, index: number) => {
			const numberOfLinks = SocialSites.length;
			let conjunction = '';
			if (index < numberOfLinks - 2) {
				conjunction = ', ';
			}
			if (index === numberOfLinks - 2) {
				conjunction = ' or ';
			}
			return (
				<Styles.SocialLinkContainer
					key={site.name}
				>
					<SocialLink
						linkUrl={site.url}
						linkName={`${site.name}`}
					/>
					{conjunction}
				</Styles.SocialLinkContainer>
			);
		});
	}

	render() {
		return (
			<Styles.Footer>

				<Styles.FooterText>
					{`find me on `}
					{this._renderLinks()}
				</Styles.FooterText>

			</Styles.Footer>
		);
	}
}

export default Footer;
