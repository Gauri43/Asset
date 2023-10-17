import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditAssetComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
        }
        this.saveAsset = this.saveAsset.bind(this);
        this.loadAsset = this.loadAsset.bind(this);
    }

    componentDidMount() {
        this.loadAsset();
    }

    loadAsset() {
        ApiService.fetchAssetById(window.localStorage.getItem("id"))
            .then((res) => {
                let asset = res.data.result;
                this.setState({
                id: asset.id,
                name: asset.name,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveAsset = (e) => {
        e.preventDefault();
        let asset = {id: this.state.id, name: this.state.name};
        ApiService.editAsset(asset)
            .then(res => {
                this.setState({message : 'Asset added successfully.'});
                this.props.history.push('/assets');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Asset</h2>
                <form>

                    <div className="form-group">
                        <label>Asset Id:</label>
                        <input type="text" placeholder="Asset id" name="id" className="form-control" readonly="true" defaultValue={this.state.id}/>
                    </div>

                    <div className="form-group">
                        <label>Asset Name:</label>
                        <input placeholder="Asset Name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                    </div>
 
                    <button className="btn btn-success" onClick={this.saveAsset}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditAssetComponent;