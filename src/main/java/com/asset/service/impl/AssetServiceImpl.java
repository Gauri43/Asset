package com.asset.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asset.dao.AssetDao;
import com.asset.model.Asset;
import com.asset.model.AssetDto;
import com.asset.service.AssetService;


@jakarta.transaction.Transactional
@Service(value = "assetService")
public class AssetServiceImpl implements AssetService {

	@Autowired
	private AssetDao assetDao;

	@Override
	public Asset save(AssetDto asset) {
		Asset newAsset = new Asset();
	    newAsset.setId(asset.getId());
	    newAsset.setTag(asset.getTag());
	    newAsset.setCategory(asset.getCategory());
	    newAsset.setAsset_name(asset.getAsset_name());
	    newAsset.setModel(asset.getModel());
	    newAsset.setSerial_number(asset.getSerial_number());
	    newAsset.setRelated_entities(asset.getRelated_entities());
	    newAsset.setStatus(asset.getStatus());    
        return assetDao.save(newAsset);
	}

	@Override
	public List<Asset> findAll() {
		List<Asset> list = new ArrayList<>();
		assetDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id) {
		assetDao.deleteById(id);
	}

//	@Override
//	public Asset findOne(String asset_name) {
//		return assetDao.findByAsset_name(asset_name);
//	}

	@Override
	public Asset findById(int id) {
		Optional<Asset> optionalUser = assetDao.findById(id);
		return optionalUser.isPresent() ? optionalUser.get() : null;
	}

	@Override
	public AssetDto update(AssetDto assetDto) {
		Asset asset = findById(assetDto.getId());
		if (asset != null) {
			BeanUtils.copyProperties(assetDto, asset, "id");
			assetDao.save(asset);
		}
		return assetDto;

	}

}
