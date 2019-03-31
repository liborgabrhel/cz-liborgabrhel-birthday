import * as React from 'react';
import * as Styles from './SocialLinkStyles';

type Props = {
	linkUrl: string,
	linkName: string,
};

class SocialLink extends React.PureComponent<Props> {
	render() {
		const { linkUrl, linkName } = this.props;
		return (
			<Styles.SocialLink href={linkUrl}>
				{linkName}
			</Styles.SocialLink>
		);
	}
}

export default SocialLink;
