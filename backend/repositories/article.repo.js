import { connectDB } from "../config/db.js";

export class ArticleRepository {
	constructor() {
		this.collectionName = "articles"; // MongoDB collection
	}

	async getCollection() {
		const db = await connectDB();
		return db.collection(this.collectionName);
	}

	async getAllArticles(filters = {}) {
		const collection = await this.getCollection();
		return collection.find(filters).toArray();
	}

	async getArticleById(id) {
		const collection = await this.getCollection();
		return collection.findOne({ _id: id });
	}

	async createArticle(article) {
		const collection = await this.getCollection();
		return collection.insertOne(article);
	}

	async updateArticle(id, updateFields) {
		const collection = await this.getCollection();
		return collection.updateOne({ _id: id }, { $set: updateFields });
	}

	async deleteArticle(id) {
		const collection = await this.getCollection();
		return collection.deleteOne({ _id: id });
	}
}
