import * as React from 'react';
import { connect } from 'react-redux';
import { setTimerID, updateCelebratedAge, updateCountdown, updateDialog } from './actions';
import * as Styles from './AppStyles';
import Dialog from './components/dialog/Dialog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Countdown from './components/countdown/Countdown';
import { RootState } from './reducers';
import * as moment from 'moment';
import { getBirth, getBirthday, getNextBirthday, getYearOffset } from './utils';

type Props = {
	timerID: RootState['unitDigits']['timerID'],
	dialog: RootState['dialog'],
	birth: RootState['birth'],
	setTimerID: typeof setTimerID,
	updateCelebratedAge: typeof updateCelebratedAge,
	updateCountdown: typeof updateCountdown,
	updateDialog: typeof updateDialog,
};

class App extends React.PureComponent<Props> {

	componentDidMount() {
		const timerID = window.setInterval(
			() => this.updateTime(),
			50,
		);
		this.props.setTimerID(timerID);
	}

	componentWillUnmount() {
		const { timerID } = this.props;
		clearInterval(timerID);
	}

	updateTime = () => {
		const now = moment.utc();

		const birth = getBirth(this.props.birth);
		const birthday = getBirthday(now.year(), this.props.birth);
		const nextBirthday = getNextBirthday(now.year(), getYearOffset(now, birthday), this.props.birth);

		this.props.updateCelebratedAge(now, birth);
		this.props.updateCountdown(now, nextBirthday);
		this.props.updateDialog(now, birthday);
	}

	renderDialog = () => {
		const { dialog } = this.props;

		if (!dialog.active || !dialog.visible) { return null; }

		return (
			<Dialog/>
		);
	}

	render() {
		return (
			<Styles.App>
				<Styles.Background/>
				<Header/>
				<Countdown/>
				<Footer/>
				{this.renderDialog()}
			</Styles.App>
		);
	}
}

const mapStateToProps = (state: RootState) => {
	return {
		timerID: state.unitDigits.timerID,
		dialog: state.dialog,
		birth: state.birth,
	};
};

export default connect(mapStateToProps, {
	setTimerID,
	updateCelebratedAge,
	updateCountdown,
	updateDialog,
})(App);
