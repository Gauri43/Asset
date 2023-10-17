import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddAssetComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
            message: null
        }
        this.saveAsset = this.saveAsset.bind(this);
    }

    saveAsset = (e) => {
        e.preventDefault();
        let asset = {id: this.state.id, name: this.state.name};
        ApiService.addAsset(asset)
            .then(res => {
                this.setState({message : 'Asset added successfully.'});
                this.props.history.push('/assets');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Asset</h2>
                <form>
                <div className="form-group">
                    <label>Asset ID:</label>
                    <input type="text" placeholder="Asset id" name="id" className="form-control" value={this.state.id} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Asset Name:</label>
                    <input type="text" placeholder="Asset name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>
                <button className="btn btn-success" onClick={this.saveAsset}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddAssetComponent;