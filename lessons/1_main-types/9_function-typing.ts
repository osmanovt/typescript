enum PostStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}

async function getFaqs(req: {
    topicId: number,
    status?: PostStatus
}): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: PostStatus
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    
    return await res.json();
}