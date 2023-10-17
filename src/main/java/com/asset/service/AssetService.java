package com.asset.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.asset.model.Asset;
import com.asset.model.AssetDto;

public interface AssetService {
	Asset save(AssetDto asset);

	List<Asset> findAll();

	void delete(int id);

	//Asset findOne(String asset_name);

	Asset findById(int id);

	AssetDto update(AssetDto assetDto);
}
