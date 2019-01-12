
```sh
// -------------
// API 
// localhost:4000/graphql

{
  courses(topic: "JavaScript") {
    title
    author
    description
  }
}

{
  course(id: 1) {
    title
    author
    description
  }
}

// -------------
// API LARAVEL
// localhost:8000/graphql

{
    posts {
        data {
            title,
            active
        }
    },
    users_paginated(page: 1) {
        current_page,
        data {
            name,
            id,
            posts {
                id,
                title,
                active
            }
        },
        total,
        per_page
    }
}

mutation insertPost($title: String!, $active: Boolean!, $user_id: Int!) {
    createPost(title: $title, active: $active, user_id: $user_id) {
        id
        title
        active
        user_id
    }
}

{
    "title": "Artigo 7",
    "active": true,
    "user_id": 13
}
```