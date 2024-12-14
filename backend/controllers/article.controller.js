import { ArticleRepository } from "../repositories/articleRepository.js";

const articleRepo = new ArticleRepository();

export const getAllArticles = async (req, res) => {
	try {
		const filters = req.query; // Optional filters
		const articles = await articleRepo.getAllArticles(filters);
		res.status(200).json(articles);
	} catch (error) {
		res.status(500).json({ message: "Error fetching articles", error });
	}
};

export const getArticleById = async (req, res) => {
	try {
		const article = await articleRepo.getArticleById(req.params.id);
		if (!article)
			return res.status(404).json({ message: "Article not found" });
		res.status(200).json(article);
	} catch (error) {
		res.status(500).json({ message: "Error fetching article", error });
	}
};

export const createArticle = async (req, res) => {
	try {
		const newArticle = req.body;
		await articleRepo.createArticle(newArticle);
		res.status(201).json({ message: "Article created successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error creating article", error });
	}
};

export const updateArticle = async (req, res) => {
	try {
		await articleRepo.updateArticle(req.params.id, req.body);
		res.status(200).json({ message: "Article updated successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error updating article", error });
	}
};

export const deleteArticle = async (req, res) => {
	try {
		await articleRepo.deleteArticle(req.params.id);
		res.status(200).json({ message: "Article deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error deleting article", error });
	}
};
