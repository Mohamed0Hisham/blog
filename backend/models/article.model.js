export const articleModel = {
	title: { type: String, required: true },
	content: { type: String, required: true },
	tags: { type: Array, default: [] },
	publishedDate: { type: Date, default: new Date() },
};
