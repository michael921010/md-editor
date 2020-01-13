import uuid from 'uuid';

class Article {
    id = uuid.v4();
    subject = '';
    content = '';
    constructor({ id, subject, content }) {
        if (typeof subject !== 'string' || !subject.trim()) {
            throw new Error('Failed to establish article [subject] is illegal.');
        }

        if (typeof content !== 'string') {
            throw new Error('Failed to establish article [content] is illegal.');
        }

        if (id) this.id = id;
        this.subject = subject;
        this.content = content;
    }
}

export default Article;