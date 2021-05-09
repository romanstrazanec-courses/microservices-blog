import React from "react";

const resolveContent = (comment) => {
    switch (comment.status) {
        case 'approved':
            return comment.content
        case 'pending':
            return 'This comment is awaiting moderation'
        case 'rejected':
            return 'This comment has been rejected'
    }
}

export default ({comments}) => {
    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{resolveContent(comment)}</li>
    })

    return <ul>{renderedComments}</ul>
}