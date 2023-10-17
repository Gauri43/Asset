import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddAssetComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: '',
			tag: '',
			category: '',
			asset_name: '',
			model: '',
			serial_number: '',
			related_entities: '',
			status: '',
			message: null
		};
		this.saveAsset = this.saveAsset.bind(this);
	}

	saveAsset = (e) => {
		e.preventDefault();
		let asset = { id: this.state.id, tag: this.state.tag, category: this.state.category, asset_name: this.state.asset_name, model: this.state.model, serial_number: this.state.serial_number, related_entities: this.state.related_entities, status: this.state.status };
		console.log(asset);
		ApiService.addAsset(asset)
			.then(res => {
				this.setState({ message: 'Asset added successfully.' });
				this.props.history.push('/assets');
			});
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<div>
				<h2 className="text-center">Add Asset</h2>
				<form>
					<div className="form-group">
						<label>Asset Tag:</label>
						<input type="text" placeholder="Asset tag" name="tag" className="form-control" value={this.state.tag} onChange={this.onChange} />
					</div>

					<div className="form-group">
						<label>Asset Category:</label>
						<input type="text" placeholder="Asset Category" name="category" className="form-control" value={this.state.category} onChange={this.onChange} />
					</div>


					<div className="form-group">
						<label>Asset Name:</label>
						<input type="text" placeholder="Asset Name" name="asset_name" className="form-control" value={this.state.asset_name} onChange={this.onChange} />
					</div>

					<div className="form-group">
						<label>Asset Model:</label>
						<input type="text" placeholder="Asset Model" name="model" className="form-control" value={this.state.model} onChange={this.onChange} />
					</div>

					<div className="form-group">
						<label>Asset Serial Number:</label>
						<input type="text" placeholder="Asset Serial Number" name="serial_number" className="form-control" value={this.state.serial_number} onChange={this.onChange} />
					</div>

					<div className="form-group">
						<label>Asset Related Entities:</label>
						<input type="text" placeholder="Asset Related Entities" name="related_entities" className="form-control" value={this.state.related_entities} onChange={this.onChange} />
					</div>

					<div className="form-group">
						<label>Asset Status:</label>
						<input type="text" placeholder="Asset Status" name="status" className="form-control" value={this.state.status} onChange={this.onChange} />
					</div>


					<button className="btn btn-success" onClick={this.saveAsset}>Save</button>
				</form>
			</div>
		);
	}
}

export default AddAssetComponent;