exports.models = {

  User: {
    id: 'User',
    required: ['name', 'email', 'username'],
    properties: {
      name: {
        type: 'string',
        description: 'Name of the user'
      },
      email: {
        type: 'string',
        description: 'Email used for authentication and notifications'
      },
      phone: {
        type: 'string',
        description: 'Phone number of the user'
      }

    }
  },
  Article: {
    id: 'Article',
    required: ['content'],
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the Article'
      },
      title: {
        type: 'string',
        description: 'Title of the article'
      },
      content: {
        type: 'string',
        description: 'content of the article'
      },
      user: {
        type: 'User',
        description: 'User that created the article'
      }

    }
  },
  Comment: {
    id: 'Comment',
    required: ['content'],
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the Comment'
      },
      status: {
        type: 'string',
        description: 'Comment Status i.e Pending, approved or rejected'
      },
      content: {
        type: 'string',
        description: 'content of the Comment'
      },
      user: {
        type: 'User',
        description: 'User that created the Comment'
      }

    }
  }
};
