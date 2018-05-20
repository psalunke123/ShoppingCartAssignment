import React from "react";
import "../components/style.css";
import PurchaseSummary from "../components/PurchaseSummary";
import PromoCode from "../components/promoCode";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
};

class App extends React.PureComponent {
	render() {
		return (
			<div style={styles}>
				<div className="container">
					<PurchaseSummary total={this.props.total}/>
					<PromoCode applyPromoCode={this.props.actions.applyPromoCode}
					/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		total: state.total.total
	};
}

function mapDispatchToProps(dispatch) {

	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);