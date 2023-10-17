package com.asset.model;

public class AssetDto {
	private int id;
	private String tag;
	private String category;
	private String asset_name;
	private String model;
	private String serial_number;
	private String related_entities;
	private String status;

	public AssetDto(int id, String tag, String category, String asset_name, String model, String serial_number,
			String related_entities, String status) {
		super();
		this.id = id;
		this.tag = tag;
		this.category = category;
		this.asset_name = asset_name;
		this.model = model;
		this.serial_number = serial_number;
		this.related_entities = related_entities;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getAsset_name() {
		return asset_name;
	}

	public void setAsset_name(String asset_name) {
		this.asset_name = asset_name;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getSerial_number() {
		return serial_number;
	}

	public void setSerial_number(String serial_number) {
		this.serial_number = serial_number;
	}

	public String getRelated_entities() {
		return related_entities;
	}

	public void setRelated_entities(String related_entities) {
		this.related_entities = related_entities;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public AssetDto() {
		super();
		// TODO Auto-generated constructor stub
	}


}
