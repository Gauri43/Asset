import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListAssetComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            assets: [],
            message: null
        }
        this.deleteAsset = this.deleteAsset.bind(this);
        this.editAsset = this.editAsset.bind(this);
        this.addAsset = this.addAsset.bind(this);
        this.reloadAssetList = this.reloadAssetList.bind(this);
    }

    componentDidMount() {
        this.reloadAssetList();
    }

    reloadAssetList() {
        ApiService.fetchAssets()
            .then((res) => {
                this.setState({assets: res.data.result})
            });
    }

    deleteAsset(id) {
        ApiService.deleteAsset(id)
           .then(res => {
               this.setState({message : 'Asset deleted successfully.'});
               this.setState({assets: this.state.assets.filter(asset => asset.id !== id)});
           })

    }

    editAsset(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit-asset');
    }

    addAsset() {
        window.localStorage.removeItem("id");
        this.props.history.push('/add-asset');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Asset Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addAsset()}> Add Asset</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Asset ID</th>
                            <th>Asset Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.assets.map(
                        asset =>
                                    <tr key={asset.id}>
                                        <td>{asset.id}</td>
                                        <td>{asset.name}</td>
                                        
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteAsset(asset.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editAsset(asset.id)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListAssetComponent;