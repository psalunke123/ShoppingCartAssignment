import React from "react";
import {Panel} from "react-bootstrap";

export default class PromoCode extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			promoCode: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		this.setState({
			promoCode: e.target.value
		})
	}

	handleClick() {
		this.props.applyPromoCode(this.state.promoCode);
	}

	render() {
		return (
			<div className="">
				<Panel id="collapsible-panel-example-1">
					<Panel.Heading>
						<Panel.Title toggle className="purchase">See Item details</Panel.Title>
					</Panel.Heading>
					<Panel.Collapse>
						<Panel.Body>
							<div>
								<span className="purchase chairImage">
								<img
									className="chair"
									alt="Chair Pic"
									src="https://i5.walmartimages.com/asr/e01e48ef-4f28-43c5-a8f4-c90ee35568d6_1.3b1a8a31df477ebeb1a0dab6d8388bf9.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
								/>
								</span>
								<span className="chairDescription">Merax Ergonomic High-Back Racing Style Office</span>
								<div className="quantity">
									<span className="newValue"> $99.1</span>
									<span className="newValue"> Qt 1</span>
								</div>
							</div>
						</Panel.Body>
					</Panel.Collapse>
				</Panel>

				<Panel
					id="collapsible-panel-example-2"
					className="promoCode"
					defaultExpanded
				>
					<Panel.Heading>
						<Panel.Title toggle>Apply Promo Code</Panel.Title>
					</Panel.Heading>
					<Panel.Collapse>
						<Panel.Body>
							<div>
								<span className="">
								<input type="text" name="promo"
											 onChange={this.handleChange}/>
								</span>
								<span className="">
								<input type="submit"
											 value="Apply"
											 onClick={this.handleClick}
								/>
								</span>
							</div>
						</Panel.Body>
					</Panel.Collapse>
				</Panel>
			</div>
		);
	}
}