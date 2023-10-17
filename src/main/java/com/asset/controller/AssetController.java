package com.asset.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asset.model.ApiResponse;
import com.asset.model.Asset;
import com.asset.model.AssetDto;
import com.asset.service.AssetService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/assets")
public class AssetController {
	
	@Autowired
	private AssetService assetService;
	
    @PostMapping
    public ApiResponse<Asset> saveAsset(@RequestBody AssetDto assetDto){
        return new ApiResponse<>(HttpStatus.OK.value(), "User saved successfully.",assetService.save(assetDto));
    }

    @GetMapping
    public ApiResponse<List<Asset>> listAssets(){
        return new ApiResponse<>(HttpStatus.OK.value(), "User list fetched successfully.",assetService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<Asset> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.",assetService.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<AssetDto> update(@RequestBody AssetDto assetDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "User updated successfully.",assetService.update(assetDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
        assetService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "User deleted successfully.", null);
    }

	
}
