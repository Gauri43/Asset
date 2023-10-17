package com.asset.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.asset.model.Asset;

@Repository
public interface AssetDao extends CrudRepository<Asset, Integer> {
//	public Asset findByAsset_name(String asset_name);
}
