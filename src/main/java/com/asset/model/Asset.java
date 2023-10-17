package com.asset.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "assets")
public class Asset {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String tag;
	private String category;
	private String asset_name;
	private String model;
	private String serial_number;
	private String related_entities;
	private String status;

	public int getId() {
		return id;
	}

	public Asset(int id, String tag, String category, String asset_name, String model, String serial_number,
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

	@Override
	public String toString() {
		return "Asset [id=" + id + ", tag=" + tag + ", category=" + category + ", asset_name=" + asset_name + ", model="
				+ model + ", serial_number=" + serial_number + ", related_entities=" + related_entities + ", status="
				+ status + "]";
	}

	public void setId(int id) {
		this.id = id;
	}

	public Asset() {
		super();
	}

}
