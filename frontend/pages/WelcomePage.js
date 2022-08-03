import { welcomePageSlice } from '../store/slices/welcomePageSlice';
import WelcomePage from '../store/pageView/WelcomePage';
import { connect } from 'react-redux';

const mapStateProps = store => {
	return {
		cards: store.welcomePage,
	};
};

const mapDispatchProps = {
	addCards: welcomePageSlice.addCard,
	clear: welcomePageSlice.clear,
};

export default connect(mapStateProps, mapDispatchProps)(WelcomePage);
