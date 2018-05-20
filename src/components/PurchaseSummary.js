import React from "react";
import ReactTooltip from "react-tooltip";

export default class SubTotal extends React.Component {
	render() {
		return (
			<div>
				<div className="purchase">
					<span>Subtotal</span>
					<span className="text-right">$102.96</span>
				</div>
				<div className="purchase">
					<a className="savings" data-tip data-for="global">
						Pickup Savings
					</a>
					<ReactTooltip
						id="global"
						className="tooltipSavings"
						aria-haspopup="true"
					>
						<p>
							Pickup your order in store helps cut costs and we pass savings onto
							you{" "}
						</p>
					</ReactTooltip>
					<span className="text-right">-$3.85</span>
				</div>
				<div className="purchase">
					<span>
					<p>Est Taxes and Fees </p>
					<span>
					<span className="text-right">$8.92</span>
					</span>
					<p> (Based on 94085) </p>
					</span>
				</div>

				<hr/>
				<div className="total"><strong> Est. Total: <span className="text-right">${this.props.total}</span> </strong></div>
			</div>
		)
	}
}
